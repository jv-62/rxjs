import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

export interface ISearch{
  thumb: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Jayam');
  videoEmit = new ReplaySubject<string>(2, 5000);
  asyncVideoEmit = new AsyncSubject();

  URL = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList';
  
  constructor(private _http: HttpClient) { }

  print(val:any, id:string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(id)?.appendChild(el);
  }

  print2(val:any, id:string) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(id)?.appendChild(el);
  }

  getSearches(search):Observable<ISearch> {
    return this._http.get<ISearch>(this.URL+"?q="+search);
  }

}
