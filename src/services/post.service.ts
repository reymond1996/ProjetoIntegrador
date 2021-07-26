import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostService {
server: string= "http://localhost/cliente/";
headers: HttpHeaders;  

constructor(public http: HttpClient) { }
cadastro(data){
  return this.http.post('http://localhost/cliente/api-create',data);
}
  dadosApi(dados:any, nomeApi: string){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('Content-type','application/json');
  
    let url = this.server + nomeApi;
    return this.http.post(url,JSON.stringify(dados)).map(res => res);
  }
}

