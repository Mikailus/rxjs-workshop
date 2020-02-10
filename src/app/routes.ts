import { Routes } from '@angular/router';
import { exercises } from '../mock/exercises';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';

export const getRoutes = () => exercises.map(exercise => {
    return {
        path: exercise.link,
        component: exercise.wrapper ? exercise.wrapper : ExerciseComponent,
        data: {
            exercise,
            animation: 'Exercise'
        }
    };
});

export const routes: Routes = [
    {
        path: 'exercises',
        component: ExercisesComponent,
        data: {
            exercises,
            animation: 'Exercises'
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'exercises'
    }
];
routes.push(...getRoutes());
