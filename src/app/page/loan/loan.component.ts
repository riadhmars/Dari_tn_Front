import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

    //Visit: Visit[];
   //Visit: Visit = new Visit();

   Loan!: Loan[];
  Loan: Loan = new Loan();

  constructor(
    private visiteService: VisiteService,
    private router: Router,
    private httpClient: HttpClient /***************/
    ) { }

  ngOnInit(): void {
  }


  LoanNew() {
    this.visiteService.addVisite(this.Loan).subscribe(
      (data) => {


        console.log(data);
        
      },
      (error) => console.log(error)
    );
  }

}
