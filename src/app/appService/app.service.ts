import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Jayam');
  videoEmit = new ReplaySubject<string>(2, 5000);
  asyncVideoEmit = new AsyncSubject();
  constructor() { }

  print(val:any, id:string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(id)?.appendChild(el);
  }

}
