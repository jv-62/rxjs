import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private _http:HttpClient) { }
  users: any;
  fetching: boolean = false;
  status: string = 'No Data';
  ngOnInit(): void {
  }

  fetchDetails() {
    this.fetching = true;
    this.status = "Fetching data...";
    this._http.get('https://jsonplaceholder.typicode.com/users/1').pipe(
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount) => {
          if (retryCount >= 5){
            throw err
          }else {
            retryCount = retryCount + 1
            this.status = 'Retrying Attempt #' + retryCount;
            return retryCount;
          }
        }, 0)

      ))
    ).subscribe((res) => {
      console.log(res);
      this.status = "Data Fetched";
      this.fetching = false;
      this.users = res;
    }, (err) => {
      console.log(err);
      this.status = "Problem Fetching Data";
      this.fetching = false;
    })
  }

}
