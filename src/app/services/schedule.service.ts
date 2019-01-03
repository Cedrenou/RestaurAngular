import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) {
  }

  search(term): Observable<Object> {
    console.log('search');
    return this.httpClient
      .get('assets/schedule.json')
      .pipe(
        map(res => res['events'].filter(event => event.title.indexOf(term) > -1)),
        tap(filteredEvents => console.log('filteredEvents', filteredEvents))
      );
  }
}
