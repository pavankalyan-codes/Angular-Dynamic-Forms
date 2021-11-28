import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InputTypes } from 'src/app/constants/input-constants';
import { FormInput } from 'src/app/models/form-input.model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-edit-input-element',
  templateUrl: './edit-input-element.component.html',
  styleUrls: ['./edit-input-element.component.scss']
})
export class EditInputElementComponent implements OnInit {

  inputElementFormGroup:FormGroup;
  optionsArray:FormArray;
  @Input()
  inputEl!: FormInput;

  inputLabel:FormControl | undefined
  inputPlaceholder:FormControl | undefined
  inputIsRequired:FormControl | undefined
  inputRegex: FormControl | undefined
  inputErrorText:FormControl | undefined
  inputTextType:FormControl | undefined

  constructor(private fb:FormBuilder) {
    
    this.optionsArray=this.fb.array([])
      
    
    this.inputElementFormGroup=this.fb.group({
      inputLabel:new FormControl(''),
      optionsArray:this.optionsArray,
      inputPlaceholder:new FormControl(''),
      inputIsRequired:new FormControl(false),
      inputRegex:new FormControl(''),
      inputErrorText:new FormControl(''),
      inputTextType:new FormControl('')
    
    });
   }



  ngOnInit(): void {

    this.inputElementFormGroup.get('inputLabel')?.patchValue(this.inputEl.label);
    this.inputElementFormGroup.get('inputPlaceholder')?.patchValue(this.inputEl.placeholder);
    this.inputElementFormGroup.get('inputIsRequired')?.patchValue(this.inputEl.isRequired);
    this.inputElementFormGroup.get('inputRegex')?.patchValue(this.inputEl.regex);
    this.inputElementFormGroup.get('inputErrorText')?.patchValue(this.inputEl.errorText);
    this.inputElementFormGroup.get('inputTextType')?.patchValue(this.inputEl.textType);
    if(this.inputEl.options){
      for(let option of this.inputEl.options){
        this.optionsArray.push(this.fb.group({
          id: option.id,
          text: [option.text],
          value: [option.value]
        }));
      }
      
    }
    this.inputElementFormGroup.valueChanges.subscribe(value=>{


      
      this.inputEl.label=value.inputLabel;
      this.inputEl.placeholder=value.inputPlaceholder;
      this.inputEl.isRequired=value.inputIsRequired;
      this.inputEl.options=value.optionsArray;
      this.inputEl.regex=value.inputRegex;
      this.inputEl.errorText=value.inputErrorText;
      this.inputEl.textType=value.inputTextType;
     })
  }

  

  addOptionRow(){

    this.optionsArray.push(this.getOptionFormControl());
  }
  deleteOption(index:number){

    this.optionsArray.removeAt(index);
    
  }

  getOptionFormControl(){
    return this.fb.group({
      id: uuid.v4(),
      text: [''],
      value: ['']
    });
  }

  getFormArray(list:any){
    if(list){
      return list.map((item:any)=>{
        return this.fb.group(item);
      })
    }
    return this.fb.array([this.getOptionFormControl()]);
    

  }

  get showOptions(){
    return this.inputEl.inputType===InputTypes.InputSelect || this.inputEl.inputType===InputTypes.InputRadio || this.inputEl.inputType===InputTypes.InputCheckbox;
  }

  get showRegex(){
    return this.inputEl.inputType===InputTypes.InputText || this.inputEl.inputType===InputTypes.InputTextArea;
  }

  get showTextType(){
    return this.inputEl.inputType===InputTypes.InputText
  }

  get showPlaceholder(){
    return this.inputEl.inputType!==InputTypes.InputPlainText
  }

  get showRequired(){
    return this.inputEl.inputType!==InputTypes.InputPlainText
  }

  onSubmit(){

  }

}
