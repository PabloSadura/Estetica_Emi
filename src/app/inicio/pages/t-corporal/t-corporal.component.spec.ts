import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCorporalComponent } from './t-corporal.component';

describe('TCorporalComponent', () => {
  let component: TCorporalComponent;
  let fixture: ComponentFixture<TCorporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TCorporalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
