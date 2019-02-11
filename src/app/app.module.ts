import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticatorSelectionPanelComponent } from './authenticator-selection-panel/authenticator-selection-panel.component';
import { PasswordPanelBaseComponent } from './password/password-panel-base/password-panel-base.component';
import { ProxPanelBaseComponent } from './prox/prox-panel-base/prox-panel-base.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatorSelectionPanelComponent,
    PasswordPanelBaseComponent,
    ProxPanelBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
