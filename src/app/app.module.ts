import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { exercises } from 'src/mock/exercises';
import { ResultDirective } from './shared/directives/result.directive';
import { NoComponentProvidedComponent } from './no-component-provided/no-component-provided.component';
import { DisplayDataComponent } from './additional/display-data/display-data.component';
import { DivideToComponentsComponent } from './additional/divide-to-components/divide-to-components.component';
import { ChangeAgeToInputComponent } from './additional/change-age-to-input/change-age-to-input.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { FromEventComponent } from './your-works/from-event/from-event.component';

export function getExerciseComponents() { return exercises.filter(exercise => exercise.component).map(exercise => exercise.component);}
export function getWrapperComponents() { return exercises.filter(exercise => exercise.wrapper).map(exercise => exercise.wrapper);}

@NgModule({
  declarations: [
    ...getExerciseComponents(),
    AppComponent,
    CardComponent,
    ExercisesComponent,
    ExerciseComponent,
    NoComponentProvidedComponent,
    DisplayDataComponent,
    DivideToComponentsComponent,
    ChangeAgeToInputComponent,

    ResultDirective,

    SpinnerComponent,

    FromEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: getExerciseComponents().concat(<any>[NoComponentProvidedComponent]).concat(<any>getWrapperComponents())
})
export class AppModule { }


