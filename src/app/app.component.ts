import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MaterialModule } from './material/material.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private _snackBar: MatSnackBar){

  }
  title = 'angular-practise';
  volunteerArray = [{name: "", trial: ""}]
  public name = ""
  public trial = ""

  ngOnInit(){
    this.volunteerArray.pop()
  }

  openSnackBar(message: string, action: any){
    let snackBarRef = this._snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed()
    .subscribe(() =>
    {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction()
    .subscribe(() =>
    {
      console.log('The snackbar was triggered');
    });
  }

  AddVolunteer(){
    if(this.name != "" || this.trial != "")
    {
      this.volunteerArray.push({name: this.name, trial: this.trial})
      this.openSnackBar('Added '+ this.name, 'Dismiss')
    }
    else {  
      alert("Enter both a name and a trial type")
    }
    this.ClearForm()
  }

  DeleteVolunteer(){
    if (this.volunteerArray.length != 0)
    {
      this.volunteerArray.pop()
      this.openSnackBar(this.name + ' was removed', 'Dismiss')
    }
    else
      alert("Array is empty")
      this.ClearForm()
  }

  ClearForm(){
    this.name = ""
    this.trial = ""
  }
}
