import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {

  @Input() real_pannel: any;

  constructor() { }

  ngOnInit() {
    console.log("==============")
    console.log(this.real_pannel)
  }

}
