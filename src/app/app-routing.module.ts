import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentScreenComponent } from './parent-screen/parent-screen.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  {path:'parent-screen',component:ParentScreenComponent},
  {path:'update-patient/:id',component:UpdatePatientComponent},
  {path:'',redirectTo:'parent-screen',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
