import { Component, OnInit } from '@angular/core';
import { InputTemplateBase } from '../../input-template-base';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent extends InputTemplateBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
