import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IpServiceService } from '../ip-service.service';
import { ModalComponent } from '../modal/modal.component';
import { UserService } from '../service';
import { User } from '../user';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  focus:any;
  focus1:any;
  focus2:any;
  ipAddress:any;
  IpAddress:any=this.getIp();
  public myForm:UntypedFormGroup|any;
  @Input() user:User={name:'',email:'',phone:'',url:'Western Marina'};
  constructor(private modalService: NgbModal,private http:HttpClient,private userService: UserService,private ipAdd:IpServiceService,private formbuilder:UntypedFormBuilder) { 
this.Createform();
  }

  Createform(){
    this.myForm=this.formbuilder.group({
      name:['',Validators.required],
      email:['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      phone:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    })
   }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
}

  ngOnInit(): void {
  }
  getIp():void{
    this.http.get('https://www.keyonprop.com/api/getIp').subscribe((res:any)=>{
      return this.ipAddress = res.message;  
    });
  }
  OnSave():void{
    this.userService.formSubmit(this.user).subscribe(()=>this.goBack());
  }
  goBack():void{
    window.location.href='/thankyou';
  }
}
