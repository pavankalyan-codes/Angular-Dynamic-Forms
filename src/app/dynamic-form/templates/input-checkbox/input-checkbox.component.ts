import { Component, OnInit } from '@angular/core';
import { InputTemplateBase } from '../../input-template-base';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent extends InputTemplateBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
