import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
