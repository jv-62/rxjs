import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromiseAllSettledComponent } from './promise-all-settled.component';

describe('PromiseAllSettledComponent', () => {
  let component: PromiseAllSettledComponent;
  let fixture: ComponentFixture<PromiseAllSettledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromiseAllSettledComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseAllSettledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
