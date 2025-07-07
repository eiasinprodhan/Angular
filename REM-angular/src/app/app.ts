import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'REM-angular';
  showHeaderFooter = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Assuming your home page route is '' or '/home'
        this.showHeaderFooter = !(event.url === '/' || event.url === '/home' || event.url === '/signin' || event.url === '/signup');
      }
    });
  }
}
