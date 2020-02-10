import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  result: any[] = [];

  constructor() { }

  ngOnInit() {
    of(1, 2, 3).subscribe(v => this.result.push(v));
  }

}
