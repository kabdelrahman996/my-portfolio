import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  myImage = 'assets/images/about.png';

  constructor() {}

  ngOnInit(): void {
    // Initialize any animations or third-party libraries if needed
  }

  /**
   * Scrolls to the specified section
   * @param sectionId The ID of the section to scroll to
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Downloads CV file
   */
  downloadCV(): void {
    // Replace with the actual path to your CV file
    const link = document.createElement('a');
    link.href = 'assets/pdfs/Abdelrahman_Khaled_CV.pdf';
    link.download = 'Abdelrahman_Khaled_CV.pdf';
    link.click();
  }
}
