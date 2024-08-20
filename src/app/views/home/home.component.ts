import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router,   private activatedRoute: ActivatedRoute) { }

  createNewDashboard(){
    // this.router.navigateByUrl('login')
    // this.router.navigate(['/login'])
    window.location.href =  '/table'
  }
}


