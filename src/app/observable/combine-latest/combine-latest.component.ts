import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements AfterViewInit {
  // Template Reference
  @ViewChild('name') name: ElementRef<HTMLSelectElement>;
  @ViewChild('color') color: ElementRef<HTMLSelectElement>;

  nameSource = ['Jayam', 'Kenil', 'Manoj', 'Hozefa', 'Vishal', 'Kishan', 'Hardik'];
  colorSource = ['Red', 'Purple', 'Pink', 'Yellow', 'Green', 'Orange', 'Blue'];

  constructor() {}

  ngAfterViewInit(): void {
    // Observable
    const nameObs = fromEvent<Event>(this.name.nativeElement, 'change').pipe(
      map((event: Event) => (event.target as HTMLSelectElement).value)
    );
    const colorObs = fromEvent<Event>(this.color.nativeElement, 'change').pipe(
      map((event: Event) => (event.target as HTMLSelectElement).value)
    );

    // Ex :- 01 CombineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color]: [string, string]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer');
    });

    // Ex :- 02 withLatestFrom
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]: [string, string]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer2');
    });
  }

  createBox(name: string, color: string, containerId: string): void {
    const el = document.createElement('div');
    el.innerText = name;
    el.setAttribute(
      'style',
      `background-color: ${color};
                              border: 1px solid currentColor;
                              display: flex;
                              margin: 0 10px;
                              padding: 10px;`
    );
    document.getElementById(containerId).appendChild(el);
  }
}
