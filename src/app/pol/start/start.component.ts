import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CloseNavService } from "../../close-nav.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.min.css']
})
export class StartComponent implements OnInit {

  constructor(private router: Router,
              public closer: CloseNavService) { }

  ngOnInit() {
  }

}
