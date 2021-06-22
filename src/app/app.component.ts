import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  palabra = 'BRASIL';
  palabraOculta = '';

  intentos = 0;
  gano  = false;
  perdio= false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor(){
    /* Va a imprimir en la pantalla  n _ de acuerdo a la cantidad de letras
    que tiene la palabra*/
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra:string) {
    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabraOculta.length; i++) {
      if(this.palabra[i] === letra){
        palabraOcultaArr[i] = letra;
      }
      
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane(){
    const palabraArr  = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if(palabraEvaluar === this.palabra){
      this.gano = true;
    }

    if(this.intentos >=9){
      this.perdio = true;
    }
  }

  existeLetra(letra:string){
      if(this.palabra.indexOf(letra)>=0){
        
      }else{
        this.intentos++;
      }
  }
}
