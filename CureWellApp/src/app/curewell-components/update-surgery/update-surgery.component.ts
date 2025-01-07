import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Surgery } from '../../curewell-interfaces/surgery';

@Component({
  templateUrl: './update-surgery.component.html'
})
export class UpdateSurgeryComponent implements OnInit {

  doctorId: number=0;
  surgeryId: number = 0;
  surgeryDate: Date = new Date();
  startTime: number = 0;
  endTime: number=0;
  surgeryCategory: string="";
  status: boolean=false;
  errorMsg: string = "";

  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }

  ngOnInit() {
    //To do implement necessary logic
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.surgeryId = this.route.snapshot.params['surgeryId'];
    this.surgeryDate = this.route.snapshot.params['surgeryDate'];
    this.startTime = parseFloat(this.route.snapshot.params['startTime']);
    this.endTime = parseFloat(this.route.snapshot.params['endTime']);
    this.surgeryCategory = this.route.snapshot.params['surgeryCategory'];
  }


  editSurgery(startTime: number, endTime: number) {
    //To do implement necessary logic
    this._cureWellService.editSurgery(this.doctorId, endTime, startTime, this.surgeryCategory, this.surgeryDate, this.surgeryId).subscribe(
      resposneEditSurgeryStatus => {
        this.status = resposneEditSurgeryStatus;
        if (resposneEditSurgeryStatus) {
          alert("Surgery details updates succesfully")
        }
      },
      responseEditError => {
        this.errorMsg = responseEditError
        alert(this.errorMsg);
      }
    )
  }
}
