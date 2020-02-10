import { Component, Input } from '@angular/core';
import { fadeAnimation } from '../shared/animations/fade.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class CardComponent {
    @Input() title: string;
    @Input() description: string;
    @Input() link: string;
}