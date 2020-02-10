import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from '../../shared/animations/fade.animation';
import { ResultDirective } from '../../shared/directives/result.directive';
import { NoComponentProvidedComponent } from '../../no-component-provided/no-component-provided.component';

@Component({
  selector: 'app-divide-to-components',
  templateUrl: './divide-to-components.component.html',
  styleUrls: ['./divide-to-components.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class DivideToComponentsComponent implements OnInit {
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
