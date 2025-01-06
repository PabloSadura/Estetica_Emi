import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFacialComponent } from './t-facial.component';

describe('TFacialComponent', () => {
  let component: TFacialComponent;
  let fixture: ComponentFixture<TFacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TFacialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
