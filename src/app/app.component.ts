import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'demo-prject';
  constructor(private readonly router: Router){}

  get isPhysicianFormPage(){
    return this.router.url.includes('/physician-form');
  }

  get isEliteFormPage(){
    return this.router.url.includes('/elite-form');
  }

  get isChildShelterFormPage(){
    return this.router.url.includes('/shelter-form');
  }
  get isMedicareFormPage(){
    return this.router.url.includes('/medicare-form');
  }
}