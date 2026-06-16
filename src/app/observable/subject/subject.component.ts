import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName: string;
  _service = inject(AppService);

  constructor() {}

  ngOnInit(): void {
    this._service.userName.subscribe(res => {
      this.userName = res;
    });
    this._service.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._service.exclusive.next(false);
  }
}
