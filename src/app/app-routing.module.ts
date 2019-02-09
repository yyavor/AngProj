import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { AuthenticatorSelectionPanelComponent } from './authenticator-selection-panel/authenticator-selection-panel.component'
import { PasswordPanelBaseComponent } from './password/password-panel-base/password-panel-base.component'

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AuthenticatorSelectionPanelComponent },
  { path: 'authenticator-selection-panel', component: AuthenticatorSelectionPanelComponent },
  { path: 'password-panel',        component: PasswordPanelBaseComponent },
  
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
