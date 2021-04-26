import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private _service: AppService) { }
  // List Data
  user1List = [
    'Angular 8',
    'Angular 9'
  ];
  user2List = [];
  user3List = [];

  // Toggle data
  methodInterval: boolean = false;
  
  // SubscribeModes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Subscription
  subscription2: Subscription;
  subscription3: Subscription;
  videSubscription: Subscription;

  ngOnInit(): void {
    this._service.videoEmit.subscribe(res => {
      this.user1List.push(res);
    })
  }
  
  onVideoAdd(video) {
    this._service.videoEmit.next(video)
  }
  
  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._service.videoEmit.subscribe(res => {
        this.user2List.push(res);
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._service.videoEmit.subscribe(res => {
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }
  
  toggleMethod() {
    if (this.methodInterval) {
      this.videSubscription.unsubscribe();
    } else {
      const broadCastVideo = interval(2000);
      this.videSubscription = broadCastVideo.subscribe(res => {
        this._service.videoEmit.next('Video ' + res);
      })
    }
    this.methodInterval = !this.methodInterval;
  }
}
