import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
  @Input() formTitle
  @Input() btnPrimary
  @Input() btnSecondary

  @Output() primaryClicked = new EventEmitter()
  @Output() secondaryClicked = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  submitPrimary () {
    this.primaryClicked.emit('primary submitted')
  }

  submitSecondary () {
    this.secondaryClicked.emit('secondary submitted')
  }

}
