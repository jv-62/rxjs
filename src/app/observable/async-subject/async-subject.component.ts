import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit: any;
  constructor(private _service: AppService) {}

  ngOnInit(): void {
    this._service.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    });
  }

  onVideoAdd(video): void {
    console.log('video', video);
    this._service.asyncVideoEmit.next(video);
  }

  onComplete(): void {
    this._service.asyncVideoEmit.complete();
  }
}
