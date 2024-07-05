import { Component } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrl: './recherche-par-categorie.component.css'
})
export class RechercheParCategorieComponent {
  produits! : Produit[];
  IdCategorie! : number; 
  categories! : Categorie[];

  ngOnInit(): void { this.produitService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories; console.log(cats);
    });
    }
  onChange() {
    this.produitService.rechercherParCategorie(this.IdCategorie). subscribe(prods =>{this.produits=prods});
  }
}
