import { Component } from '@angular/core';
import { PdfProvider } from '../../providers/pdf/pdf';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private _file: File,
              private _file_opener: FileOpener,
              private _pdf: PdfProvider ) {

    this._pdf.getPDFBase64().subscribe( (pdfBase64:any) => {
      fetch('data:application/pdf;base64,' + pdfBase64.data.pdf,
          {
            method: "GET"
          }).then(res => res.blob()).then(blob => {
            this._file.writeFile(this._file.externalApplicationStorageDirectory, 'statement.pdf', blob, { replace: true }).then(res => {
              this._file_opener.open(
                res.toInternalURL(),
                'application/pdf'
              ).then((res) => {

              }).catch(err => {
                console.log(`Open ${err}`)
              });
            }).catch(err => {
                  console.log(`Save ${err}`)     
       });
          }).catch(err => {
                 console.log(`${err}`)
          });
    });

  }

}
