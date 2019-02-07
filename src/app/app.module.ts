import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticatorSelectionPanelComponent } from './authenticator-selection-panel/authenticator-selection-panel.component';
import { PinPanelBaseComponent } from './pin/pin-panel-base/pin-panel-base.component';
import { PasswordPanelBaseComponent } from './password/password-panel-base/password-panel-base.component';
import { ProxPanelBaseComponent } from './prox/prox-panel-base/prox-panel-base.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatorSelectionPanelComponent,
    PinPanelBaseComponent,
    PasswordPanelBaseComponent,
    ProxPanelBaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
