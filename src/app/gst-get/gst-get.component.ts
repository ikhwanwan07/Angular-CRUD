import { Component, OnInit } from '@angular/core';
import Business from '../Model/Business_model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  business: Business[];
  dataku: any;
  constructor(private bisnis: BusinessService) { }

  deleteBisnis(data) {
    this.bisnis.deleteBisnis(data).subscribe(Response => {
      console.log('deleted', Response);
      this.ngOnInit();
    });

  }
  showBisnis(data) {

    this.bisnis.showBisnis(data).subscribe((bis => {
      console.log(bis);
      this.dataku = bis;
    }));
  }
  refresh() {
    location.reload();
  }

  ngOnInit() {
    this.bisnis.getBisnis().subscribe((data: Business[]) => {
      this.business = data;


    });


  }


}
