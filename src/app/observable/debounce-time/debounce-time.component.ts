import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput: ElementRef;
  reqData: string = null;
  @ViewChild('myInput2') myInput2: ElementRef;
  reqData2: string = null;
  
  constructor(private _loadingbar:LoadingBarService) { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    // Ex - 01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup')
    searchTerm.pipe(
      map(event => event.target.value),
      debounceTime(500)
    ).subscribe(res => {
      console.log(res);
      this.reqData = res;
      this._loadingbar.start();
      setTimeout(() => {
        this.reqData = null;
        this._loadingbar.stop();
      }, 1000);
    })
    // Ex - 02
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup')
    searchTerm2.pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(res => {
      console.log(res);
      this.reqData2 = res;
      this._loadingbar.start();
      setTimeout(() => {
        this.reqData2 = null;
        this._loadingbar.stop();
      }, 1000);
    })
  }

}
