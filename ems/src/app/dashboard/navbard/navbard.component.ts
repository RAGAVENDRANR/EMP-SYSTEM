import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbard',
  templateUrl: './navbard.component.html',
  styleUrls: ['./navbard.component.css']
})
export class NavbardComponent implements OnInit {
  clock=""
  clockHandle;

  constructor(private router:Router) { 
    this.clockHandle = setInterval(()=>{
      this.clock = new Date().toLocaleString();
    },1000);
  }

  ngOnInit(): void {
  }
  Profile(){this.router.navigate(['/dashboard/profile'])}
  Noticeboard(){ this.router.navigate(['/dashboard/noticeboard'])}
  Attendence(){ this.router.navigate(['/dashboard/attendence'])}
  Timesheet(){ this.router.navigate(['/dashboard/timesheet'])}
  Support(){ this.router.navigate(['/dashboard/support'])}
  Contact(){ this.router.navigate(['/dashboard/contact'])}
  logout(){ this.router.navigate(['/auth/login'])}
}
