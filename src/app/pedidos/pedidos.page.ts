import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  Pedidos(){
    this.router.navigate(["/Pedidos"]);
  }

}
