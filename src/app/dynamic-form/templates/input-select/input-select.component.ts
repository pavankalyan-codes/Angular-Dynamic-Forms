import { Component, OnInit } from '@angular/core';
import { InputTemplateBase } from '../../input-template-base';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent extends InputTemplateBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
