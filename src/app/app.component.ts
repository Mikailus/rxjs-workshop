import { Component } from '@angular/core';
import { exercises } from '../mock/exercises';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './shared/animations/slideIn.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {

  exercises: any;
  constructor() {
    this.exercises = exercises;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
