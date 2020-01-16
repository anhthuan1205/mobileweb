import { Component, OnInit } from '@angular/core';
import {IBankUsageAgreement} from '../interface/i-bankUsageAgreement';
import {BankService} from '../service/bank.service';
import {StorageService} from '../service/storage.service';

@Component({
  selector: 'app-bank-usage-agreement',
  templateUrl: './bank-usage-agreement.component.html',
  styleUrls: ['./bank-usage-agreement.component.scss']
})
export class BankUsageAgreementComponent implements OnInit {
  usageAgreement: IBankUsageAgreement;
  message: string;
  theCheckbox: false;

  constructor(private bankService: BankService,
              private storageService: StorageService) { }

  ngOnInit() {
    const bankId = this.storageService.getBankId();
    this.bankService.getBankUsageAgreement(bankId).subscribe( next => {
      this.usageAgreement = next;
      console.log(typeof(next.information_collection));
      console.log(next);
    }, error => {
      this.message = error.error.msg;
    } );
  }

  none() {
    return !this.theCheckbox;
  }
}
