import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

nroIzq : number;
nroDer : number;
dadoIzq : string;
dadoDer : string;
result : boolean;

constructor(){
  this.nroDer=0;
  this.nroIzq=0;
  this.dadoDer = "";
  this.dadoIzq = "";
  this.result = false;
}

TirarDados() : void{
this.nroDer = Math.round( Math.random() * 5) + 1 ;
this.nroIzq = Math.round( Math.random() * 5) + 1 ;

this.dadoIzq = "../assets/img/dice"+ this.nroIzq +".png";
this.dadoDer = "../assets/img/dice"+ this.nroDer +".png";
this.result = this.validarParidad(this.nroDer, this.nroIzq);

}
validarParidad(derecha : number , izquierda : number) : boolean
{
  if(derecha === izquierda)
      return true;
  return false;
}

}
