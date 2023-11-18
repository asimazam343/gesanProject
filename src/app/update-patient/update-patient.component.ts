import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../parent-screen/model';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  public dataid!: number;
  public patient!: datamodel;
  constructor(private activatedroute: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
    })
    this.api.fetchdata(this.dataid).subscribe((data: datamodel) => {
      this.patient = data;
    })

  }

  update(){
    this.api.updatepatient(this.patient,this.dataid).subscribe((res:datamodel) => {
      this.router.navigate(["/"])
    })
  }

  
}
