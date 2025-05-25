import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [NgFor, NgIf],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  certificates: any[] = [
    {
      title: 'Challenger - Web developer',
      issuer: 'Udacity',
      date: 'January 2022',
      image: 'assets/images/udacity_certificate.png',
      link: 'https://www.udacity.com/certificate/e/93b2dcc6-654f-11ec-b1d1-bf679ba40f8a',
      category: 'frontend',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Introduction to Front-End Development',
      issuer: 'Meta - Coursera',
      date: 'October 2022',
      image: 'assets/images/meta_certificate.png',
      link: 'https://coursera.org/verify/XLJ6G4DHPLFA',
      category: 'frontend',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title:
        'Digital Egypt Pioneers Program - Software Development - Frontend Developer job profile',
      issuer: 'DEPI',
      date: 'November 2024',
      image: 'assets/images/depi_certificate.png',
      category: 'frontend',
      skills: ['bootstrap', 'JQuery', 'Angular'],
    },
    {
      title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      issuer: 'Udemy',
      date: 'May 2025',
      image: 'assets/images/udemy_certificate.png',
      link: 'https://www.udemy.com/certificate/UC-a6ce0c74-aea1-4371-9b6a-24456aec6f15/',
      category: 'backend',
      skills: [
        'Node.js',
        'Express',
        'MongoDB',
        'REST APIs',
        'JWT',
        'Authentication',
      ],
    },
  ];

  filteredCertificates: any[] = [...this.certificates];
  activeFilter = 'all';

  constructor() {}

  ngOnInit(): void {
    // You could add AOS initialization here if needed
    // AOS.init();
  }

  filterCertificates(category: string): void {
    this.activeFilter = category;

    if (category === 'all') {
      this.filteredCertificates = [...this.certificates];
    } else {
      this.filteredCertificates = this.certificates.filter(
        (cert) => cert.category === category
      );
    }

    // Update active button class
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach((btn) => {
      btn.classList.remove('active');
      if (btn.textContent?.toLowerCase().includes(category)) {
        btn.classList.add('active');
      }
    });
  }
}
