import { Component, OnInit } from '@angular/core';
import { Specialization } from '../../curewell-interfaces/specialization';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
 templateUrl: './view-specialization.component.html',
})
export class ViewSpecializationComponent implements OnInit {

  specializationList: Specialization[] = [];
  showMsgDiv: boolean = false;
  errorMsg: string="";

  constructor(private _curewellService: CurewellService, private router: Router) { }

  ngOnInit() {
    //To do implement necessary logic
    this.getSpecialization();
  }

  getSpecialization() {
    //To do implement necessary logic
    this._curewellService.getAllSpecializations().subscribe(
      responseSpecializations => {
        this.specializationList = responseSpecializations
      },
      responseSpecializationsError => {
        this.specializationList = [];
        this.errorMsg = responseSpecializationsError;
        console.log(this.errorMsg);
      }
    )
  }
}
