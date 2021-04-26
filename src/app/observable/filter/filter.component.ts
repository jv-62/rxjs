import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  data;
  data2;
  data3;
  dataArray = [
    {id:1,name:'Jayam',gender:'Male'},
    {id:2,name:'Jayesha',gender:'Female'},
    {id:3,name:'Karan',gender:'Male'},
    {id:4,name:'Richa',gender:'Female'},
    {id:5,name:'Joy',gender:'Male'},
    {id:6,name:'John',gender:'Male'},
    {id:7,name:'Riya',gender:'Female'},
  ]
  constructor() { }
  ngOnInit(): void {

    const source = from(this.dataArray)
    // Ex - 01 filter by length
    source.pipe(filter(data => data.name.length > 4), toArray()).subscribe(res => {
      console.log(res);
      this.data = res;
    })
    // Ex - 02 filter by gender
    source.pipe(filter(data => data.gender == 'Male'),toArray()).subscribe(res => {
      console.log(res);
      this.data2 = res;
    })
    // Ex - 03 filter by nth item
    source.pipe(filter(data => data.id <= 4),toArray()).subscribe(res => {
      console.log(res);
      this.data3 = res; 
    })
  }
  
}