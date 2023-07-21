import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhysicianOrderFormComponent } from './physician-order-form/physician-order-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EliteFormComponent } from './elite-form/elite-form.component';
import { ChildShelterExamComponent } from './child-shelter-exam/child-shelter-exam.component';
import { MedicarePreventiveFromComponent } from './exam/medicare-preventive-from.component'
@NgModule({
  declarations: [
    AppComponent,
    PhysicianOrderFormComponent,
    EliteFormComponent,
    ChildShelterExamComponent,
    MedicarePreventiveFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }