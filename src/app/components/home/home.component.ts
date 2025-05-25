import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentRole = '';
  roles = [
    'Full-Stack Developer',
    'MEAN Stack Developer',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
  ];
  currentRoleIndex = 0;
  isTyping = true;
  myImage = 'assets/images/abdelrahman.png';

  ngOnInit() {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const currentText = this.roles[this.currentRoleIndex];
    let charIndex = 0;

    // Typing effect
    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        this.currentRole = currentText.substring(0, charIndex + 1);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        this.isTyping = false;

        // Wait before erasing
        setTimeout(() => {
          this.eraseText();
        }, 2000);
      }
    }, 100);
  }

  eraseText() {
    this.isTyping = true;
    const eraseInterval = setInterval(() => {
      if (this.currentRole.length > 0) {
        this.currentRole = this.currentRole.substring(
          0,
          this.currentRole.length - 1
        );
      } else {
        clearInterval(eraseInterval);
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.typeWriterEffect();
      }
    }, 50);
  }

  downloadCV() {
    // You can replace this with your actual CV file path
    const link = document.createElement('a');
    link.href = 'assets/pdfs/Abdelrahman_Khaled_CV.pdf';
    link.download = 'Abdelrahman_Khaled_CV.pdf';
    link.click();
  }
}
