import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
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
