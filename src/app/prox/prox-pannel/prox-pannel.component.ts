import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prox-pannel',
  templateUrl: './prox-pannel.component.html',
  styleUrls: ['./prox-pannel.component.scss']
})
export class ProxPannelComponent implements OnInit {
  @Output() title:string = "Tap badge"

  constructor() { }

  ngOnInit() {
  }

}
