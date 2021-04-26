import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  constructor(private _service : AppService) { }

  ngOnInit(): void {
    this._service.exclusive.subscribe(res => {
      this.exclusive = res;
    })
  }

}
