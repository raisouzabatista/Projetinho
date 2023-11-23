function Simples() {

    var juros = parseFloat(document.getElementById('juros').value);
    var capital = parseFloat(document.getElementById('capital').value);
    var tempo = parseFloat(document.getElementById('tempo').value);

    if (juros < 0 || capital < 0 || tempo < 0) {
        alert("Números negativos")
    } else {

        var jurosC = juros / 100;
        var calcular = capital * (1 + jurosC * tempo)
        var resul = calcular.toFixed(2)
        document.getElementById("area1").innerText = "O montante adquirido durante a operação a juros simples foi: " + resul;

    }
}
function Limpar1() {
    document.getElementById("area1").innerText = "";
}
function Compostos() {
    var juros2 = parseFloat(document.getElementById('juros2').value);
    var capital2 = parseFloat(document.getElementById('capital2').value);
    var tempo2 = parseFloat(document.getElementById('tempo2').value);

    if (juros2 < 0 || capital2 < 0 || tempo2 < 0) {
        alert("Números negativos");
    } else {



        var jurosC2 = juros2 / 100;

        var calcular2 = capital2 * Math.pow((1 + jurosC2), tempo2);

        var resul2 = calcular2.toFixed(2);
        document.getElementById("area2").innerText = "O montante adquirido durante a operação a juros compostos foi: " + resul2;
    }
}

function Limpar2() {
    document.getElementById("area2").innerText = "";
}