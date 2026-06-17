import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-race',
  templateUrl: './promise-race.component.html',
  styleUrls: ['./promise-race.component.scss'],
})
export class PromiseRaceComponent implements OnInit {
  result: string | null = null;
  error: string | null = null;

  ngOnInit(): void {
    const promise1 = new Promise<string>((resolve, reject) => setTimeout(() => reject('Rejected first'), 500));
    const promise2 = new Promise<string>(resolve => setTimeout(() => resolve('Resolved second'), 1000));
    const promise3 = new Promise<string>(resolve => setTimeout(() => resolve('Resolved third'), 1500));

    Promise.race([promise1, promise2, promise3])
      .then(res => {
        this.result = res;
      })
      .catch(err => {
        this.error = String(err);
      });
  }
}
