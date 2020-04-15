import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  // angka1 =(document.getElementById("txt1")as HTMLInputElement).valueAsNumber;
  // angka2 =(document.getElementById("txt2")as HTMLInputElement).valueAsNumber;

  angka1 = parseInt("");
  angka2 = parseInt("");

  angka3 = Math.pow(this.angka1, this.angka2);
  angka4 = this.angka3 % 2;

  ganjil(){
    var hasil = Math.pow(this.angka1, this.angka2);
    alert(hasil);   
  }


  polaB = ["***","****","*****","******","*******"];
  PolaA = ["*****0","****00","***000","**","*"];

  kilkButton(){
    
  }
}
