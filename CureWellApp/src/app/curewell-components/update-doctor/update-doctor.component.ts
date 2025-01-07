import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Doctor } from '../../curewell-interfaces/doctor';

@Component({
  templateUrl: './update-doctor.component.html'
})
export class UpdateDoctorComponent implements OnInit {

  doctorId: number=0;
  doctorName: string="";
  status: boolean=false;
  errorMsg: string ="";

  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }

  ngOnInit() {
    //To do implement necessary logic
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.doctorName = this.route.snapshot.params['doctorName'];
  }

  editDoctorDetails(doctorName: string) {
    //To do implement necessary logic
    this._cureWellService.editDoctorDetails(this.doctorId, doctorName).subscribe(
      resposneEditDoctor => {
        this.status = resposneEditDoctor
        alert("Updated doctor detials succesfully")
      },
      responseEditDoctorError => {
        this.errorMsg = responseEditDoctorError;
        console.log(this.errorMsg);
      },
      () => console.log("Updated doctor detials succesfully")
    );
  }
}
