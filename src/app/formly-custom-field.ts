import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'app-formly-custom-field',
 templateUrl: './formly-custom-field.html',
 styleUrls: ['./formly-custom-field.scss']
})
export class FormlyCustomFieldComponent extends FieldType implements OnInit  {
   todo = [
    {
      name: 'Angular'
    },
    {
      name: 'Flexbox'
    },
    {
      name: 'iOS'
    },
    {
      name: 'Java'
    }
  ];

  done = [
    {
      name: 'Android'
    },
    {
      name: 'MongoDB'
    },
    {
      name: 'ARKit'
    },
    {
      name: 'React'
    }
  ];

  review = [
    {
      name: 'review'
    },
    {
      name: 'review MongoDB'
    },
    {
      name: 'review ARKit'
    },
    {
      name: 'review React'
    }
  ];

  todoId = 'todo';
  doneId = 'done';
  reviewId = 'review';

  constructor(){
    super();
  }

  ngOnInit(): void {
    // this.field.formControl?.setValue(this.done);
  }

  drop(event: any): void{
    const prevContainerId = event.previousContainer.id;
    const currentContainerId = event.container.id;

    console.log('Prev Id');
    console.log(prevContainerId);

    console.log('Current Id');
    console.log(currentContainerId);

    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    // console.log('To Do Length');
    // console.log(this.todo.length);

    // console.log('Done Length');
    // console.log(this.done.length);

    // console.log('field');
    // console.log(this.field);

    // this.field.formControl?.setValue(this.done);
  }


}
