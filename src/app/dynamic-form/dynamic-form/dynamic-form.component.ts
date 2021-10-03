import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTypes } from 'src/app/constants/input-constants';
import { FormInput } from 'src/app/models/form-input.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() formInputs: FormInput[];

  formGroup: FormGroup = new FormGroup({});

  constructor() {
    this.formInputs=[];
   }

  ngOnInit(): void {
   
  }

}
