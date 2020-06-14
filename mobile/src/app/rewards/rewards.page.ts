import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  constructor(private router: Router) { }
  items = [{"id":	0	, "nome": "	item1	","descricao":"	descricao 1	","codigo":"	1058782138	","pts":"	846	","img":"	assets/pneu.jpg	","retrieved":"	0	"},
  {"id":	1	, "nome": "	item2	","descricao":"	descricao 2	","codigo":"	7134643554	","pts":"	646	","img":"	assets/pneu.jpg	","retrieved":"	0	"},
  {"id":	2	, "nome": "	item3	","descricao":"	descricao 3	","codigo":"	4920203434	","pts":"	54	","img":"	assets/pneu.jpg	","retrieved":"	0	"},
  {"id":	3	, "nome": "	item4	","descricao":"	descricao 4	","codigo":"	3188360202	","pts":"	643	","img":"	assets/pneu.jpg	","retrieved":"	0	"},
  {"id":	4	, "nome": "	item5	","descricao":"	descricao 5	","codigo":"	8204202644	","pts":"	158	","img":"	assets/pneu.jpg	","retrieved":"	0	"},
  {"id":	5	, "nome": "	item6	","descricao":"	descricao 6	","codigo":"	2963164601	","pts":"	383	","img":"	assets/pneu.jpg	","retrieved":"	0	"},
  {"id":	6	, "nome": "	item7	","descricao":"	descricao 7	","codigo":"	9008082576	","pts":"	99	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	7	, "nome": "	item8	","descricao":"	descricao 8	","codigo":"	55575066	","pts":"	205	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	8	, "nome": "	item9	","descricao":"	descricao 9	","codigo":"	796350613	","pts":"	252	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	9	, "nome": "	item10	","descricao":"	descricao 10	","codigo":"	917855306	","pts":"	939	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	10	, "nome": "	item11	","descricao":"	descricao 11	","codigo":"	3523344384	","pts":"	212	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	11	, "nome": "	item12	","descricao":"	descricao 12	","codigo":"	4111280139	","pts":"	17	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	12	, "nome": "	item13	","descricao":"	descricao 13	","codigo":"	1227698912	","pts":"	231	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	13	, "nome": "	item14	","descricao":"	descricao 14	","codigo":"	7106793206	","pts":"	220	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	14	, "nome": "	item15	","descricao":"	descricao 15	","codigo":"	4308510695	","pts":"	493	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	15	, "nome": "	item16	","descricao":"	descricao 16	","codigo":"	1154429340	","pts":"	4	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	16	, "nome": "	item17	","descricao":"	descricao 17	","codigo":"	3685386341	","pts":"	237	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	17	, "nome": "	item18	","descricao":"	descricao 18	","codigo":"	5296086550	","pts":"	535	","img":"	assets/pneu.jpg	","retrieved":"	1	"},
  {"id":	18	, "nome": "	item19	","descricao":"	descricao 19	","codigo":"	128356637	","pts":"	77	","img":"	assets/pneu.jpg	","retrieved":"	1	"},];
  ngOnInit() {
  }

  openReward(id):void{
    this.router.navigate(['reward'], { queryParams: { v: id } });
  }
  redirect(page):void{
    this.router.navigate([page]);
  }

}
