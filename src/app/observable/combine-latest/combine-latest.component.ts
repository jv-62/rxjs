import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements AfterViewInit {

  constructor() { }
  
  nameSource = ['Jayam', 'Kenil', 'Manoj', 'Hozefa', 'Vishal', 'Kishan', 'Hardik'];
  colorSource = ['Red', 'Purple', 'Pink', 'Yellow', 'Green', 'Orange', 'Blue'];

  // Template Reference
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  ngAfterViewInit() {
    // fromEvent<any>(this.name.nativeElement, 'change').pipe(
    //   map(event => event.target.value)
    // ).subscribe(res => {
    //   console.log(res);
    // })

    // Observable
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(event => event.target.value))
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(pluck('target','value'))

    // Ex :- 01 CombineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name,color,"elContainer")
    })
    
    
    // Ex :- 02 withLatestFrom
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name,color,"elContainer2")
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
