import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor() { }
  data;
  data2;
  users = [
    { name:'Jayam',skills:'Javascript',job:{title:'Angular Developer',exp:'10 Years'}},
    { name:'Kenil',skills:'Meteor',job:{title:'Javascript Developer',exp:'5 Years'}},
    { name:'Hardik',skills:'Java',job:{title:'Frontend Developer',exp:'2 Years'}},
    { name:'Raju',skills:'PHP',job:{title:'Javascript Developer',exp:'1 Years'}},
    { name:'Rajesh',skills:'Nodejs',job:{title:'Java Developer',exp:'7 Years'}}
  ]

  ngOnInit(): void {
    // Ex - 01
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data = res;
    })
    // Ex - 02
    from(this.users).pipe(
      // map(data => data.name),
      pluck('job','title'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data2 = res;
    })
  }

}
