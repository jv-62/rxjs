import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private _service : AppService) { }
  userName: string;
  ngOnInit(): void {
    this._service.userName.subscribe(res => {
      this.userName = res;
    })
  }
  
  updateUserName(uName) {
    this._service.userName.next(uName.value)
  }
}
