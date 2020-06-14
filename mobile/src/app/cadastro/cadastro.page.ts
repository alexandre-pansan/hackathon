import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { IForm } from './forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  //formValue : IForm;
  cadastros(form: NgForm){
    console.log(form.value)
  }
  validate(form: NgForm){
    let values = form.value;

    let placa = values.placa;
    let telefone = values.telefone;
    let nome = values.nome;
    let cpf = values.cpf;
    let senha = values.senha;

    form.controls['placa'].setValue(values.placa.toUpperCase())
  }
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
      this.router.navigate(['registration'], { queryParams: { v: 1 } });
    }else if(this.params == '1'){
      this.router.navigate(['registration'], { queryParams: { v: 2 } });
    }else if(this.params == '2'){
      this.router.navigate(['registration'], { queryParams: { v: 3 } });
    }else if(this.params == '3'){
      this.router.navigate(['registration'], { queryParams: { v: 4 } });
    }else if(this.params == '4'){
      this.router.navigate(['login']);
    }
  }
  previousPage(){
    this.auxiliar = 1;
    if(this.params == '3'){
      this.router.navigate(['registration'], { queryParams: { v: 2 } });
    }else if(this.params == '2'){
      this.router.navigate(['registration'], { queryParams: { v: 1 } });
    }else if(this.params == '1'){
      this.router.navigate(['registration'], { queryParams: { v: 0 } });
    }else if(this.params == '0'){
      this.router.navigate(['onboarding']);
    }
  }
}
