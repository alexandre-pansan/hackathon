import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  
})
export class SplashScreenPage implements OnInit {

  constructor(private router: Router) { }
  phrase: string;

  ngOnInit() {
    this.phrase = this.getSysplayPhrase(this.getRandomNumberBetween(1,5)) 
    setTimeout(() => {
      this.router.navigate(['onboarding']);
  }, 5000);  //5s
    
  }
  getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  getSysplayPhrase(id){
    if(id == 1){
      return "Quanto mais roda mais ganha";
    }
    if(id == 2){
      return "A saúde do caminhoneiro em primeiro lugar";
    }
    if(id == 3){
      return "Onde o seu bem estar é nosso objetivo";
    }
    if(id == 4){
      return "O caminhoneiro em primeiro lugar";
    }
    if(id == 5){
      return "Um estrada de benefícios";
    }
  }


}
