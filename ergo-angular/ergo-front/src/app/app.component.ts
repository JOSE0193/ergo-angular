import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, RouterOutlet],
  template: `
    <mat-toolbar color="primary">
      <h1 [routerLink]="['/']" style="cursor: pointer;">Ergo App</h1>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ergo-front';
}
