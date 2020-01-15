import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  name: string;
  nationalId: string;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.name = this.storageService.getInfoName();
    this.nationalId = this.storageService.getInfoNationalId();
  }


  onKey1(event: KeyboardEvent) {
    this.name = (event.target as HTMLInputElement).value;
    this.storageService.saveInfoName(this.name);
  }

  onKey2(event: KeyboardEvent) {
    this.nationalId = (event.target as HTMLInputElement).value;
    this.storageService.saveInfoNationalId(this.nationalId);
  }
}
