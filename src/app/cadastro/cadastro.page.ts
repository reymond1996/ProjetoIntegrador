import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
email: string;
usuario:string;
senha:string
confirmaSenha:string;
  constructor(private router : Router,private ApiC:PostService,public _postService: PostService) { }

  ngOnInit() {
  }
   cadastro(){
     let data ={
  email: this.email,
  usuario: this.usuario,
  senha: this.senha,
  confirmaSenha: this.confirmaSenha,
     } 
     this._postService.cadastro(data).subscribe((res:any)=>{
       console.log("SUCCESS ===",res);
     },(error:any)=>{
       console.log("ERROR ===",error)
     })

     }
      //let dados = {
      //  cnome:"ramon de souza 2",
        //cemail:"ramon.souza@igtt.com",
        //csenha:"111",
        //ccpf:"336547891"
      //}
      //this.ApiC.dadosApi(dados, 'picliente.php').subscribe(async data=>{
        //console.log(data)
      //})

    
  //}

  //login(){
    //this.router.navigate(["/login"]);
  //}
//}
    }
  