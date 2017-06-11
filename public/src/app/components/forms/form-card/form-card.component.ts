import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
  @Input() formTitle
  @Input() btnPrimary
  @Input() btnSecondary

  constructor() { }

  ngOnInit() {
  }

}
