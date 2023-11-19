import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-parent-screen',
  templateUrl: './parent-screen.component.html',
  styleUrls: ['./parent-screen.component.css']
})


export class ParentScreenComponent implements OnInit {

  patientForm!:FormGroup;
  data:undefined|datamodel[];

  constructor(private formbuilder:FormBuilder,private api:ApiService){}

  ngOnInit():void{
  this.patientForm = this.formbuilder.group({
  patientID:['',Validators.required],
  name:['',Validators.required],
  city:['',Validators.required],
  description:['',Validators.required],
  phonenumber:['',Validators.required],
})

this.getPatient();
  }

  addPatient(data:datamodel){
this.api.addPatient(data).subscribe((res=>{
  this.patientForm.reset();
}))

this.getPatient();
  }

  getPatient(){
    this.api.getPatient().subscribe(res=>{
      this.data = res;
    })
  }

  deleterecord(id: number):void{
    this.api.deletePatient(id).subscribe(()=>{
    })

    this.getPatient();

    
    // const index = this.getPatient.findIndex(item => item.id === id);

    // if(index !== -1){
    //   this.data?.splice(index, 1)
    // }
  }
}
