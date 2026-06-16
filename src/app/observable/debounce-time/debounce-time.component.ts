import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef<HTMLInputElement>;
  @ViewChild('myInput2') myInput2: ElementRef<HTMLInputElement>;
  reqData: string = null;
  reqData2: string = null;
  _loadingBar = inject(LoadingBarService);

  constructor() {}

  ngAfterViewInit(): void {
    // Ex - 01
    const searchTerm = fromEvent<KeyboardEvent>(this.myInput.nativeElement, 'keyup');
    searchTerm
      .pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(500)
      )
      .subscribe(res => {
        console.log(res);
        this.reqData = res;
        this._loadingBar.start();
        setTimeout(() => {
          this.reqData = null;
          this._loadingBar.stop();
        }, 1000);
      });
    // Ex - 02
    const searchTerm2 = fromEvent<KeyboardEvent>(this.myInput2.nativeElement, 'keyup');
    searchTerm2
      .pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(res => {
        console.log(res);
        this.reqData2 = res;
        this._loadingBar.start();
        setTimeout(() => {
          this.reqData2 = null;
          this._loadingBar.stop();
        }, 1000);
      });
  }
}
