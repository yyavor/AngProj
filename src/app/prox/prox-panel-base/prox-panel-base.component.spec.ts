import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxPanelBaseComponent } from './prox-panel-base.component';

describe('ProxPanelBaseComponent', () => {
  let component: ProxPanelBaseComponent;
  let fixture: ComponentFixture<ProxPanelBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxPanelBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxPanelBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
