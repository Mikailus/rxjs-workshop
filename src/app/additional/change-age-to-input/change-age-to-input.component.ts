import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from '../../shared/animations/fade.animation';
import { ResultDirective } from '../../shared/directives/result.directive';
import { NoComponentProvidedComponent } from '../../no-component-provided/no-component-provided.component';

@Component({
  selector: 'app-change-age-to-input',
  templateUrl: './change-age-to-input.component.html',
  styleUrls: ['./change-age-to-input.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class ChangeAgeToInputComponent implements OnInit {
  @ViewChild(ResultDirective, {static: true}) result: ResultDirective;

    exercise: any;
    animation: string;
    constructor(
      private activatedRoute: ActivatedRoute,
      private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
      const data = this.activatedRoute.snapshot.data;
      this.exercise = data.exercise;
      this.animation = data.animation;
      this.loadComponent();
    }

    loadComponent() {
      const componentToRender = this.exercise.component ? this.exercise.component : NoComponentProvidedComponent;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToRender);

      const viewContainerRef = this.result.viewContainerRef;
      viewContainerRef.clear();

      viewContainerRef.createComponent(componentFactory);
    }
}
