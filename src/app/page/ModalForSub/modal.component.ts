import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-your-task-dialog',
  templateUrl : './modal.component.html'
})
export class Modal {

  constructor(public dialogRef: MatDialogRef<Modal>) {console.log("modal construct") }

  onClose(): void {
    this.dialogRef.close();
  }
}