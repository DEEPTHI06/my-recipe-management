
import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    title = 'Welcome to recipe management';
    fullImagePath: string;
    username : string ;
    password : string ; 

    constructor(private router: Router) {
        this.fullImagePath = '/assets/images/recipe_manage.jpg'
    }

login(){
console.log('username is',this.username);
console.log('password is',this.password);
if ( this.username === 'Deepthi' && this.password === 'test123' )
{
   // this.router.navigate(['recipes']);
}
};

}





