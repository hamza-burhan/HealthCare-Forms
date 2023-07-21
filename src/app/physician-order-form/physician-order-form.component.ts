import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import html2canvas from "html2canvas";

@Component({
  selector: "app-physician-order-form",
  templateUrl: "./physician-order-form.component.html",
  styleUrls: ["./physician-order-form.component.scss"],
})
export class PhysicianOrderFormComponent implements OnInit, AfterViewInit {
  @ViewChild("screen") screen!: ElementRef;
  @ViewChild("canvas") canvas!: ElementRef;
  @ViewChild("downloadLink") downloadLink!: ElementRef;

  // form group
  profileForm: FormGroup = this.fb.group({
    PatientName: "",
    Date: "",
    Phone: "",
    birthDate: "",
    MammogramYear: "",
    Location: "",
    Diagnosis: "",
    breastFeeding: false,
    pregnant: false,
    breastImplants: false,
    breastImplantsSaline: false,
    breastImplantsSilicone: false,
    screeningMammogram: false,
    denseBreast: false,
    diagnosticMammogram: false,
    breastBiopsy: false,
    breastUltrasound: false,
    breastMass: false,
    abnormalMammogram: false,
    breastPain: false,
    personalHistoryCancer: false,
    breastCyst: false,
    familyHistoryofBreastCancer: false,
    nippleDischarge: false,
    examinationRequestProcedureOthers: false,
    Intervation: false,
    boneDensityTest: false,
    OsteopinaM85_89: false,
    hormonal_ContracepativeZ79: false,
    boneDensityOthers: false,
    OsteoprosisM81: false,
    menoPauselN95_9: false,
    asymptomaticMenopausalZ78: false,
    menoPausalN95_8: false,
    ReferringPhysician: "",
    Facility: "",
    NPINumber: "",
    physicanPhone: "",
    Fax: "",
    PhysicianSignature: "",
    refrealForm: false,
    lastMensturalPeriod: false,
    dateofLastMenstrual: "",
    priorImage: false,
    priorBoneDensity: false,
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const imageContainer = document.getElementById("imageContainer");
    if (imageContainer) {
      // add cross div
      imageContainer.addEventListener("click", (event) => {
        if (
          event.offsetY >= 10 &&
          event.offsetY <= 200 &&
          event.offsetX >= 1 &&
          event.offsetX <= 490
        ) {
          const offsetX = event.offsetX;
          const offsetY = event.offsetY;
          const markedArea = document.createElement("span");
          markedArea.innerHTML = "x";
          markedArea.className = "cross";
          markedArea.style.position = "absolute";
          markedArea.style.top = offsetY - 7 + "px";
          markedArea.style.left = offsetX - 4 + "px";
          markedArea.style.backgroundColor = "transparent";
          markedArea.style.zIndex = "2";
          markedArea.style.cursor = "pointer";
          markedArea.style.color = "#ee2374";
          markedArea.style.fontSize = "20px";
          imageContainer.appendChild(markedArea);
          // remove crossed div
          markedArea.addEventListener("click", () => {
            imageContainer.removeChild(markedArea);
          });
        }
      });
    }
  }

  /**
   * handle sub checkboxes
   * @param status check status
   */
  handleSubCheckboxes(status: boolean) {
   this.downloadImage()
    this.profileForm.controls["breastImplantsSaline"].setValue(status);
    this.profileForm.controls["breastImplantsSilicone"].setValue(status);
  }

  /**
   * submit form
   */
  submit() {
    console.log("submit", this.profileForm.value);

  }
  downloadImage() {
    html2canvas(this.screen.nativeElement).then((canvas) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      const url = canvas.toDataURL();
      const data = this.dataURLToByteCode(url);
      console.log("data: ", data);
      this.downloadLink.nativeElement.href = canvas.toDataURL("image/png");
      this.downloadLink.nativeElement.download = "marble-diagram.png";
      this.downloadLink.nativeElement.click();
    });
  }
  dataURLToByteCode(dataUrl: string): Uint8Array {
    const base64String = dataUrl.split(",")[1];
    console.log('base64String: ', base64String);
    const byteString = atob(base64String);
    const length = byteString.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = byteString.charCodeAt(i);
    }

    return bytes;
  }
}
