import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private _service: AppService) { }
  asyncVideoEmit: any;

  ngOnInit(): void {
    this._service.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }
  
  onVideoAdd(video) {
    console.log(video);
    this._service.asyncVideoEmit.next(video)
  }
  
  onComplete() {
    this._service.asyncVideoEmit.complete()
  }
  
  
}