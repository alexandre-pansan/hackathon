import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userName:string = "Cilada Bino";
  userPlaca:string = "PXV-5815";
  userPtos:number = 1258;

  constructor(private router: Router) { }

  itens = [{"id":	1	, "nome": "	item1	","descricao":"	descricao 1	","codigo":"	3913518017	","retrieved":"	0	"},
  {"id":	2	, "nome": "	item2	","descricao":"	descricao 2	","codigo":"	945658489	","retrieved":"	0	"},
  {"id":	3	, "nome": "	item3	","descricao":"	descricao 3	","codigo":"	7020930167	","retrieved":"	0	"},
  {"id":	4	, "nome": "	item4	","descricao":"	descricao 4	","codigo":"	4709474445	","retrieved":"	0	"},
  {"id":	5	, "nome": "	item5	","descricao":"	descricao 5	","codigo":"	8084513740	","retrieved":"	0	"},
  {"id":	6	, "nome": "	item6	","descricao":"	descricao 6	","codigo":"	3465432841	","retrieved":"	0	"},
  {"id":	7	, "nome": "	item7	","descricao":"	descricao 7	","codigo":"	370221043	","retrieved":"	1	"},
  {"id":	8	, "nome": "	item8	","descricao":"	descricao 8	","codigo":"	1780698752	","retrieved":"	1	"},
  {"id":	9	, "nome": "	item9	","descricao":"	descricao 9	","codigo":"	8728511185	","retrieved":"	1	"},
  {"id":	10	, "nome": "	item10	","descricao":"	descricao 10	","codigo":"	2873062730	","retrieved":"	1	"},
  {"id":	11	, "nome": "	item11	","descricao":"	descricao 11	","codigo":"	3015916396	","retrieved":"	1	"},
  {"id":	12	, "nome": "	item12	","descricao":"	descricao 12	","codigo":"	8665511566	","retrieved":"	1	"},
  {"id":	13	, "nome": "	item13	","descricao":"	descricao 13	","codigo":"	3740023306	","retrieved":"	1	"},
  {"id":	14	, "nome": "	item14	","descricao":"	descricao 14	","codigo":"	7928931937	","retrieved":"	1	"},
  {"id":	15	, "nome": "	item15	","descricao":"	descricao 15	","codigo":"	2442907148	","retrieved":"	1	"},
  {"id":	16	, "nome": "	item16	","descricao":"	descricao 16	","codigo":"	3966643699	","retrieved":"	1	"},
  {"id":	17	, "nome": "	item17	","descricao":"	descricao 17	","codigo":"	7809834590	","retrieved":"	1	"},
  {"id":	18	, "nome": "	item18	","descricao":"	descricao 18	","codigo":"	5582822905	","retrieved":"	1	"},
  {"id":	19	, "nome": "	item19	","descricao":"	descricao 19	","codigo":"	7306051157	","retrieved":"	1	"},
  ];
  ngOnInit() {
  }
  redirect(page):void{
    this.router.navigate([page]);
  }
}
