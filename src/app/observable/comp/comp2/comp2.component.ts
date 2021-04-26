import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  userName: string;
  constructor(private _service : AppService) { }

  ngOnInit(): void {
    this._service.userName.subscribe(res => {
      this.userName = res;
    })
  }
  updateUserName(uName) {
    this._service.userName.next(uName.value)
  }

}
