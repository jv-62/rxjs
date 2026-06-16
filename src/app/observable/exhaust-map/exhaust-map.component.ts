import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements AfterViewInit {
  @ViewChild('btn') btn: ElementRef<HTMLInputElement>;
  url = 'https:/global-1bb0f.firebaseio.com/exhaustMap.json';
  num = 0;
  fetching = false;
  _service = inject(AppService);
  _http = inject(HttpClient);

  constructor() {}

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => (this.fetching = true)),
        exhaustMap(() => this.onSave(this.num++))
      )
      .subscribe(res => {
        this.fetching = false;
        console.log(res);
      });
  }

  onButtonClick(): void {
    this.num++;
    this.onSave(this.num).subscribe(res => {
      console.log(res);
    });
  }

  onSave(changes: number): Observable<unknown> {
    return this._http.put(this.url, { data: changes });
  }

  onFetch(): void {
    this._http.get<{ data: number }>(this.url).subscribe(res => {
      this.num = res.data;
    });
  }
}
