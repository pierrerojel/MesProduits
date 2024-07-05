import { Component } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent {
  allProduits! : Produit[]; 
  searchTerm!: string;

rechercherProds(){ this.produitService.rechercherParNom(this.nomProduit).
    subscribe(prods => { this.produits = prods; console.log(prods)});
    }
  
ngOnInit(): void { this.produitService.listeProduit().subscribe(prods => {
      console.log(prods); this.allProduits = prods;
      });
      }
onKeyUp(filterText : string){
      this.produits = this.allProduits.filter(item => item.nomProduit.toLowerCase().includes(filterText));
      }
}
