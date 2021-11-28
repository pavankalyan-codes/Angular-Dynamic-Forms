export interface FormInput {
    name: string;
    inputType:number;
    value:string;
    isRequired:boolean;
    id:string;
    label:string;
    
    options?:option[];
    placeholder?:string
    regex?:string;
    className?:string;
    errorText?:string
    textType?:string;
}

export interface option {
    id:string;
    value:string;
    text:string;
}
