import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyCustomFieldComponent } from './formly-custom-field';

@NgModule({
  declarations: [
    AppComponent,
    FormlyCustomFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    MatCardModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'drag', component: FormlyCustomFieldComponent },
      ]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
