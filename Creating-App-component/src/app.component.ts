import { Component } from  '@angular/core';

@Component({
   templateUrl:'./src/app.component.html',
    selector: 'my-app'
})
export class AppComponent{
    greet:string;
  
    constructor(){
        this.greet = "Welcome to Angular 2";
    }
    
   
}