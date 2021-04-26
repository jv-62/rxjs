import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppService } from '../../appService/app.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor(private _service : AppService) { }

  @ViewChild('addVideoBtn') addVideoBtn?: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.addVideoBtn) {
      let i = 1;
      fromEvent(this.addVideoBtn.nativeElement, 'click').subscribe(res => {
        // console.log("Video " + i++)
        this._service.print("Video " + i++,'AddChildElement')
      })
    }
  }

  // print(data: string) {
  //   // AddChildElement
  //   let elem = document.createElement('li');
  //   elem.innerText = data;
  //   document.getElementById('AddChildElement')?.appendChild(elem);
  // }

}
