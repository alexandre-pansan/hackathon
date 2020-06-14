import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage implements OnInit {

  params:String;
  auxiliar = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.params = params.v;
    });
  }

  ngOnInit() {
  }

  nextPage(){
    this.auxiliar = 0;
    if(this.params == '0'){
      this.router.navigate(['profile/password-recovery'], { queryParams: { v: 1 } });
    }else if(this.params == '1'){
      this.router.navigate(['profile/password-recovery'], { queryParams: { v: 2 } });
    }else if(this.params == '2'){
      this.router.navigate(['profile']);
    }
  }
  previousPage(){
    this.auxiliar = 1;
    if(this.params == '3'){
      this.router.navigate(['profile/password-recovery'], { queryParams: { v: 2 } });
    }else if(this.params == '2'){
      this.router.navigate(['profile/password-recovery'], { queryParams: { v: 1 } });
    }else if(this.params == '1'){
      this.router.navigate(['profile/password-recovery'], { queryParams: { v: 0 } });
    }else if(this.params == '0'){
      this.router.navigate(['profile/edit']);
    }
  }
}
