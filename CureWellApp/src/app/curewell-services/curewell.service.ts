import { Injectable } from '@angular/core';
import { Doctor } from '../curewell-interfaces/doctor';
import { DoctorSpecialization } from '../curewell-interfaces/doctorspecialization';
import { Specialization } from '../curewell-interfaces/specialization';
import { Surgery } from '../curewell-interfaces/surgery';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurewellService {

  doctorList: Doctor[]=[];
  surgeryList: Surgery[]=[];
  specializationList: Specialization[]=[];
  doctorSpecializationList: DoctorSpecialization[]=[];

  constructor(private http: HttpClient) { }
  
  //GetDoctor
  getDoctors(): Observable<Doctor[]> {
    //To do implement necessary logic
    let url = this.http.get<Doctor[]>('https://localhost:7029/api/CureWell/GetDoctors').pipe(catchError(this.errorHandler));
    return url;
  }

  //GetSpecialization
  getAllSpecializations(): Observable<Specialization[]> {
    //To do implement necessary logic
    let url = this.http.get<Specialization[]>('https://localhost:7029/api/CureWell/GetSpecializations').pipe(catchError(this.errorHandler));
    return url;
  }

  //GetSurgeries
  getAllSurgeriesForToday(): Observable<Surgery[]> {
    let url = this.http.get<Surgery[]>('https://localhost:7029/api/CureWell/GetAllSurgeryTypeForToday').pipe(catchError(this.errorHandler));
    return url;
  }

  //AddDoctor
  addDoctor(doctorName: string): Observable<boolean> {
    //To do implement necessary logic
    var docObj: Doctor = { doctorId: 0, doctorName: doctorName }
    let url = this.http.post<boolean>('https://localhost:7029/api/CureWell/AddDoctor', docObj).pipe(catchError(this.errorHandler));
    return url;
  }

  //EditDoctor
  editDoctorDetails(doctorId: number, doctorName: string): Observable<boolean> {
    //To do implement necessary logic
    var docObj: Doctor = { doctorId: doctorId, doctorName: doctorName }
    var url = this.http.put<boolean>('https://localhost:7029/api/CureWell/UpdateDoctorDetails', docObj).pipe(catchError(this.errorHandler));
    return url;
  }

  //editSurgery
  editSurgery(doctorId: number, endTime: number, startTime: number, surgeryCategory: string, surgeryDate: Date, surgeryId: number): Observable<boolean> {
    //To do implement necessary logic
    var surjeryObj = {
      doctorId: doctorId,
      endTime: endTime,
      startTime: startTime,
      surgeryCategory: surgeryCategory,
      surgeryDate: surgeryDate,
      surgeryId: surgeryId,
    }
    var url = this.http.put<boolean>('https://localhost:7029/api/CureWell/UpdateSurgery', surjeryObj).pipe(catchError(this.errorHandler));
    return url;
  }

  //RemoveDoctor
  deleteDoctor(doctor: Doctor) {
    //To do implement necessary logic
    let httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }), body: doctor };
    var url = this.http.delete<boolean>('https://localhost:7029/api/CureWell/DeleteDoctor', httpOptions).pipe(catchError(this.errorHandler));
    return url;
  }

  //ErrorHandler
  errorHandler(error: HttpErrorResponse) {
    //To do implement necessary logic
    console.log(error.message);
    return throwError(error.message || 'SERVER ERROR')

  }

}
