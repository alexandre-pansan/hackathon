import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  placas = [{"id":	1	, "placa": "	PXV-5815	","active":"	1	"},
  {"id":	2	, "placa": "	FMB-2830	","active":"	0	"},
  {"id":	3	, "placa": "	ETS-0990	","active":"	1	"},
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(page, params):void{
    this.router.navigate([page]);
  }
  edit(){
    this.router.navigate(['profile/password-recovery'], { queryParams: { v: 0 } });
  }

}
