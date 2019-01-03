import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';

import {QuickLunchService} from '../services/quick-lunch.service';
import {Food} from '../models/food.interface';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Burgers', cols: 1, rows: 1},
          {title: 'Galette / Crêpes', cols: 1, rows: 1},
          {title: 'Pizza', cols: 1, rows: 1}
        ];
      }

      return [
        {title: 'Burgers', cols: 2, rows: 1, id: 'burger'},
        {title: 'Galette / Crêpes', cols: 2, rows: 1, id: 'galette'},
        {title: 'Pizza', cols: 2, rows: 1, id: 'pizza'}
      ];
    })
  );

  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];

  constructor(private breakpointObserver: BreakpointObserver, private qls: QuickLunchService) {
  }

  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizzas();
    this.galettes = this.qls.getGalettes();
  }
}
