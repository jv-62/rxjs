import { Component, inject, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  obs: Subscription;
  obs2: Subscription;
  myColor;
  _service = inject(AppService);

  constructor() {}

  ngOnInit(): void {
    const source = interval(1000);

    // Ex - 01
    const arr = ['Jayam', 'Verma', 'Rxjs', 'Typescript', 'Nodejs', 'Javascript', 'PHP', 'Express'];
    this.obs = source
      .pipe(
        tap(res => {
          if (res === arr.length) {
            this.obs.unsubscribe();
          }
        }),
        map(res => arr[res])
      )
      .subscribe(res => {
        console.log(res);
        this._service.print(res, 'elContainer');
      });
    const color = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Purple', 'Violet'];
    this.obs2 = source
      .pipe(
        tap(res => {
          if (res === color.length) {
            this.obs2.unsubscribe();
          }
        }),
        map(res => color[res])
      )
      .subscribe(res => {
        console.log(res);
        this.myColor = res;
        this._service.print(res, 'elContainer2');
      });
  }
}
