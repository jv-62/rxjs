import { Component, inject, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
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
