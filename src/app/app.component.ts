import { Component, OnInit } from '@angular/core';

declare function PyMethod(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PIEUI2';

  ngOnInit() {
    console.log("LOGGGGGG1");
    PyMethod();
    console.log("LOGGGGGG2");
  }
}
