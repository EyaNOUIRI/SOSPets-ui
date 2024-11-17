import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { NotreMissionComponent } from './notre-mission/notre-mission.component';
import { NosPartenairesComponent } from './nos-partenaires/nos-partenaires.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { FormulaireAdoptionComponent } from './formulaire-adoption/formulaire-adoption.component';
import { CaracteristiqueComponent } from './caracteristique/caracteristique.component';
import { CitoyenComponent } from './citoyen/citoyen.component';
import { VeterinaireComponent } from './veterinaire/veterinaire.component';
import { InfoAnimalComponent } from './info-animal/info-animal.component';
import { AppelDonComponent } from './appel-don/appel-don.component';
import { MesAdoptionComponent } from './mes-adoption/mes-adoption.component';
import { SignalDangerComponent } from './signal-danger/signal-danger.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActualiteComponent,
    NotreMissionComponent,
    NosPartenairesComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    SearchComponent,
    FormulaireAdoptionComponent,
    CaracteristiqueComponent,
    CitoyenComponent,
    VeterinaireComponent,
    InfoAnimalComponent,
    AppelDonComponent,
    MesAdoptionComponent,
    SignalDangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
