
function Quadrado(){

    var lado = parseFloat(document.getElementById('ladoQ').value);

    if( lado < 0){
        alert("Número negativo");
    } else{

  
    var areaQ = lado *lado; 

    document.getElementById("areaQ").innerText = "A área do quadrado é: "+ areaQ; 
     } 
}
function Limpar1(){
    document.getElementById("areaQ").innerText = " "; 

}
function Circulo(){

    var raio = parseFloat(document.getElementById('raio').value);

    if(raio < 0){
        alert("Número negativo")
    } else{

   
    var areaC = 3.14 * (raio *raio);
    document.getElementById("areaC").innerText = "A área do circulo é: "+ areaC; 
     }
}
function Limpar3(){
    document.getElementById("areaC").innerText = " "; 

}
function Losango(){
    var diagonalM = parseFloat(document.getElementById('diagonalM').value);
    var diagonalMe = parseFloat(document.getElementById('diagonalMe').value);
if(diagonalM < 0 || diagonalMe < 0){
    alert("Números negativos")
} else {



    var areaL = (diagonalM * diagonalMe)/2; 
    document.getElementById("areaL").innerText = "A área do losango é: "+ areaL; 
   } 
}
function Limpar5(){
    document.getElementById("areaL").innerText = " "; 

}
function Paralelogramo(){
    var alturaP = parseFloat(document.getElementById('alturaP').value);
    var baseP = parseFloat(document.getElementById('baseP').value);
    if(alturaP < 0 ||baseP < 0){
        alert("Números negativos");
    } else{

   


    var areaP = (alturaP * baseP)/2; 
    document.getElementById("areaP").innerText = "A área do paralelogramo é: "+ areaP; 
     }
}
function Limpar6(){
    document.getElementById("areaP").innerText = " "; 

}
function Retangulo(){
    var ladoR = parseFloat(document.getElementById('ladoR').value);
    var alturaR = parseFloat(document.getElementById('alturaR').value);

    if( ladoR < 0 ||alturaR < 0){
        alert("Números negativos"); 
    } else{

  


    var areaRet = ladoR * alturaR; 
    document.getElementById("areaRet").innerText = "A área do retângulo é: "+ areaRet; 
      }
}
function Limpar4(){
    document.getElementById("areaRet").innerText = " "; 

}
function Trapezio(){
    var baseM = parseFloat(document.getElementById('baseM').value);
    var baseMe = parseFloat(document.getElementById('baseMe').value);
    var alturaTra = parseFloat(document.getElementById('alturaTra').value);
if(baseM < 0 || baseMe < 0 || alturaTra < 0){
    alert("Números negativos");
} else{

    var areaTra = ((baseM + baseMe)* alturaTra)/2; 
    document.getElementById("areaTra").innerText = "A área do trapézio é: "+ areaTra; 
}
    
}
function Limpar7(){
    document.getElementById("areaTra").innerText = " "; 

}
function Triangulo(){

    var altura = parseFloat(document.getElementById('alturaT').value);
    var base = parseFloat(document.getElementById('baseT').value);

    if(altura < 0 ||base < 0){
        alert("Números negativos"); 
    
    } else{

 

    var areaT = (altura *base)/2 ; 

    document.getElementById("areaTri").innerText = "A área do triângulo é: "+ areaT; 
       }
}
function Limpar2(){
    document.getElementById("areaTri").innerText = " "; 

}