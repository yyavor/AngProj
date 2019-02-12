import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxPannelComponent } from './prox-pannel.component';

describe('ProxPannelComponent', () => {
  let component: ProxPannelComponent;
  let fixture: ComponentFixture<ProxPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
