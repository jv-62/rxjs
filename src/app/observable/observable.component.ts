import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  showBackButton = false;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.updateBackButton(this.router.url);
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.updateBackButton(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goBack(): void {
    this.location.back();
  }

  private updateBackButton(url: string): void {
    this.showBackButton = url !== '/observable' && url !== '/observable/';
  }
}
