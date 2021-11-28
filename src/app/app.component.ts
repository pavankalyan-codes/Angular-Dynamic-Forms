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
      label:"Example Input text",
      placeholder:"Hodor",
      textType:"password",
    },
    {
      name: "test2",
      inputType:1,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Example Checkbox",
      placeholder:"",
      options:[
        {
          text:"Option 1",
          value:"option1",
          id:uuid.v4()
        },
        {
          text:"Option 2",
          value:"option2",
          id:uuid.v4()
        },
        {
          text:"Option 3",
          value:"option3",
          id:uuid.v4()
        }
      ]
    },
    {
      name: "test3",
      inputType:2,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem",
      placeholder:"",
      options:[
        {
          text:"Option 1",
          value:"option1",
          id:uuid.v4()
        },
        {
          text:"Option 2",
          value:"option2",
          id:uuid.v4()
        },
        {
          text:"Option 3",
          value:"option3",
          id:uuid.v4()
        }
      ]
    },
    {
      name: "test4",
      inputType:3,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem",
      placeholder:"",
      options:[
        {
          text:"Option 1",
          value:"option1",
          id:uuid.v4()
        },
        {
          text:"Option 2",
          value:"option2",
          id:uuid.v4()
        },
        {
          text:"Option 3",
          value:"option3",
          id:uuid.v4()
        }
      ]
    },
    {
      name: "test5",
      inputType:4,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem",
      placeholder:""
    },
    {
      name: "test6",
      inputType:5,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem",
      placeholder:""
    },
    {
      name: "test7",
      inputType:6,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem",
      placeholder:""
    },
    {
      name: "test8",
      inputType:7,
      value:"",
      isRequired:true,
      id:uuid.v4(),
      label:"Lorem",
      placeholder:""
    }
  ];

  addToForm(data:any){
    if(data.rearrange){
      moveItemInArray(this.dynamicForm, data.index, data.insertAt);
    }
    else{
      this.dynamicForm.splice(data.insertAt,0,{...this.defaultFormValues[data.index]});
    }
  }

  deleteFromForm(index:number){
    this.dynamicForm.splice(index,1);
  }
}
