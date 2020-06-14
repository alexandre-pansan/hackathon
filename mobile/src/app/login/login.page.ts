import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login(form: NgForm) {
    let values = form.value;

    //console.log(values);

    if(values.nome == '12345678912' && values.password == '123456'){
      this.router.navigate(['rewards']);
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }


  redirect(page:string):void{
    this.router.navigate([page], { queryParams: { v: 0 } });
  }
}
