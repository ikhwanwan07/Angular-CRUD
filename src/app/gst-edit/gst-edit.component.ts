import { Component, OnInit } from '@angular/core';
import Business from '../Model/Business_model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {
  business: Business[];
  constructor(private bisnis: BusinessService) { }



  ngOnInit() {
  }

}
