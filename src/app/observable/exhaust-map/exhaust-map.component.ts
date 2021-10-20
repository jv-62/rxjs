import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, exhaustMap, tap } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  constructor(private _service: AppService, private _http: HttpClient) { }

  url = 'https:/global-1bb0f.firebaseio.com/exhaustMap.json';
  num: number = 0;
  fetching: boolean = false;
  @ViewChild('btn') btn: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(()=>this.fetching=true),
      exhaustMap(()=>this.onSave(this.num++))
    ).subscribe(res => {
      this.fetching = false;
      console.log(res);
    })
  }

  onButtonClick() {
    this.num++;
    this.onSave(this.num).subscribe(res => {
      console.log(res);
    })
  }

  onSave(changes) {
    return this._http.put(this.url,{data:changes})
  }

  onFetch() {
    this._http.get<any>(this.url).subscribe(res => {
      this.num = res.data;
    })
  }

}
