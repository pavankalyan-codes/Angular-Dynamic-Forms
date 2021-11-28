import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './templates/input-text/input-text.component';
import { InputTextareaComponent } from './templates/input-textarea/input-textarea.component';
import { InputSelectComponent } from './templates/input-select/input-select.component';
import { InputFileComponent } from './templates/input-file/input-file.component';
import { InputButtonComponent } from './templates/input-button/input-button.component';
import { InputSubmitBtnComponent } from './templates/input-submit-btn/input-submit-btn.component';
import { InputDateComponent } from './templates/input-date/input-date.component';
import { InputPlaintextComponent } from './templates/input-plaintext/input-plaintext.component';
import { InputRadioComponent } from './templates/input-radio/input-radio.component';
import { InputCheckboxComponent } from './templates/input-checkbox/input-checkbox.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicInputDirective } from './dynamic-input.directive';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    InputTextComponent,
    InputTextareaComponent,
    InputSelectComponent,
    InputFileComponent,
    InputButtonComponent,
    InputSubmitBtnComponent,
    InputDateComponent,
    InputPlaintextComponent,
    InputRadioComponent,
    InputCheckboxComponent,
    DynamicFormComponent,
    DynamicInputDirective
  ],
  exports: [
    InputTextComponent,
    InputTextareaComponent,
    InputSelectComponent,
    InputFileComponent,
    InputButtonComponent,
    InputSubmitBtnComponent,
    InputDateComponent,
    InputPlaintextComponent,
    InputRadioComponent,
    InputCheckboxComponent,
    DynamicFormComponent,
    DynamicInputDirective
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class DynamicFormModule { }
