import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostService {
server: string= "http://localhost/cliente/";
  
constructor(private http: HttpClient) { }
  dadosApi(dados:any, nomeApi: string){
    const httpOptions = {
      headers.append('Access-Control-Allow-Headers', 'Content-Type')
      headers.append('Access-Control-Allow-Methods', 'GET')
      headers.append('Access-Control-Allow-Origin', '*')
      headers: new HttpHeaders({'Content-Type':'aplication/json'})
    }
    let url = this.server + nomeApi;
    return this.http.post(url,JSON.stringify(dados),httpOptions).map(res => res);
  }
}

