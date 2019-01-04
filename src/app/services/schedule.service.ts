import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Schedule} from '../models/schedule.interface';
import {EveningEvent} from '../models/evening-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) {
  }

  search(term: string): Observable<EveningEvent[]> {
    return this.httpClient
      .get<Schedule>('assets/schedule.json')
      .pipe(
        map(res => res['events'].filter(event => event.title.indexOf(term) > -1 || event.description.indexOf(term) > -1)),
        tap(filteredEvents => console.log('filteredEvents', filteredEvents))
      );
  }
}
