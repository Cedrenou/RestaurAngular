import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result = '';

  constructor() {
  }

  ngOnInit() {
    this.searchTerms$
      .pipe(
        tap(i => console.log('tap before', i)),
        map(saisie => saisie.toUpperCase()),
        map(uppercased => this.reverse(uppercased)),
        tap(i => console.log('tap after', i)),
        debounceTime(1000)
      )
      .subscribe(data => this.result = data);
  }

  reverse(word) {
    return word.split('').reverse().join('');
  }


}
