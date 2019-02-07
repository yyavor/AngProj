import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPanelBaseComponent } from './password-panel-base.component';

describe('PasswordPanelBaseComponent', () => {
  let component: PasswordPanelBaseComponent;
  let fixture: ComponentFixture<PasswordPanelBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordPanelBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPanelBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
