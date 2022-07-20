import { Component, OnInit } from '@angular/core';
import { dataList } from './interface';
import { MatDialog } from '@angular/material/dialog'
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import * as _ from 'lodash';


@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CrudOperationsComponent implements OnInit {
  dataList : dataList[];
  _=_;

  constructor(public matDialog: MatDialog) {
    this.dataList =[{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
    }
  ]
  }

  ngOnInit(): void {
  }

  openEditDialog(editData: dataList){
    const dialogRef = this.matDialog.open(AddEditDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {listData: editData, from: 'Update'}
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.submit) {
        this.dataList.map((list)=>{
          if(list.id == result.data.id){
            list = result.data.data
          }
        })
      }
    });
  }
  openDeleteDialog(editData: dataList){
    const dialogRef = this.matDialog.open(DeleteDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: editData
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.toDelete) {
        _.remove(this.dataList, (item) => {
          return item == result.data;
        })
      }
    });
  }
  openAddDialog(){
    const newData={
      "id": this.dataList[this.dataList.length-1].id+1,
      "name": "",
      "username": "",
      "email": "",
    }
    const dialogRef = this.matDialog.open(AddEditDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {listData: newData, from: 'Add'}
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.submit) {
        this.dataList.push(result.data)
      }
    });
  }

}
