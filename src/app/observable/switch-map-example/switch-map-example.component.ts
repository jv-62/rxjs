import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';
import { ISearch } from '../../appService/app.service';

@Component({
  selector: 'app-switch-map-example',
  templateUrl: './switch-map-example.component.html',
  styleUrls: ['./switch-map-example.component.scss'],
})
export class SwitchMapExampleComponent implements AfterViewInit {
  @ViewChild('searchForm') searchForm?: NgForm;

  searchResults?: ISearch[];
  searchResultCount = 0;
  _service = inject(AppService);

  constructor() {}
  ngAfterViewInit(): void {
    if (this.searchForm && this.searchForm.valueChanges) {
      this.searchForm.valueChanges
        .pipe(
          // ensure predicate returns a strict boolean (searchForm.valid can be boolean | null)
          filter(() => Boolean(this.searchForm && this.searchForm.valid)),
          pluck('searchTerm'),
          debounceTime(500),
          distinctUntilChanged(),
          switchMap((data: string) => this._service.getSearches(data))
        )
        .subscribe((res: ISearch[]) => {
          console.log(res);
          this.searchResults = res;
          this.searchResultCount = Object.keys(res).length;
        });
    }
  }
}
