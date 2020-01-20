import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBankComponent} from './list-bank/list-bank.component';
import {ShareInformationComponent} from './share-information/share-information.component';
import {CicLoginComponent} from './cic-login/cic-login.component';
import {BankUsageAgreementComponent} from './bank-usage-agreement/bank-usage-agreement.component';
import {InquiryResultComponent} from './inquiry-result/inquiry-result.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ListBankComponent
  },
  {
    path: 'share-information',
    component: ShareInformationComponent
  },
  {
    path: 'bank-usage-agreement',
    component: BankUsageAgreementComponent
  },
  {
    path: 'login-cic',
    component: CicLoginComponent
  },
  {
    path: 'inquiry-result',
    component: InquiryResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
