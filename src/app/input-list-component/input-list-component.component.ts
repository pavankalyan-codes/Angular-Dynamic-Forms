import { CdkDragDrop, CdkDragEnter, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputConstants, INPUT_TEMPLATES } from '../constants/input-constants';
import { FormInput } from '../models/form-input.model';
import * as _ from "lodash";
@Component({
  selector: 'app-input-list-component',
  templateUrl: './input-list-component.component.html',
  styleUrls: ['./input-list-component.component.scss']
})
export class InputListComponentComponent implements OnInit {
  panelOpenState=false;

  @Output() formItemAdded=new EventEmitter<any>();
  @Output() formItemRemoved=new EventEmitter<any>();
  @Input()
  formInputs!: FormInput[];

  inputTypes = INPUT_TEMPLATES;

  dynamicForm:string[] = [
    
  ];


  lists = [this.inputTypes, this.dynamicForm];

  public draggingOutsideSourceList: boolean = false;

  dragStart(event:any){
    const tempinputTypes = event.source.dropContainer.data.slice();
    const indexValue = tempinputTypes.indexOf(event.source.element.nativeElement.innerText);
    const movableValue = tempinputTypes.splice(indexValue,1).join();
    event.source.dropContainer.data.splice(indexValue, 0, movableValue);
    }

  drop(event:any) {

    if(event.previousContainer===event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.formItemAdded.emit({rearrange:true,insertAt:event.currentIndex,index:event.previousIndex});
    }
    else{
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.formItemAdded.emit({insertAt:event.currentIndex,index:event.previousIndex});
       
        
    }
    if (event.previousContainer.data) {
      _.remove(this.inputTypes, { temp: true });
    }
    
  }

  rearrange(event:any){
  }

  foo(data:any){
  }
  onCdkDragEntered(event: any) {
    let outSidedrag=event.container !== event.item.dropContainer;
    
    this.draggingOutsideSourceList = event.container !== event.item.dropContainer;
  }




  createdForm:string[]=[]
  constructor() {
    this.createdForm=["abc","demo"]
   }

  ngOnInit(): void {

    
  }

  noReturnPredicate() {
    return false;
  }

  onSourceListExited(event: any) {
    
  }
  
  onSourceListEntered(event: any) {
    _.remove(this.inputTypes, { temp: true });
  }
  
  removeItem(index:number){
    this.dynamicForm.splice(index,1);
    this.formItemRemoved.emit(index);
  }

  editElement(index:number){

  }

}
