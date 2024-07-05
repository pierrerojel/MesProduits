import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  produits : Produit[] = [];
  
  constructor(private produitService : ProduitService,
              public authService: AuthService) { }
  
  supprimerProduit(p: Produit)
  {
    let conf = confirm("Etes-vous sûr ?"); if (conf)
    this.produitService.supprimerProduit(p.idProduit).subscribe(() => { 
      console.log("produit supprimé");
      this.chargerProduits();
    });
  }
  ngOnInit(): void { 
      this.chargerProduits();
    }
  chargerProduits(){ this.produitService.listeProduit().subscribe(prods => {
      console.log(prods); this.produits = prods;
    });
  }
}