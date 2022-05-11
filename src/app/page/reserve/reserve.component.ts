import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VisiteService} from '../../services/visite.service';

import { NgForm } from '@angular/forms';
import { Visite } from 'src/app/visite';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  vss!: Visite[];
  vs: Visite = new Visite();

  

  constructor(
    private visiteService: VisiteService,
    private router: Router,
    private httpClient: HttpClient /***************/
    ) { }

  ngOnInit(): void {

  }

  visiteNew(form: NgForm) {

    let ff = form.value;

    console.log(ff);

    this.visiteService.addVisite(ff).subscribe(
      (data) => {


        console.log(data);
        
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
   
    this.visiteService.addVisite(this.vs)
      .subscribe(() => {
      });
  }

}
