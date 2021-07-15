import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.page.html',
  styleUrls: ['./devs.page.scss'],
})
export class DevsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
devs(){
  this.router.navigate(["/devs"])
}
}
