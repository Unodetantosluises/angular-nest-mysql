import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from "primeng/button";
import { MenuModule } from"primeng/menu";
import { MenuItem } from "primeng/api";
import { RippleModule } from "primeng/ripple";
import { TooltipModule } from "primeng/tooltip";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SidebarModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    TooltipModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})

export class MainLayoutComponent {
  sidebarVisible: boolean = true;

  menuItems: MenuItem[] = [
    {
      label: 'CatPmi',
      icon: 'pi pi-table',
      routerLink: '/cat-pmi'
    },
    {
      label: 'Pmi2019',
      icon: 'pi pi-table',
      routerLink: '/pmi2019'
    },
    {
      label: 'CatPmiBcc',
      icon: 'pi pi-table',
      routerLink: '/cat-pmibcc'
    }
  ];

  toogleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
