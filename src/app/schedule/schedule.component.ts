import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, map, switchMap, tap} from 'rxjs/operators';

import {ScheduleService} from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result = null;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.searchTerms$
      .pipe(
        debounceTime(1000),
        switchMap(word => this.scheduleService.search(word)),
        tap(x => console.log(x))
      )
      .subscribe(data => this.result = data);
  }
}
