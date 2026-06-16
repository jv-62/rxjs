import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  url = 'https://test-products-b05fe.firebaseio.com/products.json';
  allProducts: Observable<unknown>;
  moblies: Observable<unknown>;
  laptops: Observable<unknown>;
  _http = inject(HttpClient);

  constructor() {}

  ngOnInit(): void {
    this.allProducts = this._http.get(this.url).pipe(shareReplay({ bufferSize: 1, refCount: true }));

    this.moblies = this.allProducts.pipe(map((res: unknown[]) => res.filter(mobileData => mobileData['type'] === 'mobile')));

    this.laptops = this.allProducts.pipe(map((res: unknown[]) => res.filter(mobileData => mobileData['type'] === 'pc')));
  }
}
