import { Component, inject, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit: string;
  appService = inject(AppService);

  constructor() {}

  ngOnInit(): void {
    this.appService.asyncVideoEmit.subscribe((res: string) => {
      this.asyncVideoEmit = res;
    });
  }

  onVideoAdd(video: string): void {
    console.log('video', video);
    this.appService.asyncVideoEmit.next(video);
  }

  onComplete(): void {
    this.appService.asyncVideoEmit.complete();
  }
}
