import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements AfterViewInit {

  nameSource = ['Jayam', 'Kenil', 'Manoj', 'Hozefa', 'Vishal', 'Kishan', 'Hardik'];
  colorSource = ['Red', 'Purple', 'Pink', 'Yellow', 'Green', 'Orange', 'Blue'];

  // Template Reference
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    // Observables
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(4)
    )
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(3)
    )

    // Ex :- 01 Zip
    zip(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer');
    })
    
    // Ex :- 02 ForkJoin
    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer2');
    })
  }

  createBox(name, color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("style", `background-color: ${color};
                              border: 1px solid currentColor;
                              display: flex;
                              margin: 0 10px;
                              padding: 10px;`);
    document.getElementById(containerId).appendChild(el);
  }

}
