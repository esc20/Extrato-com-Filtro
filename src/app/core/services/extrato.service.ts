import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from '../models/transacao.model';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  private readonly _http = inject(HttpClient);
  

  private readonly _jsonURL = 'data/extrato.json'; 

  
  getTransacoes(): Observable<Transacao[]> {
    return this._http.get<Transacao[]>(this._jsonURL);
  }
}
