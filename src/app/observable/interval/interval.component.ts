import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg?: string;
  videoSubcription?: Subscription;
  constructor(private _service: AppService) { }

  ngOnInit(): void {
    // const broadCastVideos = interval(1000);
    const broadCastVideos = timer(5000,1000);
    let i = 0;
    this.videoSubcription = broadCastVideos.subscribe(res => {
      // console.log("video " + i++);
      this.obsMsg = "video " + i++;
      this._service.print(this.obsMsg, 'intervalEmit');
      if (res >= 5) 
        this.videoSubcription?.unsubscribe();
      
    })
  }

}
