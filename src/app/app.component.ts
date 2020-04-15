import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


  // angka1 = parseInt("");
  // angka2 = parseInt("");
  angka1 : number;
  angka2 : number;
  hasil : number;
  cek : boolean = true;

  // angka3 = Math.pow(this.angka1, this.angka2);
  // angka4 = this.angka3 % 2;

  // ganjil(){
  //   var hasil = Math.pow(this.angka1, this.angka2);
  //   alert(hasil);   
  // }


  polaB = ["***","****","*****","******","*******"];
  PolaA = ["*****0","****00","***000","**","*"];
  
  KlikButton()
  {
    this.hasil = 1;
    this.angka1 = parseInt((document.getElementById("a")as HTMLInputElement).value);
    this.angka2 = parseInt((document.getElementById("b")as HTMLInputElement).value);
    
    this.hasil = Math.pow(this.angka1,this.angka2);

    if(this.hasil % 2 == 0)
    {
      this.cek = false;
    }
  }
}
