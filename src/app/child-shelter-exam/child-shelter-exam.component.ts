import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-child-shelter-exam",
  templateUrl: "./child-shelter-exam.component.html",
  styleUrls: ["./child-shelter-exam.component.scss"],
})

export class ChildShelterExamComponent implements OnInit {
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
  childShelterForm: FormGroup = this.fb.group({
    primaryCare: false,
    psyChaitry: false,
    vision: false,
    dental: false,
    neurologist: false,
    cardialogist: false,
    ENT: false,
    podiatory: false,
    othersSpecilist: false,
    specify: "",
    date: "",
    time: "",
    physicianName: "",
    physicianAddress1: "",
    physicianAddress2: "",
    phone: "",
    fax: "",
    allergies: "",
    Current_Medications: "",
    attached_MAR: "",
    Reason_for_visit1: "",
    Reason_for_visit2: "",
    Reason_for_visit3: "",
    Reason_for_visit4: "",
    Recommandation1: "",
    Recommandation2: "",
    Recommandation3: "",
    Recommandation4: "",
    Recommandation5: "",
    Name: "",
    DOB: "",
    Medicaide: "",
    Medicare: "",
    Recommandation_combinedValue: "",
    PhysicianAddress_combinedValue: "",
    Reason_for_visit_combinedValue: "",
    Next_Appointment_Date: "",
    appoinmentType_Time: "",
    printed_Physician_Name: "",
    printed_Physician_Date: "",
    physician_Specialist_signature: "",
    home_living_nurse: "",
    physician_date_time: "",
  });
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    const {
      Reason_for_visit1,
      Reason_for_visit2,
      Reason_for_visit3,
      Reason_for_visit4,
    } = this.childShelterForm.value;
    const {
      Recommandation1,
      Recommandation2,
      Recommandation3,
      Recommandation4,
      Recommandation5,
    } = this.childShelterForm.value;
    const { physicianAddress1, physicianAddress2 } =
      this.childShelterForm.value;
    this.childShelterForm.patchValue({
      Recommandation_combinedValue: `${Recommandation1}${Recommandation2}${Recommandation3}${Recommandation4} ${Recommandation5}`,
      Reason_for_visit_combinedValue: `${Reason_for_visit1}${Reason_for_visit2}${Reason_for_visit3}${Reason_for_visit4} `,
      PhysicianAddress_combinedValue: `${physicianAddress1}${physicianAddress2}  `,
    });
    console.log("submit", this.childShelterForm.value);
  }
}
