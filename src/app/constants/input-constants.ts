import { InputButtonComponent } from "../dynamic-form/templates/input-button/input-button.component"
import { InputCheckboxComponent } from "../dynamic-form/templates/input-checkbox/input-checkbox.component"
import { InputDateComponent } from "../dynamic-form/templates/input-date/input-date.component"
import { InputFileComponent } from "../dynamic-form/templates/input-file/input-file.component"
import { InputPlaintextComponent } from "../dynamic-form/templates/input-plaintext/input-plaintext.component"
import { InputRadioComponent } from "../dynamic-form/templates/input-radio/input-radio.component"
import { InputSelectComponent } from "../dynamic-form/templates/input-select/input-select.component"
import { InputSubmitBtnComponent } from "../dynamic-form/templates/input-submit-btn/input-submit-btn.component"
import { InputTextComponent } from "../dynamic-form/templates/input-text/input-text.component"
import { InputTextareaComponent } from "../dynamic-form/templates/input-textarea/input-textarea.component"

export enum InputTypes {
    InputText=0,
    InputCheckbox,
    InputSelect,
    InputRadio,
    InputFile,
    InputTextArea,
    InputDate,
    InputPlainText,

  }

export class InputConstants {

    public static readonly INPUT_TEMPLATE_MAPPING:any={
        [InputTypes.InputText]:InputTextComponent,
        [InputTypes.InputCheckbox]:InputCheckboxComponent,
        [InputTypes.InputSelect]:InputSelectComponent,
        [InputTypes.InputRadio]:InputRadioComponent,
        [InputTypes.InputFile]:InputFileComponent,
        [InputTypes.InputTextArea]:InputTextareaComponent,
        [InputTypes.InputDate]:InputDateComponent,
        [InputTypes.InputPlainText]:InputPlaintextComponent,
    }

    

    
    

}

export const INPUT_TEMPLATES:any=[
    'Text Input',
    'Checkbox',
    'Select Dropdown',
    'Radio buttons',
    'File Input',
    'Textarea Input',
    'Date Input',
    'Plaintext',
]
