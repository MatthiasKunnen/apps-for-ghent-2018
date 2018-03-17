import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pol',
  templateUrl: './pol.component.html',
  styleUrls: ['./pol.component.min.css']
})
export class PolComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<PolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.router.navigate(['/start']);
  }

  closeClick(): void {
    this.dialogRef.close();
  }
}
