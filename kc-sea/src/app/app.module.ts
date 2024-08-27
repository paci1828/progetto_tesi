import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing-module';
import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";




function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'Keycloak-angular-connection',
        url: 'http://localhost:8080',
        clientId: 'kc-sea',
      },
      initOptions: {
        onLoad: 'check-sso',
        //onLoad: 'login-required',
        checkLoginIframe: true,
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}

@NgModule({
  declarations: [LoginComponent],
    imports: [AppRoutingModule, BrowserModule, KeycloakAngularModule, FormsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [LoginComponent],
})
export class AppModule {}
