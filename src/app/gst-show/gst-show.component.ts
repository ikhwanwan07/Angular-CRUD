import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gst-show',
  templateUrl: './gst-show.component.html',
  styleUrls: ['./gst-show.component.css']
})
export class GstShowComponent implements OnInit {

  constructor() { }

  refresh() {
    location.reload();
  }

  ngOnInit() {
  }

}
