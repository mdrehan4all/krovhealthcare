import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: false,
  
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() heading: string = '';
  @Input() descTitle: string = '';
  @Input() descText: string = '';
  @Input() icon: string = 'work';
  @Input() links: any = [{name: '', path: ''}];
}
