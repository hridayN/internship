import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-dialog-parent',
  templateUrl: './dialog-parent.component.html',
  styleUrls: ['./dialog-parent.component.css']
})
export class DialogParentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; // disableClose: controls whether dialog can be closed by clicking outside of dialog
    const dialogRef = this.dialog.open(UserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('result: ', result);
      // dialogRef.close();
    });
  }
}
