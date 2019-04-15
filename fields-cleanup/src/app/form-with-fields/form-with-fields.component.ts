import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-with-fields',
  templateUrl: './form-with-fields.component.html',
  styleUrls: ['./form-with-fields.component.css']
})
export class FormWithFieldsComponent implements OnInit {
  label = 'Cleanup Fields';

  zipcode: FormControl;
  locality: FormControl;
  street: FormControl;
  houseNumber: FormControl;
  houseBuilding: FormControl;
  allFields = [];

  constructor() {
    this.zipcode = new FormControl('', [ Validators.required ]);
    this.locality = new FormControl('', [ Validators.required ]);
    this.street = new FormControl('', [ Validators.required ]);
    this.houseNumber = new FormControl('', [ Validators.required ]);
    this.houseBuilding = new FormControl('', [ Validators.required ]);
    this.allFields = [
      this.zipcode,
      this.locality,
      this.street,
      this.houseNumber,
      this.houseBuilding ];
  }

  ngOnInit() {
  }
}
