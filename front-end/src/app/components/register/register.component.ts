import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ValidateService } from 'app/services/validate.service';
import { validateConfig } from '@angular/router/src/config';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    firstName: String;
    lastName: String;
    email: String;
    password: String;
  

  constructor(
    private http: Http,
    private validateService: ValidateService 
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }

    console.log(user);

    if(!this.validateService.validateRegister(user)){
      console.log("All fill is required");
      return true;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log('Please fill valid email address');
      return false;
    }
  }

}
