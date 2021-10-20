import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor(private _service : AppService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    // Ex - 1 | Map
    source.pipe(
      map(x => this.getData(x))
    ).subscribe(res => res.subscribe(response => {
      console.log(response);
      this._service.print(response, 'elContainer');
    }))
    // Ex - 2 | MergeMap
    source.pipe(
      mergeMap(x => this.getData(x))
    ).subscribe(response => {
      console.log(response);
      this._service.print(response, 'elContainer1');
    })
    // Ex - 2 | Map + ConcatAll
    // source.pipe(
    //   map(x => this.getData(x)),
    //   concatAll()
    // ).subscribe(response => {
    //   console.log(response);
    //   this._service.print(response, 'elContainer1');
    // })
    // Ex - 3 | ConcatMap
    source.pipe(
      concatMap(x => this.getData(x))
    ).subscribe(response => {
      console.log(response);
      this._service.print(response, 'elContainer2');
    })
  }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }

}
