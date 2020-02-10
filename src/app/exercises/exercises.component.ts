import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {
  exercises: any;
  animation: string;

  constructor(private activatedRoute: ActivatedRoute) {
    const data = this.activatedRoute.snapshot.data;
    this.exercises = data.exercises;
    this.animation = data.animation;
  }
}
