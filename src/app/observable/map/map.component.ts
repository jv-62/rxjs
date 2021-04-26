import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app/appService/app.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // Subscriptions
  sub1: Subscription
  sub2: Subscription
  // Messages
  msg1
  msg2
  constructor(private _service : AppService) { }
  
  ngOnInit(): void {
    const broadcastVideos = interval(1000);
    
    // Ex - 01
    this.sub1 = broadcastVideos.pipe(map(data=> 'video '+ data)).subscribe(res => {
      console.log(res);
      this.msg1 = res
    })
    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000)
    
    // Ex - 02
    this.sub2 = broadcastVideos.pipe(map(data=> data+11)).subscribe(res => {
      console.log(res);
      this.msg2 = res
    })
    setTimeout(() => {
      this.sub2.unsubscribe()
    }, 10000)

    // Ex - 03

    const members = from([
      {id: 1, name:'Jayam'},
      {id: 2, name:'John'},
      {id: 3, name:'Kenil'},
      {id: 4, name:'Nirmal'},
      {id: 5, name:'Doe'}
    ])

    members.pipe(map(data=>data.name)).subscribe(res => {
      // console.log(res);
      this._service.print(res, 'elContainer');
    })
  }

}
