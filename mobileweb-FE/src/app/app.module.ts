import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBankComponent } from './list-bank/list-bank.component';
import { BankUsageAgreementComponent } from './bank-usage-agreement/bank-usage-agreement.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShareInformationComponent } from './share-information/share-information.component';
import { CicLoginComponent } from './cic-login/cic-login.component';
import { InformationComponent } from './share-information/information/information.component';
import { ShareComponent } from './share-information/share/share.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBankComponent,
    BankUsageAgreementComponent,
    ShareInformationComponent,
    CicLoginComponent,
    InformationComponent,
    ShareComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
