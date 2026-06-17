import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromiseAllComponent } from './promise-all.component';

describe('PromiseAllComponent', () => {
  let component: PromiseAllComponent;
  let fixture: ComponentFixture<PromiseAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromiseAllComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
