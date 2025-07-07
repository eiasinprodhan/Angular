import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    this.authService.logout();
    this.authService.removeUserDetails();
    this.cdr.markForCheck();
    this.router.navigate(['login']);
  }
}
