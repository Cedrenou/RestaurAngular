import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 1, rows: 1 },
          { title: 'Burgers', cols: 1, rows: 1 },
          { title: 'Galette / Crêpes', cols: 1, rows: 1 },
          { title: 'Pizza', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1 },
        { title: 'Burgers', cols: 2, rows: 1 },
        { title: 'Galette / Crêpes', cols: 2, rows: 1 },
        { title: 'Pizza', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}