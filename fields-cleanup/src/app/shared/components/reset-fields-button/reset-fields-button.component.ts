import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reset-fields-button',
  templateUrl: './reset-fields-button.component.html',
  styleUrls: ['./reset-fields-button.component.css']
})
export class ResetFieldsButtonComponent implements OnInit {
  @Input() label: string;
  @Input() allFields: Array<FormControl>;

  constructor() {
  }

  ngOnInit() {
  }

  isResetDisabled(): boolean {
    return this.allFields.every(control => control.value === '');
  }

  onClickButton(event) {
    this.allFields.map(num => {
      num.setValue('');
    });
  }
}
