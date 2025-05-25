import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbareComponent } from './components/navbare/navbare.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbareComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
