import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8080/produits/api';

  constructor(private http : HttpClient) {}
  
  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }
    
  ajouterProduit( prod: Produit):Observable<Produit>{
  return this.http.post<Produit>(this.apiURL, prod, httpOptions);
    }
  supprimerProduit(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
  consulterProduit(id: number): Observable<Produit> { const url = `${this.apiURL}/${id}`;
      return this.http.get<Produit>(url);
      } 
  updateProduit(prod :Produit) : Observable<Produit>
      {
      return this.http.put<Produit>(this.apiURL, prod, httpOptions);
      }
  trierProduits(){
      this.produits = this.produits.sort((n1,n2) => { 
        if (n1.idProduit! > n2.idProduit!) {
            return 1;
      }
      if (n1.idProduit! < n2.idProduit!) { 
        return -1;
      }
      return 0;
      });
    }
  listeCategories():Observable<Categorie[]>{
      return this.http.get<Categorie[]>(this.apiURL+"/cat");
    }
  consulterCategorie(id:number): Categorie{
      return this.categories.find(cat => cat.idCat == id)!;
    }
  rechercherParCategorie(idCat: number):Observable< Produit[]> {
      const url = `${this.apiURL}/prodscat/${idCat}`; return this.http.get<Produit[]>(url);
      }
  rechercherParNom(nom: string):Observable< Produit[]> { const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Produit[]>(url);
    }
}