import {Component, OnInit, ViewChild} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';


@Component({
  selector: 'app-root',
templateUrl: './popup-component.html',
})
export class LoginComponent implements OnInit {



  public isLoggedIn = false;
  public registrationKeycloak: void | undefined;
  public  popUpActive = "";
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();
   //


    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
     // this.registrationKeycloak = await  this.keycloak.register();
    }


  }
  public tooglePopUp() {
    if (this.popUpActive === "")
          this.popUpActive = "active";
    else
      this.popUpActive = "";
      }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
   }
   public registration(){
   this.keycloak.register();

    }


}



