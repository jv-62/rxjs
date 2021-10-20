import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor(private _service : AppService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    // Ex - 01 | Map
    source.pipe(map(x => this.getData(x))).subscribe(res => res.subscribe(response => {
      console.log(response);
      this._service.print(response,'elContainer')
    }));
    // Ex - 02 | Map + MergeAll
    source.pipe(
      map(x => this.getData(x)),
      mergeAll()
    ).subscribe(res => {
      console.log(res);
      this._service.print(res,'elContainer1')
    });
    // Ex - 03 | MergeMap
    source.pipe(
      mergeMap(x => this.getData(x))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res,'elContainer2')
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded');
  }

}
