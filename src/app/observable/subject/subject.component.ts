import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName: string;
  constructor(private _service : AppService) { }

  ngOnInit(): void {
    this._service.userName.subscribe(res => {
      this.userName = res;
    })
    this._service.exclusive.next(true);
  }
  
  ngOnDestroy() {
    this._service.exclusive.next(false); 
  }

}
