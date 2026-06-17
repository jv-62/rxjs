import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromiseAnyComponent } from './promise-any.component';

describe('PromiseAnyComponent', () => {
  let component: PromiseAnyComponent;
  let fixture: ComponentFixture<PromiseAnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromiseAnyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
