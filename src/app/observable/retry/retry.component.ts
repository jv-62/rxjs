import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { delay, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent {
  users: {
    id: number;
    name: string;
    email: string;
    phone: number;
    website: string;
  };
  fetching = false;
  status = 'No Data';
  _http = inject(HttpClient);

  constructor() {}

  fetchDetails(): void {
    this.fetching = true;
    this.status = 'Fetching data...';
    this._http
      .get('https://jsonplaceholder.typicode.com/users/1')
      .pipe(
        retryWhen(err =>
          err.pipe(
            delay(3000),
            scan(retryCount => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                this.status = 'Retrying Attempt #' + retryCount;

                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res: { id: number; name: string; email: string; phone: number; website: string }) => {
          console.log(res);
          this.status = 'Data Fetched';
          this.fetching = false;
          this.users = res;
        },
        err => {
          console.log(err);
          this.status = 'Problem Fetching Data';
          this.fetching = false;
        }
      );
  }
}
