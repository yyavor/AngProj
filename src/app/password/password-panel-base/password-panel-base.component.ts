import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-panel-base',
  templateUrl: './password-panel-base.component.html',
  styleUrls: ['./password-panel-base.component.scss'],
})
export class PasswordPanelBaseComponent implements OnInit {
  @Output() header: string = "Enter Your Password";

  constructor() { }

  ngOnInit() {
  }

}
