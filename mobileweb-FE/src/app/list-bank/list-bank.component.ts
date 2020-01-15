import { Component, OnInit } from '@angular/core';
import { IBank } from '../interface/i-bank';
import { BankService } from '../service/bank.service'
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.scss']
})
export class ListBankComponent implements OnInit {
  banks: IBank[];
  message: string;
  result = {id: '1'};

  constructor(private bankService: BankService,
              private storageService: StorageService) { }

  ngOnInit() {
    this.bankService.getAllBanks().subscribe(next => {
      this.banks = next;
      console.log(next);
    }, error => {
      this.message = error.error.msg;
    } );
  }

  onSubmit() {
    this.storageService.saveBankId(this.result.id);
    return JSON.stringify(this.result);
  }
}
