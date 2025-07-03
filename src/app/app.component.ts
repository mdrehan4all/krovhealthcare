import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'iht';

  status: string = '';
  header: string = '';
  message: string = '';
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      AOS.init();

      this.dataService.activate().subscribe((data: any)=>{
      this.status = data.status;
      this.header = data.header;
      this.message = data.message;
      console.log(data);
    })
  }
}
