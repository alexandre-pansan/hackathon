import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirect(page):void{
    this.router.navigate([page]);
  }
}
