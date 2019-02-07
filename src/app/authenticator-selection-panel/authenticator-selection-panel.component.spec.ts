import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatorSelectionPanelComponent } from './authenticator-selection-panel.component';

describe('AuthenticatorSelectionPanelComponent', () => {
  let component: AuthenticatorSelectionPanelComponent;
  let fixture: ComponentFixture<AuthenticatorSelectionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatorSelectionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatorSelectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
