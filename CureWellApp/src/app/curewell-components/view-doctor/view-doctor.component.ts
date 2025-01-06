import { Component, OnInit, DoCheck } from '@angular/core';
import { Doctor } from '../../curewell-interfaces/doctor';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  templateUrl: './view-doctor.component.html',
})
export class ViewDoctorComponent implements OnInit {

  doctorList: Doctor[]=[];
  showMsgDiv: boolean = false;
  doctorId: number=0;
  errorMsg: string="";
  status: boolean=false;

  constructor(private _curewellService: CurewellService, private router: Router) { }

  ngOnInit() {
    this.getDoctor();
  }

  getDoctor() {
    this._curewellService.getDoctors().subscribe(
      responseDoctors => {
        this.doctorList = responseDoctors;
      },
      responseDoctorsError => {
        this.doctorList = [],
          this.errorMsg = responseDoctorsError,
          console.log(this.errorMsg);
      }
    );
  }

  editDoctorDetails(doctor: Doctor) {
    //To do implement necessary logic
  }

  removeDoctor(doctor: Doctor) {
    //To do implement necessary logic
  }

}
