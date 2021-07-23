import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private router : Router,private ApiC:PostService) { }

  ngOnInit() {
  }
   cadastro(){
    let dados = {
        cnome:"ramon de souza 2",
        cemail:"ramon.souza@igtt.com",
        csenha:"111",
        ccpf:"336547891"
      }
      this.ApiC.dadosApi(dados, 'picliente.php').subscribe(async data=>{
        console.log(data)
      })

    
  }

  login(){
    this.router.navigate(["/login"]);
  }
}
