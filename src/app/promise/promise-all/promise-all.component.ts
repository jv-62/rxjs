import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-all',
  templateUrl: './promise-all.component.html',
  styleUrls: ['./promise-all.component.scss'],
})
export class PromiseAllComponent implements OnInit {
  results: string[] = [];
  error: string | null = null;

  ngOnInit(): void {
    const promise1 = new Promise<string>(resolve => setTimeout(() => resolve('Result A'), 1000));
    const promise2 = new Promise<string>(resolve => setTimeout(() => resolve('Result B'), 1500));
    const promise3 = new Promise<string>(resolve => setTimeout(() => resolve('Result C'), 2000));

    Promise.all([promise1, promise2, promise3])
      .then(res => {
        this.results = res;
      })
      .catch(err => {
        this.error = String(err);
      });
  }
}
