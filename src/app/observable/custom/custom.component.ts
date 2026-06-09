import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit, OnDestroy {
  constructor(private _service: AppService) {}

  techStatus = '';
  techStatus2 = '';
  name;
  randomStatus;
  subscription: Subscription;

  ngOnInit() {
    const arr = ['Angular', 'Typescript', 'Javascript', 'Nodejs', 'Reactjs'];
    const arr1 = ['Jayam', 'Kenil', 'Hardik', 'John', 'Doe', 'Anuj', 'Rishab', 'Nirmal'];
    // Ex - 1 Manual
    this.manualObservable();

    // Ex - 2 (Custom Interval)
    this.customInterval(arr);

    // Ex - 3 (Random names)
    this.randomNames(arr1);
  }

  randomNames(arr1: string[]) {
    const subObs3 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr1[count]);
        if (count >= 7) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    subObs3.subscribe(
      res => {
        console.log('Res => ', res);
        this.name = res;
      },
      err => {
        this.randomStatus = 'error';
      },
      () => {
        this.randomStatus = 'complete';
      }
    );
  }

  customInterval(arr: string[]) {
    const subObs2 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count]);
        if (count == 4) {
          observer.error('Error emit');
        }
        count++;
      }, 1000);
    });

    this.subscription = subObs2.subscribe(
      res => {
        this._service.print(res, 'customList');
      },
      err => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      }
    );
  }

  manualObservable() {
    const subObs1 = new Observable(observer => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);
      setTimeout(() => {
        observer.next('Javascript');
      }, 3000);
      setTimeout(() => {
        observer.next('Html and Css');
      }, 4000);
      setTimeout(() => {
        observer.next('Nodejs');
        observer.complete();
      }, 5000);
    });
    subObs1.subscribe(
      res => {
        this._service.print(res, 'manualList');
      },
      err => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
