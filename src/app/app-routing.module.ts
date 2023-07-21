import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildShelterExamComponent } from './child-shelter-exam/child-shelter-exam.component';
import { EliteFormComponent } from './elite-form/elite-form.component';
import { PhysicianOrderFormComponent } from './physician-order-form/physician-order-form.component';
import { MedicarePreventiveFromComponent } from './exam/medicare-preventive-from.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'physician-form', pathMatch: 'full'
  },
  {
    path: 'physician-form',
    component: PhysicianOrderFormComponent
  },
  {
    path: 'elite-form',
    component: EliteFormComponent
  },
  {
    path: 'shelter-form',
    component: ChildShelterExamComponent
  },
  {
    path: 'medicare-form',
    component: MedicarePreventiveFromComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }