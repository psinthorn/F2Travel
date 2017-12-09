import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ValidateService } from 'app/services/validate.service';
import { validateConfig } from '@angular/router/src/config';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router
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
      this.flashMessages.show("Please fill in all field", {cssClass: 'alert-danger', timeout: 3000});
      return true;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log('Please fill valid email address');
      this.flashMessages.show('Invalid email address', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.registerUser(user)
      .subscribe(data =>{
        if(data.success){
          this.flashMessages.show('Now you are Registered and can login', {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['/login']);
        }else{
          this.flashMessages.show('Can not register', {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/register']);
        }
      });

  }

}
