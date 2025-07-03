import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'https://coderelisher.com/product/psmdigvet/';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showSnackbar(msg: string){
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  getCategory() {
    return this.http.get(this.baseUrl+'api_category.php');
  }

  getProducts() {
    return this.http.get(this.baseUrl+'api_products.php');
  }

  sendMessage(obj: any) {
    let body = obj;
    return this.http.post(this.baseUrl+'api_message.php', body);
  }

  activate(){
    let url = 'https://coderelisher.com/activation/index.php?id=psmdigvet.com';
    return this.http.get(url);
  }
}
