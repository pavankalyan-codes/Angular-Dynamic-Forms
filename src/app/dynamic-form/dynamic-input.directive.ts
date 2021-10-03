import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormInput } from '../models/form-input.model';
import * as Constants from '../constants/input-constants';
import { InputConstants } from '../constants/input-constants';
import { InputTemplateBase } from './input-template-base';
@Directive({
  selector: '[appDynamicInput]'
})
export class DynamicInputDirective implements OnInit {

  @Input()
  input!: FormInput;


  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    
   }

   ngOnInit() {
     let componentF=InputConstants.INPUT_TEMPLATE_MAPPING[this.input.inputType];
     if(componentF){
       const factory = this.componentFactoryResolver.resolveComponentFactory(componentF);
       const component: ComponentRef<any> = this.viewContainerRef.createComponent(factory);
       component.instance.input=this.input;
     }
   }

}
