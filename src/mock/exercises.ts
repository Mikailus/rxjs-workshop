import { OfComponent } from 'src/app/your-works/of/of.component';
import { DisplayDataComponent } from 'src/app/additional/display-data/display-data.component';
import { DivideToComponentsComponent } from 'src/app/additional/divide-to-components/divide-to-components.component';
import { ChangeAgeToInputComponent } from '../app/additional/change-age-to-input/change-age-to-input.component';
import { FromEventComponent } from 'src/app/your-works/from-event/from-event.component';

export const exercises = [
    {
        title: 'Zadanie S1 - Subject',
        description: 'Wygeneruj strumień danych przy pomocy Subjecta.',
        link: 'subject',
    },
    {
        title: 'Zadanie S2 - BehaviorSubject',
        description: 'Wygeneruj strumień danych przy pomocy Behavior Subjecta.',
        link: 'behaviorSubject',
    },
    {
        title: 'Zadanie S3 - ReplaySubject',
        description: 'Wygeneruj strumień danych przy pomocy Replay Subjecta.',
        link: 'replaySubject',
    },
    {
        title: 'Zadanie 1 - of',
        description: 'Wygeneruj strumień danych.',
        link: 'of',
        component: OfComponent
    },
    {
        title: 'Zadanie 2 - fromEvent',
        description: 'Wygeneruj strumień używając fromEvent.',
        link: 'fromEvent',
        component: FromEventComponent
    },
    {
        title: 'Zadanie 3 - timer',
        description: 'Wygeneruj strumień używając timer.',
        link: 'timer'
    },
    {
        title: 'Zadanie 4 - interval',
        description: 'Wygeneruj strumień używając interval.',
        link: 'interval'
    },
    {
        title: 'Zadanie 5 - range',
        description: 'Wygeneruj strumień używając range.',
        link: 'range'
    },
    {
        title: 'Zadanie 6 - filter',
        description: 'Przefiltruj podany strumień.',
        link: 'filter'
    },
    {
        title: 'Zadanie 7 - first',
        description: 'Przefiltruj strumień używając first',
        link: 'first'
    },
    {
        title: 'Zadanie 8 - skip',
        description: 'Przefiltruj strumień używając skip',
        link: 'skip'
    },
    {
        title: 'Zadanie 9 - skipLast',
        description: 'Przefiltruj strumień używając skipLast',
        link: 'skipLast'
    },
    {
        title: 'Zadanie 10 - takeUntil',
        description: 'Przefiltruj strumień używając takeUntil',
        link: 'takeUntil'
    },
    {
        title: 'Zadanie 11 - skipUntil',
        description: 'Przefiltruj strumień używając skipUntil',
        link: 'skipUntil'
    },
    {
        title: 'Zadanie 12 - distinctUntilChanged',
        description: 'Przefiltruj strumień używając distinctUntilChanged',
        link: 'distinctUntilChanged'
    },
    {
        title: 'Zadanie 12 - debounceTime',
        description: 'Przefiltruj strumień używając debounceTime',
        link: 'debounceTime'
    },
    {
        title: 'Zadanie 13 - map',
        description: 'Przetransformuj strumień używając map',
        link: 'map'
    },
    {
        title: 'Zadanie 14 - mergeMap',
        description: 'Przetransformuj strumień używając mergeMap',
        link: 'mergeMap'
    },
    {
        title: 'Zadanie 15 - concatMap',
        description: 'Przetransformuj strumień używając concatMap',
        link: 'concatMap'
    },
    {
        title: 'Zadanie 16 - switchMap',
        description: 'Przetransformuj strumień używając switchMap',
        link: 'switchMap'
    },
    {
        title: 'Zadanie 17 - exhaustMap',
        description: 'Przetransformuj strumień używając exhaustMap',
        link: 'exhaustMap'
    },
    {
        title: 'Zadanie 18 - mapTo',
        description: 'Przetransformuj strumień używając mapTo',
        link: 'mapTo'
    },
    {
        title: 'Zadanie 19 - scan',
        description: 'Przetransformuj strumień używając scan',
        link: 'scan'
    },
    {
        title: 'Zadanie 20 - reduce',
        description: 'Przetransformuj strumień używając reduce',
        link: 'reduce'
    },
    {
        title: 'Zadanie 21 - pluck',
        description: 'Przetransformuj strumień używając pluck',
        link: 'pluck'
    },
    {
        title: 'Zadanie 22 - delay',
        description: 'Opóżnij strumień używając delay',
        link: 'delay'
    },
    {
        title: 'Zadanie 23 - timeout',
        description: 'Opóżnij strumień używając timeout?',
        link: 'timeout'
    },
    {
        title: 'Zadanie 24 - throwError',
        description: 'Spraw, aby strumień zakończył się w wyniku błędu',
        link: 'throw'
    },
    {
        title: 'Zadanie 25 - catch',
        description: 'Złap błąd w strumieniu i go napraw',
        link: 'catch'
    },
    {
        title: 'Zadanie 26 - retry',
        description: 'Powtórz próbę podłączenia się do strumienia z błędem',
        link: 'retry'
    },
    {
        title: 'Zadanie 27 - retryWhen',
        description: 'Powtórz próbę podłączenia się do strumienia z błędem pod pewnymi warunkami',
        link: 'retryWhen'
    },
    {
        title: 'Zadanie 28 - merge',
        description: 'Połącz strumienie',
        link: 'merge'
    },
    {
        title: 'Zadanie 29 - forkJoin',
        description: 'Połącz strumienie',
        link: 'forkJoin'
    },
    {
        title: 'Zadanie 30 - combineLatest',
        description: 'Połącz strumienie',
        link: 'combineLatest'
    },
    {
        title: 'Zadanie 31 - zip',
        description: 'Połącz strumienie',
        link: 'zip'
    },
    {
        title: 'Zadanie 32 - concat',
        description: 'Połącz strumienie',
        link: 'concat'
    },
    {
        title: 'Zadanie 33 - withLatestFrom',
        description: 'Połącz strumienie',
        link: 'withLatestFrom'
    },
    {
        title: 'Zadanie 34 - mergeAll',
        description: 'Połącz strumienie',
        link: 'mergeAll'
    },
    {
        title: 'Zadanie 35 - combineAll',
        description: 'Połącz strumienie',
        link: 'combineAll'
    },
    {
        title: 'Zadanie 36 - concatAll',
        description: 'Połącz strumienie',
        link: 'concatAll'
    },
    {
        title: 'Zadanie 37 - switchAll',
        description: 'Połącz strumienie',
        link: 'switchAll'
    },
    {
        title: 'Zadanie 38 - pairwise',
        description: 'Połącz strumienie',
        link: 'pairwise'
    },
    {
        title: 'Zadanie 39',
        wrapper: DisplayDataComponent,
        description: 'Wyświetl dane',
        link: 'display-data'
    },
    {
        title: 'Zadanie 40',
        wrapper: DivideToComponentsComponent,
        description: 'Podziel na komponenty rozwiązanie z poprzedniego zadania',
        link: 'divide-to-components'
    },
    {
        title: 'Zadanie 41',
        wrapper: ChangeAgeToInputComponent,
        description: 'Zamień wiek przyjaciół na inputy tekstowe z wiekiem',
        link: 'change-age-to-input'
    }
]