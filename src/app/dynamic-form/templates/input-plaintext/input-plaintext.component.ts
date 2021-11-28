import { Component, OnInit } from '@angular/core';
import { InputTemplateBase } from '../../input-template-base';

@Component({
  selector: 'app-input-plaintext',
  templateUrl: './input-plaintext.component.html',
  styleUrls: ['./input-plaintext.component.scss']
})
export class InputPlaintextComponent extends InputTemplateBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
