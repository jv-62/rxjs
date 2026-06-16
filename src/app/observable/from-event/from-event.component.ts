import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppService } from '../../appService/app.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('addVideoBtn') addVideoBtn?: ElementRef<HTMLInputElement>;
  _service = inject(AppService);

  constructor() {}

  ngAfterViewInit(): void {
    if (this.addVideoBtn) {
      let i = 1;
      fromEvent(this.addVideoBtn.nativeElement, 'click').subscribe(() => {
        this._service.print('Video ' + i++, 'AddChildElement');
      });
    }
  }
}
