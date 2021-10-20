import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { AppService, ISearch } from 'src/app/appService/app.service';

@Component({
  selector: 'app-switch-map-example',
  templateUrl: './switch-map-example.component.html',
  styleUrls: ['./switch-map-example.component.scss']
})
export class SwitchMapExampleComponent implements AfterViewInit {
  
  @ViewChild('searchForm') searchForm: NgForm;

  searchResult: any;
  searchResultCount: number;
  constructor(private _service : AppService) { }
  ngAfterViewInit() {
    const formValue = this.searchForm.valueChanges;
    formValue.pipe(
      // map(x => x['searchTerm']),
      // map(x => x.searchTerm),
      filter(()=>this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this._service.getSearches(data))
    ).subscribe(res => {
      console.log(res);
      this.searchResult = res;
      this.searchResultCount = Object.keys(res).length;
    })
  }

}
