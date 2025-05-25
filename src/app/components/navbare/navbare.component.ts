import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbare',
  imports: [RouterLink],
  templateUrl: './navbare.component.html',
  styleUrl: './navbare.component.css',
})
export class NavbareComponent {
  isMenuCollapsed = true;

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuCollapsed = true; // Close mobile menu after clicking
  }
}
