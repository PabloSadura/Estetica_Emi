import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCapilaresComponent } from './t-capilares.component';

describe('TCapilaresComponent', () => {
  let component: TCapilaresComponent;
  let fixture: ComponentFixture<TCapilaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TCapilaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCapilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
