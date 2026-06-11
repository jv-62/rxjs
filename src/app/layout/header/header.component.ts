import { Component, inject, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  exclusive = false;
  appService = inject(AppService);

  constructor() {}

  ngOnInit(): void {
    this.appService.exclusive.subscribe(res => {
      this.exclusive = res;
    });
  }
}
