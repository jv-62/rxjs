import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

export interface ISearch {
  thumb: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Jayam');
  videoEmit = new ReplaySubject<string>(2, 5000);
  asyncVideoEmit = new AsyncSubject();

  URL = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList';

  constructor(private _http: HttpClient) {}

  print(val: any, id: string) {
    const el = document.createElement('li');
    el.innerText = val;
    const container = document.getElementById(id);
    if (container) {
      container.appendChild(el);
    }
  }

  print2(val: any, id: string) {
    const el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    const container = document.getElementById(id);
    if (container) {
      container.appendChild(el);
    }
  }

  getSearches(search: string): Observable<ISearch[]> {
    return this._http.get<ISearch[]>(this.URL + '?q=' + search);
  }
}
