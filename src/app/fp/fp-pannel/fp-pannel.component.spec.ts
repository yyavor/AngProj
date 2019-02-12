import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpPannelComponent } from './fp-pannel.component';

describe('FpPannelComponent', () => {
  let component: FpPannelComponent;
  let fixture: ComponentFixture<FpPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
