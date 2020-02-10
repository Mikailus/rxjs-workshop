import { Injectable } from "@angular/core";
import { Observable, of, asyncScheduler } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DataService {
    getData(): Observable<Data[]> {
        return of(data, asyncScheduler).pipe(delay(2000));
    }

    postData(): Observable<{}> {
        return of({}, asyncScheduler);
    }
}

const data: Data[] = [
    {
        id: '1',
        name: 'Janek',
        age: 23,
        friends: [
            {
                id: '11',
                name: 'Adam',
                age: 22
            },
            {
                id: '12',
                name: 'Ewa',
                age: 20
            }
        ]
    },
    {
        id: '2',
        name: 'Martyna',
        age: 32,
        friends: [
            {
                id: '21',
                name: 'Grzegorz',
                age: 35
            },
            {
                id: '22',
                name: 'Grażyna',
                age: 32
            },
            {
                id: '23',
                name: 'Zosia',
                age: 33
            }
        ]
    },
    {
        id: '3',
        name: 'Franciszek',
        age: 1,
        friends: null
    },
    {
        id: '4',
        name: 'Filip',
        age: 10,
        friends: [
            {
                id: '41',
                name: 'Maciek',
                age: 10
            },
            {
                id: '42',
                name: 'Tomek',
                age: 10
            },
            {
                id: '43',
                name: 'Jarek',
                age: 10
            }
        ]
    },
    {
        id: '5',
        name: 'Kinga',
        age: 27,
        friends: [
            {
                id: '51',
                name: 'Magda',
                age: 27
            },
            {
                id: '52',
                name: 'Danka',
                age: 28
            }
        ]
    },
    {
        id: '6',
        name: 'Natalia',
        age: 17,
        friends: [
            {
                id: '61',
                name: 'Aga',
                age: 17
            }
        ]
    }
];

interface Data {
    id: string;
    name: string;
    age: number;
    friends: {  id: string; name: string, age: number}[];
}
