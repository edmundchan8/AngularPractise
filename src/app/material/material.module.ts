import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule  } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

const material = [
  MatButtonModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
