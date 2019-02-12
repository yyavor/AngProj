import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {

  @Input() real_component: any;
  @Input() aval: string;

  constructor() { }

  ngOnInit() {
    console.log("==============")
    console.log(this.aval)
    console.log(this.real_component)
  }

}
