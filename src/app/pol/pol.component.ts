import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { CloseNavService } from "../close-nav.service";

@Component({
  selector: 'app-pol',
  templateUrl: './pol.component.html',
  styleUrls: ['./pol.component.min.css']
})
export class PolComponent implements OnInit {

  constructor(
    private router: Router,
    private closer: CloseNavService,
    public dialogRef: MatDialogRef<PolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.closer.setCloser(() => {
          this.closeClick();
      })
  }

  ngOnInit() {
    this.router.navigate(['/start']);
  }

  closeClick(): void {
    this.dialogRef.close();
  }
}
