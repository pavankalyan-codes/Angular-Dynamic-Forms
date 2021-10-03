import { Component, OnInit } from '@angular/core';
import { InputTemplateBase } from '../../input-template-base';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent extends InputTemplateBase implements OnInit  {

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

}
