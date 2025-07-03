import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  readonly panelOpenState = signal(false);
}
