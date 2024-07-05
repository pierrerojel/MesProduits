import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MesProduits';
  router: any;
  
  constructor (public authService: AuthService) {}

  onlogout(){
    this.authService.logout();
  };
  ngOnInit () {
    let isloggedin: string; 
    let loggedUser:string;
    isloggedin = localStorage.getItem('isloggedIn'); 
    loggedUser = localStorage.getItem('loggedUser'); 
    if (isloggedin!="true" || !loggedUser)
      this.router.navigate(['/login']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
}
