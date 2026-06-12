import { Component, inject, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
})
export class Comp3Component implements OnInit {
  userName: string;
  appService = inject(AppService);

  constructor() {}

  ngOnInit(): void {
    this.appService.userName.subscribe(res => {
      this.userName = res;
    });
  }
  updateUserName(uName: HTMLInputElement): void {
    this.appService.userName.next(uName.value);
  }
}
