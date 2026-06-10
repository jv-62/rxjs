import { Component, OnInit } from '@angular/core';
import { from, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  namesArray = ['Jayam', 'Typescript', 'Javascript', 'Nodejs', 'Rxjs', 'Laptop'];

  constructor(private _service: AppService) {}
  ngOnInit(): void {
    const nameSource = from(this.namesArray);

    // Ex - 01 Take(5)
    nameSource.pipe(take(5)).subscribe(res => {
      console.log(res);
      this._service.print(res, 'elContainer');
    });

    // Ex - 02 TakeLast(5)
    nameSource.pipe(takeLast(3)).subscribe(res => {
      console.log(res);
      this._service.print(res, 'elContainer2');
    });

    // Ex - 02 TakeLast(5)
    const source = interval(1000);
    const condition1 = timer(5000);

    source
      .pipe(
        map(res => 'number ' + res),
        takeUntil(condition1)
      )
      .subscribe(res => {
        console.log(res);
        this._service.print(res, 'elContainer3');
      });
  }
}
