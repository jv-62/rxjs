import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.isBuyDell()) {
        return setTimeout(() => {
          resolve("Bought Dell Laptop");
        }, 3000);
      }else if (this.isBuyLenovo()) {
        return setTimeout(() => {
          resolve("Bought Lenovo Laptop");
        }, 3000);
      } else {
        return setTimeout(() => {
          reject("Laptop is not available");
        }, 3000);
        
      }
    })
    buyLaptop.then(res => {
      console.log("Then clause",res);
    }).catch(error => {
      console.error("Error ", error);
      
    })
  }

  isBuyDell(){
    return false;
  }
  isBuyLenovo(){
    return false;
  }

}
