import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  category: any = [
    "Fertility aids",
    "Oral calcium",
    "Mineral mixture",
    "Instant Energy (heat, cold, stress)",
    "Oral tonic",
    "Haematinics",
    "Rumenotorics",
    "Mastitis supportive",
    "Anti-parasitics",
    "Herbal wound cure spray",
    "Anti Gas",
    "Premium supplement",
    "Nervine tonic",
    "Liver stimulant",
    "Cough cure"
  ]
}
