import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { ModalComponent } from './modal/modal.component';
declare var gtag:Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Western Marina';
  ipAddress:any;
  constructor(public router:Router,private modalService: NgbModal,private http:HttpClient){
  }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
}
ngOnInit(): void {
 if(performance.navigation.type == 2){
  window.location.reload();
}
this.PostIp();
}
PostIp():void{
  this.http.post('https://www.keyonprop.com/api/postIp','prop_name='+this.title,{
    headers: new HttpHeaders({ 
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
  }) 
  }).subscribe((res:any)=>{
    return this.ipAddress = res.message;  
  });
}
}
