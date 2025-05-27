import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @ViewChild('projectsContainer') projectsContainer!: ElementRef;
  githubUrl: string = 'https://github.com/kabdelrahman996';
  currentIndex: number = 0;
  cardWidth: number = 375; // Card width + gap
  autoScrollInterval: any;

  projects: any[] = [
    {
      title: 'Elearn - Educational Platform',
      description:
        'An educational platform developed with Angular, Bootstrap, and JSON-server, where users can register as students or teachers and manage course information.',
      image: 'assets/images/Elearn.png',
      technologies: ['Angular', 'Bootstrap', 'JSON-server', 'TypeScript'],
      category: 'Web App',
      // demoLink: 'https://your-demo-link.com/elearn',
      codeLink: 'https://github.com/kabdelrahman996/elearn.git',
    },
    {
      title: 'Website Clone',
      description:
        'A pixel-perfect clone of a popular website, built using HTML and CSS to replicate layout and design.',
      image: 'assets/images/clone.png',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      category: 'Frontend',
      demoLink: 'https://kabdelrahman996.github.io/website-clone/',
      codeLink: 'https://github.com/kabdelrahman996/website-clone.git',
    },
    {
      title: 'Todo List',
      description:
        'A task management app built with HTML, CSS, and JavaScript, enabling users to add, update, and delete tasks.',
      image: 'assets/images/toDo.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      category: 'Utility',
      demoLink: 'https://kabdelrahman996.github.io/ToDoList/',
      codeLink: 'https://github.com/kabdelrahman996/ToDoList.git',
    },
    {
      title: 'Simple Calculator',
      description:
        'A basic calculator app built using HTML, CSS, and JavaScript to perform simple arithmetic operations.',
      image: 'assets/images/calculator.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      category: 'Utility',
      demoLink: 'https://kabdelrahman996.github.io/simpleCalculator/',
      codeLink: 'https://github.com/kabdelrahman996/simpleCalculator.git',
    },
    {
      title: 'Registration/Login Form',
      description:
        'A form with client-side validation built using HTML, CSS, and JavaScript to handle user registration and login processes.',
      image: 'assets/images/log-reg.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Form Validation'],
      category: 'Frontend',
      demoLink: 'https://kabdelrahman996.github.io/RegiLogin/',
      codeLink: 'https://github.com/kabdelrahman996/RegiLogin.git',
    },
    {
      title: 'Yummy - Restaurant Landing Page',
      description:
        'A visually appealing restaurant landing page built with HTML, CSS, JavaScript, and Bootstrap. It uses a JSON API to dynamically load content.',
      image: 'assets/images/restuarant.png',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'API Integration',
      ],
      category: 'Landing Page',
      demoLink: 'https://kabdelrahman996.github.io/restaurant/',
      codeLink: 'https://github.com/kabdelrahman996/restaurant.git',
    },
    {
      title: 'Natours - Tour Booking Platform',
      description:
        'A comprehensive tour booking platform built with Node.js, Express, and MongoDB. Features include user authentication, tour management, booking with payment processing, and interactive maps.',
      image: 'assets/images/natours.png',
      technologies: [
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'JWT',
        'Pug Templates',
        'Stripe',
        'Mapbox',
      ],
      category: 'Full Stack',
      demoLink: 'https://natours-abb.netlify.app/',
      codeLink: 'https://github.com/kabdelrahman996/natours-backend.git',
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    // Adjust card width based on actual rendered size
    setTimeout(() => {
      this.updateCardWidth();

      // Start auto-scroll
      this.startAutoScroll();
    }, 500);

    // Pause auto-scroll when hovering over the carousel
    this.projectsContainer.nativeElement.addEventListener('mouseenter', () => {
      this.stopAutoScroll();
    });

    this.projectsContainer.nativeElement.addEventListener('mouseleave', () => {
      this.startAutoScroll();
    });

    // Listen for scroll events to update currentIndex
    this.projectsContainer.nativeElement.addEventListener('scroll', () => {
      this.updateCurrentIndexFromScroll();
    });
  }

  // Clean up on component destroy
  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  // Update current index based on scroll position
  updateCurrentIndexFromScroll(): void {
    const scrollLeft = this.projectsContainer.nativeElement.scrollLeft;
    const newIndex = Math.round(scrollLeft / this.cardWidth);
    if (newIndex !== this.currentIndex) {
      this.currentIndex = newIndex;
    }
  }

  // Update card width calculation
  updateCardWidth(): void {
    const cards =
      this.projectsContainer.nativeElement.querySelectorAll('.project-card');
    if (cards.length > 0) {
      const firstCard = cards[0];
      const cardRect = firstCard.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(firstCard);
      const marginRight = parseInt(computedStyle.marginRight || '0');
      this.cardWidth = cardRect.width + marginRight + 25; // 25px is the gap
    }
  }

  // Scroll to previous project
  scrollLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToProject(this.currentIndex);
    } else {
      // Optional: Loop back to the end
      this.currentIndex = this.projects.length - 1;
      this.scrollToProject(this.currentIndex);
    }
  }

  // Scroll to next project
  scrollRight(): void {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
      this.scrollToProject(this.currentIndex);
    } else {
      // Optional: Loop back to the beginning
      this.currentIndex = 0;
      this.scrollToProject(this.currentIndex);
    }
  }

  // Scroll to specific project by index
  scrollToProject(index: number): void {
    this.currentIndex = index;
    const scrollPosition = index * this.cardWidth;
    this.projectsContainer.nativeElement.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }

  // Start auto-scroll
  startAutoScroll(): void {
    this.stopAutoScroll(); // Clear any existing interval
    this.autoScrollInterval = setInterval(() => {
      if (this.currentIndex < this.projects.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.scrollToProject(this.currentIndex);
    }, 5000); // Scroll every 5 seconds
  }

  // Stop auto-scroll
  stopAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  // Handle window resize
  @HostListener('window:resize')
  onResize(): void {
    // Recalculate card width
    this.updateCardWidth();

    // Scroll to current project with new dimensions
    this.scrollToProject(this.currentIndex);
  }

  // Handle touch events for mobile swipe
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    // Stop auto-scroll when user is interacting
    this.stopAutoScroll();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    // Resume auto-scroll after touch interaction
    setTimeout(() => {
      this.startAutoScroll();
    }, 1000);
  }
}
