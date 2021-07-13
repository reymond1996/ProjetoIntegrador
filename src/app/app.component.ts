import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'People' },
    { title: 'Pedidos', url: '/folder/Pedidos', icon: 'bag-check' },
    { title: 'Cliente', url: '/folder/Clientes', icon: 'body' },
    { title: 'Devs', url: '/folder/Devs', icon: 'heart' },
    { title: 'Devs', url: '/cadastrar', icon: 'heart' },
  
    
  ];
 
}
