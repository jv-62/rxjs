import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {

  url = 'https://test-products-b05fe.firebaseio.com/products.json';
  allProducts: Observable<any>;
  moblies: Observable<any>;
  laptops: Observable<any>;


  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.allProducts = this._http.get(this.url).pipe(shareReplay());
    
    this.moblies = this.allProducts.pipe(
      map(res => {
        res.filter(mobileData => {
          return mobileData['type'] == 'mobile';
        })
      })
    )
    
    this.laptops = this.allProducts.pipe(
      map(res => {
        res.filter(mobileData => {
          return mobileData['type'] == 'pc';
        })
      })
    )
  }

}
