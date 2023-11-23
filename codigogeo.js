var somaTotal = 0;

function CalcularArea(){
    var xa = parseFloat(document.getElementById('Xm').value);
    var ya = parseFloat(document.getElementById('Ym').value);
    var xb = parseFloat(document.getElementById('Xn').value);
    var yb = parseFloat(document.getElementById('Yn').value);
    var xc = parseFloat(document.getElementById('Xp').value);
    var yc = parseFloat(document.getElementById('Yp').value);

    var area1 = calcularAreaTriangulo(xa, ya, xb, yb, xc, yc); 

    if(area1 == 0){
        alert("Não foi possível verificar");
    } else{
        somaTotal += area1; // Adiciona a área ao total
        document.getElementById("area2").innerText = "A área formada pelos pontos até agora dão: "+somaTotal+ " m²";
    }
}

function AdicionarMais(){
    CalcularArea(); // Chama a função CalcularArea para atualizar a somaTotal
}

function calcularAreaTriangulo(x1, y1, x2, y2, x3, y3) {
    return Math.abs((1 / 2) * ((x1 * y2 + x2 * y3 + x3 * y1) - (y1 * x2 + y2 * x3 + y3 * x1)));
}

function Limpar2() {
    somaTotal = 0; // Reseta a somaTotal para 0
    document.getElementById("area2").innerText = " ";
}

function Limpar1() {
  var x = document.getElementById("area1").innerText = " ";

}

function DistanciaPontos(){
    var xa = parseFloat(document.getElementById('Xm1').value);
    var ya = parseFloat(document.getElementById('Ym1').value);
    var xb = parseFloat(document.getElementById('Xn1').value);
    var yb = parseFloat(document.getElementById('Yn1').value);

    var resultado = Math.sqrt((xa - xb)*(xa - xb)+ (ya - yb)*(ya -yb)).toFixed(2); 

    document.getElementById("area1").innerText = resultado +" U.m";
}