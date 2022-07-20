import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addUpdate, dataList } from '../crud-operations/interface';

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss']
})
export class AddEditDialogComponent implements OnInit {
  emailPattern = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';

  constructor(private dialogRef: MatDialogRef<AddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataFormValues: addUpdate) { }

  ngOnInit(): void {
  }
  closeDialog() {
    const data={
      submit:false
    }
    this.dialogRef.close(data);
  }
  
  onSubmit() {
    const data={
    submit: true,
      data: this.dataFormValues.listData
    }
    this.dialogRef.close(data);
  }

}
