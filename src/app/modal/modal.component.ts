import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { UserService } from '../service';
import {Location} from '@angular/common';
import { IpServiceService } from '../ip-service.service';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
declare let gtag: Function;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  focus:any;
  focus1:any;
  focus2:any;
  ipAddress:any;
  IpAddress:any=this.getIp();
  myForm:UntypedFormGroup|any;
  @Input() user:User={name:'',email:'',phone:'', url:'Western Marina'};
  constructor( private http:HttpClient,private userService: UserService,public activeModal: NgbActiveModal,public location:Location,private ipAdd:IpServiceService,private formbuilder:UntypedFormBuilder) {
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
    url:'Western Marina'
  })
 }
  
  ngOnInit(): void {
    this.getIp();
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
        input_group[i].children[0].addEventListener('focus', function (){
            input_group[i].classList.add('input-group-focus');
        });
        input_group[i].children[0].addEventListener('blur', function (){
            input_group[i].classList.remove('input-group-focus');
        });
    }
  
   
  }
  
  getIp():void{
    this.http.get('https://www.keyonprop.com/api/getIp').subscribe((res:any)=>{
      return this.ipAddress = res.message;  
    });
  }
  
  
  OnSave():void{
    
    this.userService.formSubmit(this.user).subscribe((res:any)=>
    this.goBack()
    );
  }
  goBack():void{
    window.location.href='/thankyou';
  }

}
