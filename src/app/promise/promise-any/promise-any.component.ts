import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-any',
  templateUrl: './promise-any.component.html',
  styleUrls: ['./promise-any.component.scss'],
})
export class PromiseAnyComponent implements OnInit {
  result: string | null = null;
  error: string | null = null;

  ngOnInit(): void {
    const promise1 = new Promise<string>((_, reject) => setTimeout(() => reject('Error 1'), 500));
    const promise2 = new Promise<string>(resolve => setTimeout(() => resolve('First successful result'), 1000));
    const promise3 = new Promise<string>(resolve => setTimeout(() => resolve('Second successful result'), 1500));

    Promise.any([promise1, promise2, promise3])
      .then(res => {
        this.result = res;
      })
      .catch(err => {
        this.error = String(err);
      });
  }
}
