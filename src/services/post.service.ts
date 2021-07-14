import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class PostService {
server: string= "http://localhost/pasta.php/";
  
constructor(private http: HttpClient) { }
  dadosApi(dados:any, nomeApi: string){
    
  }
}
