import { Component, inject, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  obsMsg: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  _service = inject(AppService);
  constructor() {}

  ngOnInit(): void {
    // OF
    const ofData = of('Angular', 'Typescript', 'Javascript', 'Nodejs');
    ofData.subscribe(res => {
      console.log(res);
      this._service.print(res, 'odData');
    });
    const ofData2 = of({ a: 'Angular', b: 'Typescript', c: 'Javascript', d: 'Nodejs' });
    ofData2.subscribe(res => {
      this.obsMsg = res;
      console.log(res);
    });

    // FROM - ARRAY
    const fromArrayData = from(['Angular', 'Typescript', 'Javascript']);
    fromArrayData.subscribe(res => {
      console.log(res);
      this._service.print(res, 'fromData');
    });

    // FROM - Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 3000);
    });
    const fromPromiseData = from(promise);
    fromPromiseData.subscribe((res: string) => {
      console.log(res);
      this._service.print(res, 'fromPromiseData');
    });

    // FROM - String
    const fromStringData = from('Angular with rxjs');
    fromStringData.subscribe(res => {
      console.log(res);
      this._service.print(res, 'fromStringData');
    });
  }
}
