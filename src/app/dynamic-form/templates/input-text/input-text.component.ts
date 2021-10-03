import { Component, OnInit } from '@angular/core';
import { FormInput } from 'src/app/models/form-input.model';
import { InputTemplateBase } from '../../input-template-base';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends InputTemplateBase implements OnInit  {

  constructor() {
    super();
   }

  ngOnInit(): void {
    console.log(this.input);
  }

}
