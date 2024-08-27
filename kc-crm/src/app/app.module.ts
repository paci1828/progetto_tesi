import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AccessDeniedComponent} from "./access-denied/access-denied.component";
import {AdminViewComponent} from "./admin-view/admin-view.component";



function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'Keycloak-angular-connection',
        url: 'http://localhost:8080/auth',
        clientId: 'kc-crm',
      },
      initOptions: {
        //onLoad: 'check-sso',
        checkLoginIframe: true,
       onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [AppComponent, AccessDeniedComponent, AdminViewComponent],
  imports: [AppRoutingModule, BrowserModule, KeycloakAngularModule, FormsModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
