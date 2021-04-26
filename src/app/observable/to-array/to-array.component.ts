import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }
  users = [
    {name:'Jayam',language:'Javascript'},
    {name:'Kenil',language:'Meteor'},
    {name:'Hardik',language:'Nodejs'}
  ]
  ngOnInit(): void {
    // Ex :- 1
    const source = interval(1000);
    source.pipe(take(5),toArray()).subscribe(res => {
      console.log(res);
    })
    // Ex :- 2
    const source1 = from(this.users);
    source1.pipe(toArray()).subscribe(res => {
      console.log(res);
    })
    // Ex :- 3
    const source2 = of('Jayam','Verma','Hardik');
    source2.pipe(toArray()).subscribe(res => {
      console.log(res);
    })
  }

}
