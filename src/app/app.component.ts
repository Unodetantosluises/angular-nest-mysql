import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
  <div class="container">
      <header class="py-3">
        <h1>Mi Aplicación Angular</h1>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer class="py-3 mt-4">
        <p class="text-center">© 2025 Mi Aplicación</p>
      </footer>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }

    header {
      border-bottom: 1px solid #e5e5e5;
    }

    footer {
      border-top: 1px solid #e5e5e5;
      text-align: center;
    }
  `]
})

export class AppComponent {
  title = 'nest-angular-mysql';
}
