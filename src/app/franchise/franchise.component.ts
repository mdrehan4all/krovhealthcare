import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-franchise',
  standalone: false,
  
  templateUrl: './franchise.component.html',
  styleUrl: './franchise.component.scss'
})
export class FranchiseComponent implements OnInit{

  formGroup: any;

  constructor(private fb: FormBuilder, private dataService: DataService){
    this.formGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.email],
      email: [''],
      phone: [''],
      location: [''],
      experience: [''],
      amount: [''],
    })
  }

  submit(){
    let formData = this.formGroup.value;
    console.log(formData);

    this.dataService.sendMessage(this.formGroup.value).subscribe(
      (data: any)=>{
      console.log(data);
      this.dataService.showSnackbar("Message sent");
      },
      (error: any) => {
        this.dataService.showSnackbar(error.message);
    });
  }
}
