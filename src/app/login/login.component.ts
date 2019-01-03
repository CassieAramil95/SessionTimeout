import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
   }

   loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
 
    
  	if(username == 'username' && password == 'pass') {
      this.router.navigate(['/home']);
      return true;
    } 
  
    else {
      alert('Credentials are not valid.');
      return false;
    }
  }

  ngOnInit() {

  }

}
