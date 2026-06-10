import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements AfterViewInit {
  // Template Reference
  @ViewChild('name') name: ElementRef<HTMLInputElement>;
  @ViewChild('color') color: ElementRef<HTMLInputElement>;

  nameSource = ['Jayam', 'Kenil', 'Manoj', 'Hozefa', 'Vishal', 'Kishan', 'Hardik'];
  colorSource = ['Red', 'Purple', 'Pink', 'Yellow', 'Green', 'Orange', 'Blue'];

  constructor() {}

  ngAfterViewInit(): void {
    // Observables
    const nameObs = fromEvent<Event>(this.name.nativeElement, 'change').pipe(
      map(event => (event.target as HTMLInputElement).value),
      take(4)
    );
    const colorObs = fromEvent<Event>(this.color.nativeElement, 'change').pipe(
      map(event => (event.target as HTMLInputElement).value),
      take(3)
    );

    // Ex :- 01 Zip
    zip(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer');
    });

    // Ex :- 02 ForkJoin
    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
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
