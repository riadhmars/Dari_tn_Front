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

  Visite: Visite = new Visite();
  submitted = false;

  

  constructor(
    private visiteService: VisiteService,
    private router: Router,
    private httpClient: HttpClient /***************/
    ) { }

  ngOnInit(): void {

  }

  
    newVisite(): void {
      this.submitted = false;
      this.Visite = new Visite();
    }
  
    save() {
      this.visiteService
      .createVisite(this.Visite).subscribe(data => {
        console.log(data)
        this.Visite = new Visite();
      }, 
      error => console.log(error));
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
    deleteVisite(visite: object) {  
      this.visiteService.deleteVisite(visite)  
        .subscribe(  
          data => {  
            console.log(data);  
            this.Visite = new Visite();
          }, 
          error => console.log(error));
        }
        reloadCurrentPage() {
          window.location.reload();
         }   
    }  
    
  

  

