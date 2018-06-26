import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL_SERVICE = `https://qa-server.kentaurus.com.mx/factura/pdf/3`;
const TOKEN = `9fe86c0b3e6e59ac1232c57c9f162c95b039ffb8`;

@Injectable()
export class PdfProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello PdfProvider Provider');
  }

  getPDFBase64(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':TOKEN
      })
    };
    return this._http.get( URL_SERVICE, httpOptions );
  }

}
