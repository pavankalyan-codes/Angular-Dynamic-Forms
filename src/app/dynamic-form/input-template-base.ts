import { FormInput } from "../models/form-input.model";

export class InputTemplateBase {

    input:FormInput={
        name: "",
        inputType: 0,
        value: "",
        isRequired: false,
        id: "",
        label: ""
    };
    dummy="testing";

    constructor(){
    }
}
