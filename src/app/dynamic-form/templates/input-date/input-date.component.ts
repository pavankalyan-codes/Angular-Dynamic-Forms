import { Component, OnInit } from '@angular/core';
import { InputTemplateBase } from '../../input-template-base';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent extends InputTemplateBase implements OnInit  {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
