import { Component, OnInit } from '@angular/core';

import { PasswordPanelBaseComponent } from "../password/password-panel-base/password-panel-base.component"
import { ProxPannelComponent } from "../prox/prox-pannel/prox-pannel.component"
import { FpPannelComponent } from "../fp/fp-pannel/fp-pannel.component"


@Component({
  selector: 'app-authenticator-selection-panel',
  templateUrl: './authenticator-selection-panel.component.html',
  styleUrls: ['./authenticator-selection-panel.component.scss']
})
export class AuthenticatorSelectionPanelComponent implements OnInit {
  pannels: any[] = [
    {
      title: "Place your finger",
      component: FpPannelComponent,
    },
    {
      title: "Use your password",
      component: PasswordPanelBaseComponent,
    },
    {
      title: "Tap your card",
      component: ProxPannelComponent,
    },    
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
