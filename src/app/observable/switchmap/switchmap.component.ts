import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeAll, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor(private _service : AppService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    // Ex - 01 | MergeMap
    source.pipe(mergeMap(x => this.getData(x))).subscribe(response => {
      console.log(response);
      this._service.print(response,'elContainer')
    });
    // Ex - 02 | ConcatMap
    source.pipe(
      concatMap(x => this.getData(x))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res,'elContainer1')
    });
    // Ex - 03 | SwitchMap
    source.pipe(
      switchMap(x => this.getData(x))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res,'elContainer2')
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }

}
