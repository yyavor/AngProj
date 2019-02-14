import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { AuthenticatorSelectionPanelComponent } from './authenticator-selection-panel/authenticator-selection-panel.component'
import { PasswordPanelBaseComponent } from './password/password-panel-base/password-panel-base.component'
import { ProxPannelComponent } from "./prox/prox-pannel/prox-pannel.component"
import { FpPannelComponent } from "./fp/fp-pannel/fp-pannel.component"

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AuthenticatorSelectionPanelComponent },
  { path: 'authenticator-selection-panel', component: AuthenticatorSelectionPanelComponent },
  { path: 'password',        component: PasswordPanelBaseComponent },
  { path: 'prox',        component: ProxPannelComponent },
  { path: 'fp',        component: FpPannelComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
