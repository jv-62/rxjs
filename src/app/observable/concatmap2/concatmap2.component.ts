import { Component, inject, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-concatmap2',
  templateUrl: './concatmap2.component.html',
  styleUrls: ['./concatmap2.component.scss'],
})
export class Concatmap2Component implements OnInit {
  appService = inject(AppService);
  notifyData = [
    {
      name: 'Facebook',
      icon: 'assets/facebook.jpg',
      time: '1 Second Ago',
      img: 'https://placeimg.com/50/50/tech/1',
      strong: 'James Smith',
      p: 'Twitted : Lorem ipsum sdkjsd jshd kshdfhsdjkf',
    },
    {
      name: 'Facebook',
      icon: 'assets/facebook.jpg',
      time: '2 Second Ago',
      img: 'https://placeimg.com/50/50/tech/1',
      strong: 'James Smith',
      p: 'Twitted : Lorem ipsum sdkjsd jshd kshdfhsdjkf',
    },
    {
      name: 'Facebook',
      icon: 'assets/facebook.jpg',
      time: '3 Second Ago',
      img: 'https://placeimg.com/50/50/tech/1',
      strong: 'James Smith',
      p: 'Twitted : Lorem ipsum sdkjsd jshd kshdfhsdjkf',
    },
    {
      name: 'Facebook',
      icon: 'assets/facebook.jpg',
      time: '4 Second Ago',
      img: 'https://placeimg.com/50/50/tech/1',
      strong: 'James Smith',
      p: 'Twitted : Lorem ipsum sdkjsd jshd kshdfhsdjkf',
    },
  ];

  constructor() {}
  ngOnInit(): void {
    from(this.notifyData)
      .pipe(concatMap(res => this.getHtml(res)))
      .subscribe(res => {
        console.log(res);
        this.appService.print2(res, 'elContainer');
      });
  }
  getHtml(data: { name: string; icon: string; time: string; img: string; strong: string; p: string }): Observable<string> {
    return of(`
      <div class="header">
          <div class="app">
              <img src="${data.icon}" alt="Facebook icon" width="20">
              Facebook
          </div>
          <div class="time">${data.time}</div>
      </div>
      <div class="body">
          <img src="${data.img}" class="item-img">
          <strong>${data.strong}</strong>
          <p>${data.p}</p>
      </div>`).pipe(delay(2000));
  }
}
