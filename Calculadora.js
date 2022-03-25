class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        if(num2 !==0){
            return num1 / num2;
        }else{
            return 'Divided by zero';
        }
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
    
    potencia(num1,num2){
        return Math.pow(num1,num2);
    }

    raiz(num1,num2){
        return Math.sqrt(num1);
    }

    // factorial de un numero

  facto(num){
      if(num < 0) return;

      if(num === 0) return 1;

      return num * this.facto(num-1);
  }

   log(num1,num2){
       return  Math.log10(num1);
   }
} 




const calculadora = new Calculadora();
console.log(calculadora.facto(5));

console.log(Math.log10(100));