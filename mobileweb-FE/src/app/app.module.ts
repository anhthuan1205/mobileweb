import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBankComponent } from './list-bank/list-bank.component';
import { BankUsageAgreementComponent } from './bank-usage-agreement/bank-usage-agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBankComponent,
    BankUsageAgreementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
