import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './appService/app.service';
import { HeaderComponent } from './layout/header/header.component';
import { AllComponent } from './observable/all/all.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { Comp1Component } from './observable/comp/comp1/comp1.component';
import { Comp2Component } from './observable/comp/comp2/comp2.component';
import { Comp3Component } from './observable/comp/comp3/comp3.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { Concatmap2Component } from './observable/concatmap2/concatmap2.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapExampleComponent } from './observable/switch-map-example/switch-map-example.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { ZipComponent } from './observable/zip/zip.component';
import { PromiseAllSettledComponent } from './promise/promise-all-settled/promise-all-settled.component';
import { PromiseAllComponent } from './promise/promise-all/promise-all.component';
import { PromiseAnyComponent } from './promise/promise-any/promise-any.component';
import { PromiseRaceComponent } from './promise/promise-race/promise-race.component';
import { PromiseComponent } from './promise/promise/promise.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergemapComponent,
    ConcatmapComponent,
    Concatmap2Component,
    SwitchmapComponent,
    SwitchMapExampleComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ZipComponent,
    PromiseAllComponent,
    PromiseAllSettledComponent,
    PromiseAnyComponent,
    PromiseRaceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LoadingBarRouterModule, FormsModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
