import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  // Frontend Skills as simple string array
  frontendSkills: string[] = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'Angular',
    'TypeScript',
    'jQuery',
  ];

  // Backend Skills as simple string array
  backendSkills: string[] = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'RESTful APIs',
    'Authentication',
    'JWT / OAuth',
    'Secure Login Systems',
    'Password Hashing',
  ];

  // Responsive Design Description
  responsiveDesignDescription: string =
    'Expertise in building responsive and mobile-friendly applications that provide optimal viewing and interaction experience across a wide range of devices.';

  // Tools Skills as simple string array
  toolsSkills: string[] = [
    'Git',
    'GitHub',
    'Linux Environments',
    'Postman (API Testing)',
  ];

  ngOnInit(): void {}
}
