import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.page.html',
  styleUrls: ['./parceiros.page.scss'],
})
export class ParceirosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  parceiros(){
    this.router.navigate(["/parceiros"])
  }

}
