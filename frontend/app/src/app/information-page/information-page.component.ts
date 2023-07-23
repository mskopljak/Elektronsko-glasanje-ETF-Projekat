import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent {

  constructor(private router: Router) {}
  
    ngOnInit(): void {}
  
    goToLogin() {
      this.router.navigate(['/login']);
    }


}
