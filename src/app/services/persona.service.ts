import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
_url = 'https://apidev.heritagetextil.com/api/departamentos/listar-departamentos'
  constructor(
    private htttp :HttpClient
  ) { 
    console.log ('servicio persona')
  }
  getPersonas(){
    let header = new HttpHeaders().set('type-content', 'aplication/json')
      
    return this.htttp.get(this._url,{ headers:header});

  }

  


}
