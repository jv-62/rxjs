import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-all-settled',
  templateUrl: './promise-all-settled.component.html',
  styleUrls: ['./promise-all-settled.component.scss'],
})
export class PromiseAllSettledComponent implements OnInit {
  settledResults: PromiseSettledResult<string>[] = [];

  ngOnInit(): void {
    const promise1 = new Promise<string>(resolve => setTimeout(() => resolve('Success 1'), 500));
    const promise2 = new Promise<string>((_, reject) => setTimeout(() => reject('Error 2'), 1000));
    const promise3 = new Promise<string>(resolve => setTimeout(() => resolve('Success 3'), 1500));

    Promise.allSettled([promise1, promise2, promise3]).then(res => {
      this.settledResults = res;
    });
  }
}
