import { Component, OnInit } from '@angular/core';
import { Surgery } from '../../curewell-interfaces/surgery';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './view-todays-surgery.component.html',
})
export class ViewTodaysSurgeryComponent implements OnInit {

  surgeryList: Surgery[]=[];
  showMsgDiv: boolean = false;
  errorMsg: string="";

  constructor(private _curewellService: CurewellService, private router: Router) { }

  ngOnInit() {
    this.getTodaySurgery();

  }

  getTodaySurgery() {
    //To do implement necessary logic
    this._curewellService.getAllSurgeriesForToday().subscribe(
      responseSurgeries => {
        this.surgeryList = responseSurgeries;
        console.log(this.surgeryList.length);
      },
      responseSurgeriesError => {
        this.surgeryList = [];
        this.errorMsg = responseSurgeriesError;
        console.log(this.errorMsg);
      }
    )
  }

  editSurgery(surgery: Surgery) {
    //To do implement necessary logic
    this.router.navigate(['/editSurgery', surgery.doctorId, surgery.endTime, surgery.startTime, surgery.surgeryCategory, surgery.surgeryDate, surgery.surgeryId, ]);
  }

}
