import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'app-formly-custom-field',
 templateUrl: './formly-custom-field.html',
 styleUrls: ['./formly-custom-field.scss']
})
export class FormlyCustomFieldComponent extends FieldType {

   todo = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'iOS',
      category: 'App Development'
    },
    {
      name: 'Java',
      category: 'Software development'
    }
  ];

  done = [
    {
      name: 'Android',
      category: 'Mobile Development'
    },
    {
      name: 'MongoDB',
      category: 'Databases'
    },
    {
      name: 'ARKit',
      category: 'Augmented Reality'
    },
    {
      name: 'React',
      category: 'Web Development'
    }
  ];

  drop(event: any): void{
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
  }

}
