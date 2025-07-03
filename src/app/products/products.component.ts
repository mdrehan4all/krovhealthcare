import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  products: any[] = [];
  categories: any[] = [];
  productsCopy: any[] = [];
  categoryIcons: any = [];
  isLoading: boolean = false;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    
    //this.isLoading = true;
    this.dataService.getCategory().subscribe((data: any) => {
      // console.log(data);
      //this.isLoading = false;
      this.categories = data;
    }, (error: any)=>{
      //this.isLoading = false;
    });

    this.isLoading = true;
    this.dataService.getProducts().subscribe((data: any) => {
      //console.log(data);
      this.products = data;
      this.productsCopy = data;
      this.isLoading = false;
    }, (error: any)=>{
      this.isLoading = false;
    });


    this.categoryIcons = {
      'ANTIBIOTICS': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pill w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>'),
      'ORTHO': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bone w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"></path></svg>'),
      'GASTRO & PPI RANGE': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cooking-pot w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M2 12h20"></path><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><path d="m4 8 16-4"></path><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"></path></svg>'),
      'ANTIHISTAMINES AND COUGH & COLD' : this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplet w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>'),
      'GYNAE': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flower w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>'),
      'SOFT GEL': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><circle cx="12" cy="12" r="10"></circle></svg>'),
      'AYURVEDIC PRODUCTS': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>'),
      'EYE & ENT DROPS': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>'),
      'DENTAL': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ear w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"></path><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"></path></svg>'),
      'DERMA': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shower-head w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="m4 4 2.5 2.5"></path><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"></path><path d="M15 5 5 15"></path><path d="M14 17v.01"></path><path d="M10 16v.01"></path><path d="M13 13v.01"></path><path d="M16 10v.01"></path><path d="M11 20v.01"></path><path d="M17 14v.01"></path><path d="M20 11v.01"></path></svg>'),
      'MULTI-VITAMINS': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>'),
      'CARDIAC DIABETIC': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>'),
      'PAEDIATRICS': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path></svg>'),
      'INJECTION': this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-syringe w-4 h-4" data-lov-id="src/components/product/CategoryFilters.tsx:65:34" data-lov-name="IconComponent" data-component-path="src/components/product/CategoryFilters.tsx" data-component-line="65" data-component-file="CategoryFilters.tsx" data-component-name="IconComponent" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="m18 2 4 4"></path><path d="m17 7 3-3"></path><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"></path><path d="m9 11 4 4"></path><path d="m5 19-3 3"></path><path d="m14 4 6 6"></path></svg>'),
      // gastro: this.sanitizer.bypassSecurityTrustHtml(''),
      // gastro: this.sanitizer.bypassSecurityTrustHtml(''),
      // gastro: this.sanitizer.bypassSecurityTrustHtml(''),
      // gastro: this.sanitizer.bypassSecurityTrustHtml(''),
    };
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  showAllProducts() {
    this.products = this.productsCopy;
  }

  showCategoryProducts(categoryId: number) {
    this.products = this.productsCopy.filter(product => product.cid === categoryId);
  }

}
