import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromiseRaceComponent } from './promise-race.component';

describe('PromiseRaceComponent', () => {
  let component: PromiseRaceComponent;
  let fixture: ComponentFixture<PromiseRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromiseRaceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
