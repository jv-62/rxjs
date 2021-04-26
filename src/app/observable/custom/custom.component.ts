import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  constructor(private _service: AppService) { }
  
  techStatus = '';
  techStatus2 = '';
  name;
  randomStatus;
  subscription: Subscription;

  ngOnInit() {
    // Ex - 1 Manual
    let arr = ["Angular", "Typescript", "Javascript", "Nodejs","Reactjs"]
    let arr1 = ['Jayam','Kenil','Hardik','John','Doe','Anuj','Rishab','Nirmal']
    // for (let i = 0; i < arr.length; i++) {
    //   setTimeout(() => {
    //     observer.next(arr)
    //   }, 1000*i);
    // }
    var subObs1 = new Observable(observer => {
      setTimeout(() => {
        observer.next("Angular")
      }, 1000);
      setTimeout(() => {
        observer.next("Typescript")
      }, 2000);
      setTimeout(() => {
        observer.next("Javascript")
      }, 3000);
      setTimeout(() => {
        observer.next("Html and Css")
        // observer.error("Limit exeeded");
      }, 4000);
      setTimeout(() => {
        observer.next("Nodejs")
        observer.complete();
      }, 5000);
    })
    subObs1.subscribe(res => {
      // console.log(res);
      this._service.print(res,"manualList")
    }, (err) => {
      this.techStatus = 'error';
    }, () => {
      this.techStatus = 'completed';
    })
    // Ex - 2 (Custom Interval)
    var subObs2 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count]);
        // if (count >= 3)
        // observer.complete();
        if (count == 4)
          observer.error("Error emit");
        count++;
      }, 1000);
    })

    this.subscription = subObs2.subscribe((res) => {
      // console.log(res);
      this._service.print(res,"customList")
    }, (err) => {
      this.techStatus2 = 'error';
    }, () => {
      this.techStatus2 = 'completed';
    })
    // Ex - 3 (Random names)

    var subObs3 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr1[count]);
        // if (count >= 4)
        //   observer.error("Error emit");
        if (count >= 7)
          observer.complete();
        count++;
      }, 1000);
    })
    subObs3.subscribe(res => {
      console.log("Res => ", res);
      this.name = res;
    }, (err) => {
      this.randomStatus = 'error';
    }, () => {
      this.randomStatus = 'complete';
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
