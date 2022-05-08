import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Subscription } from '../entities/Subsription/subscription.component';
import { SubscriptionService } from '../services/subscriptionService/subscription.service';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BehaviorSubject } from 'rxjs';
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Subscribe } from '../entities/Subsribe/subscribe.component';
import { HttpClient } from '@angular/common/http';
import { NumberValidators } from './numverValidator.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [NgbModalConfig, NgbModal, DatePipe]

})
export class PageComponent implements OnInit , OnChanges{
  addSubForm!: FormGroup;
  isOpen : boolean = false;
  _subscriptions: Subscription[] = []; 
  _subscriptionsAll: Subscription[] = []; 
  subscribe!: Subscribe;
  validatingForm: FormGroup;
  interval :any
  isLoaded$ = new BehaviorSubject<boolean>(true);
  title!: string;
  price!: number;
  id!: number;
  dateD!: string | null;
  myDate = new Date()  ;
  closeResult! : string ;
  modalReference! : NgbModalRef;
  isBought : boolean = false; 
  searchItem: any = ''
  e : any ;
  show = true ;
  selectedFile! : File
  loading: boolean = false; // Flag variable
  baseApiUrl = "https://file.io" ;
  shortLink: string = "";
  url : string |  ArrayBuffer | null = ''
  currentIndex = 3;


  constructor(private _fb: FormBuilder,private datePipe: DatePipe, private subscriptionService: SubscriptionService, private cd: ChangeDetectorRef,
    config: NgbModalConfig, private modalService: NgbModal, private http: HttpClient) {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
    config.backdrop = 'static';
    config.keyboard = false;
   
  }
  validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required' },
      { type: 'minlength', message: 'Title must be at least 5 characters long' },
      { type: 'maxlength', message: 'Title cannot be more than 25 characters long' },
    ],
    'description': [
      { type: 'required', message: 'Description is required' },
      { type: 'minlength', message: 'Description must be at least 5 characters long' },
    ],
    'price': [
      { type: 'required', message: 'Price is required' },
    ],
  }
  ngOnInit(): void {
    this.addSubForm= this._fb.group({  
      title: ['',  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],  
      description: ['',  Validators.compose([Validators.required, Validators.minLength(5)])]  ,
      price: [0,Validators.compose([Validators.required, NumberValidators.isNumberCheck])],
      urLImg : ""
  });  
    this.subscriptionService.findAll().subscribe(data => {
      this._subscriptionsAll = data;
      this._subscriptions = this._subscriptionsAll.slice(0, this.currentIndex)
      console.log(this._subscriptionsAll)
    console.log(this._subscriptions)

    });

  }

  addSub(e: any) {
    console.log(e)
     this.subscriptionService.save(e).subscribe(data =>{ console.log(data)
     })
     this.reload()
     this.addAlert()
     
  }
  deleteAlert() {
    Swal.fire('Property deleted!');
  }
  addAlert() {
    Swal.fire('Property added!');
  }
  buyAlert() {
    Swal.fire('Property bought!');
  }
  openD(deleteC: any,id:number) {
    this.id = id
    this.modalReference = this.modalService.open(deleteC,  { centered: true })
    this.modalReference.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      }
    )

  }

  loadMore(){
    this.currentIndex += 10;
    this._subscriptions = this._subscriptions = this._subscriptionsAll.slice(0, this.currentIndex)

    this.cd.detectChanges();
  }
  reload() {
    console.log('reloading')
    this.show = false;
    setTimeout(() =>{ this.show = true; this.refreshData()});
  }
  open(content: any, title: string, price: number, id:number) {
    this.title = title;
    this.price = price;
    this.id = id
    this.modalReference = this.modalService.open(content,  { centered: true })
    this.modalReference.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      }
    )

  }
  buySub() {
      this.dateD = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      console.log(this.myDate)
      this.e = {
      subscription : {idSub : this.id},
      dateD : this.dateD ,
      paid : true 
    } 
    this.subscriptionService.buySubscription(this.e).subscribe(data => {
      this.isBought = true;
      this.subscribe = data;
    
    });
    this.closeModal()
    this.buyAlert()
  }
  onFileChanged(event : any) {
    this.selectedFile = event.target.files[0]
    var reader = new FileReader();
		reader.readAsDataURL(this.selectedFile);
    this.url = reader.result; 
/*
    reader.onload = (_event) => {
		}
    console.log(this.url)*/
  }
  
  refreshData(){
    this.isLoaded$.next(true);
    this.subscriptionService.findAll().subscribe(data => {
      this._subscriptions = data;
      console.log(this._subscriptions)
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("change detected")
    this.isLoaded$.next(false);
    this.cd.detectChanges();
    this.refreshData()
    this.isLoaded$.next(true);
  }
  showSub() {
    this.isOpen = true ;
    
  }
  deleteSub() {
    this.subscriptionService.deleteSubscription(this.id).subscribe(data =>{
      this.modalReference.close();
      this.reload();
      this.deleteAlert()

  })
  }
  closeModal() {
    this.modalReference.close();
  }
  
  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

}
