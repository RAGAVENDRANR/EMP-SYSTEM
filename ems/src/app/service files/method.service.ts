import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodService {
  
  constructor() {}

  difference(a:any, b:any){
    return Math.abs(a - b)
  }
 getDataDiff(startDate:any, endDate:any) {
    var diff = endDate.getTime() - startDate.getTime();
    // var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000));
    var minutes = Math.floor(diff / (60 * 1000)) - ( + (hours * 60));
    var seconds = Math.floor(diff / 1000) - ((hours * 60 * 60) + (minutes * 60));
    return [{  hour: hours, minute: minutes, second: seconds, }];
}
 
};