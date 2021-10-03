import { Component } from '@angular/core';
import { FormInput } from './models/form-input.model';
import * as uuid from 'uuid';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFormGenerator';
  dynamicForm:FormInput[]=[];
  defaultFormValues:FormInput[]=[
    {
      name: "test1",
      inputType:0,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Example Input text"
    },
    {
      name: "test2",
      inputType:1,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Example Checkbox"
    },
    {
      name: "test3",
      inputType:2,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem"
    },
    {
      name: "test4",
      inputType:3,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem"
    },
    {
      name: "test5",
      inputType:4,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem"
    },
    {
      name: "test6",
      inputType:5,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem"
    },
    {
      name: "test7",
      inputType:6,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem"
    },
    {
      name: "test8",
      inputType:7,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem"
    }
  ];

  addToForm(data:any){
    if(data.rearrange){
      moveItemInArray(this.dynamicForm, data.index, data.insertAt);
    }
    else{
      this.dynamicForm.splice(data.insertAt,0,this.defaultFormValues[data.index]);
    }
  }
}
