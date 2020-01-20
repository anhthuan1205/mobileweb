import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry-result',
  templateUrl: './inquiry-result.component.html',
  styleUrls: ['./inquiry-result.component.scss']
})
export class InquiryResultComponent implements OnInit {
  theCheckbox: true;

  constructor() { }

  ngOnInit() {
  }

  submit() {

  }

  end() {

  }

  check() {
    return !this.theCheckbox;
  }
}
