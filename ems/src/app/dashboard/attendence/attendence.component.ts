import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MethodService } from 'src/app/service files/method.service';


@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

clockHandle1: any;
clockHandle2: any;

clock1:any
clock2:any
model1: any;
model2: any;
btn1=true
btn2=true
constructor(public datepipe: DatePipe,public m:MethodService) { }

ngOnInit(): void {}

checkin(){
    this.clock1 = new Date()
    this.model1=this.datepipe.transform(this.clock1,"hh : mm : ss")
    console.log("Checked in success",this.model1)
    alert("Checked in success " )
    this.btn1=false
  }

  checkout(){
    this.clock2 = new Date()
    this.model2=this.datepipe.transform(this.clock2,"hh : mm : ss")
    console.log("Checkout done",this.model2)
    alert("Checkout done")
    this.workhr()
    this.btn2=false
  }

  diff:any
  
  workhr(){
   this.diff = this.m.getDataDiff(this.clock1,this.clock2),console.log("Hello" , this.diff)
  }
  cleardata(){
    this.clock1=null
    this.clock2=null
    this.model1=null
    this.model2=null
    this.diff=null
    this.btn1=true
    this.btn2=true
  } 
}
