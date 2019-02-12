import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticatorSelectionPanelComponent } from './authenticator-selection-panel/authenticator-selection-panel.component';
import { PasswordPanelBaseComponent } from './password/password-panel-base/password-panel-base.component';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';
import { ProxPannelComponent } from './prox/prox-pannel/prox-pannel.component';
import { FpPannelComponent } from './fp/fp-pannel/fp-pannel.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatorSelectionPanelComponent,
    PasswordPanelBaseComponent,
    ProxPannelComponent,
    FpPannelComponent,
    AuthPanelComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FpPannelComponent,
    ProxPannelComponent,
    PasswordPanelBaseComponent,
  ]
})
export class AppModule { }
