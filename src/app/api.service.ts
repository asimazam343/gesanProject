import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {datamodel} from './parent-screen/model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // Adding Patient Records
  addPatient(data:datamodel){
return this.http.post<datamodel>("http://localhost:3000/posts",data)
  }

  //get Patient
  getPatient(){
    return this.http.get<datamodel[]>("http://localhost:3000/posts");
  }

  //delete Patient
  deletePatient(id:number){
    return this.http.delete<datamodel>("http://localhost:3000/posts"+id)
  }

  //fetch Patient Data into Update Patient
  fetchdata(id:number){
    return this.http.get<datamodel>("http://localhost:3000/posts") 
  }

  //Update Patient Data
  updatepatient(data:datamodel,id:number){
    return this.http.put<datamodel>("http://localhost:3000/posts"+id,data);
  }
}
