import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fp-pannel',
  templateUrl: './fp-pannel.component.html',
  styleUrls: ['./fp-pannel.component.scss']
})
export class FpPannelComponent implements OnInit {
  @Output() title:string = "Place finger"

  constructor() { }

  ngOnInit() {
  }

}
