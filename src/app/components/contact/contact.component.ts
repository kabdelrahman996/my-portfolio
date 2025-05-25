import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  myGmail: string = 'kabdelrahman996@gmail.com';
  contacts = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/abdelrahman996',
      icon: 'fab fa-linkedin-in',
      text: 'Connect professionally',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/kabdelrahman996',
      icon: 'fab fa-github',
      text: 'Check my repositories',
    },
    {
      name: 'Email',
      link: 'mailto:kabdelrahman996@gmail.com',
      icon: 'fas fa-envelope',
      text: 'kabdelrahman996@gmail.com',
    },
    {
      name: 'WhatsApp',
      link: 'https://wa.me/201558508867',
      icon: 'fab fa-whatsapp',
      text: 'Chat directly',
    },
    {
      name: 'Phone',
      link: 'tel:+201558508867',
      icon: 'fas fa-phone',
      text: '+20 155 850 8867',
    },
    {
      name: 'Upwork',
      link: 'https://www.upwork.com/freelancers/~013f3ede847ac7f943?viewMode=1',
      icon: 'fab fa-upwork',
      text: 'Hire me for projects',
    },
  ];
}
