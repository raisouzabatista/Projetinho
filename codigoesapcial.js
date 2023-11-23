function Triangular() {

    var ladoTP = parseFloat(document.getElementById("ladoTP").value);
    var alturaTPB = parseFloat(document.getElementById("alturaTPB").value);
    var alturaTP = parseFloat(document.getElementById("alturaTP").value);

    if (ladoTP < 0 || alturaTPB < 0 || alturaTP < 0) {
        alert("Números negativo");
    } else {


        var baseTP = (ladoTP * alturaTPB) / 2;
        var areaTP = baseTP * alturaTP;

        document.getElementById("areaTP").innerText = "O volume desse prisma triangular é: " + areaTP;
    }

}
function Limpar1() {
    document.getElementById("areaTP").innerText = ""
}
function Quadrangular() {

    var ladoQP = parseFloat(document.getElementById("comprimentoQP").value);
    var larguraQP = parseFloat(document.getElementById("larguraQP").value);
    var alturaQP = parseFloat(document.getElementById("alturaQP").value);

    if (ladoQP < 0 || larguraQP < 0 || alturaQP < 0) {
        alert("Números negativos");
    } else {



        var baseQP = (ladoQP * larguraQP);
        var areaQP = baseQP * alturaQP;

        document.getElementById("areaQP").innerText = "O volume desse prisma quadrangular é: " + areaQP;
    }

}
function Limpar2() {
    document.getElementById("areaQP").innerText = ""
}
function Pentagonal() {

    var ladoPP = parseFloat(document.getElementById("ladoPP").value);
    var alturaPP = parseFloat(document.getElementById("alturaPP").value);

    if (ladoPP < 0 || alturaPP < 0) {
        alert("Números negativos ");
    } else {



        var areaPP = 1.72 * (ladoPP * ladoPP) * alturaPP;


        document.getElementById("areaPP").innerText = "O volume desse prisma pentagonal é: " + areaPP;
    }

}
function Limpar3() {
    document.getElementById("areaPP").innerText = ""
}
function Hexagonal() {

    var ladoHP = parseFloat(document.getElementById("ladoHP").value);
    var alturaHP = parseFloat(document.getElementById("alturaHP").value);

    if (ladoHP < 0 || alturaHP < 0) {
        alert("Números negativos");
    } else {



        var areaHP = ((3 * (ladoHP * ladoHP) * Math.sqrt(3)) / 2) * alturaHP;

        var resultadoHP = areaHP.toFixed(2);


        document.getElementById("areaHP").innerText = "O volume desse prisma hexagonal é: " + resultadoHP;
    }

}
function Limpar4() {
    document.getElementById("areaHP").innerText = ""
}
function Cilindro() {

    var raioCL = parseFloat(document.getElementById("raioCL").value);
    var alturaCL = parseFloat(document.getElementById("alturaCL").value);

    if (raioCL < 0 || alturaCL < 0) {
        alert("Números negativos");
    } else {



        var areaCL = 3.14 * (raioCL * raioCL) * alturaCL;

        var resultadoCL = areaCL.toFixed(2);


        document.getElementById("areaCL").innerText = "O volume desse cilindro é: " + resultadoCL;
    }

}
function Limpar5() {
    document.getElementById("areaCL").innerText = ""
}
function Cone() {

    var raioC = parseFloat(document.getElementById("raioC").value);
    var alturaC = parseFloat(document.getElementById("alturaC").value);
    if (raioC < 0 || alturaC < 0) {
        alert("Números negativos");
    } else {



        var areaC = (3.14 * (raioC * raioC) * alturaC) * 1 / 3;

        var resultadoC = areaC.toFixed(2);


        document.getElementById("areaC").innerText = "O volume desse cilindro é: " + resultadoC;
    }

}
function Limpar6() {
    document.getElementById("areaC").innerText = ""
}
function Esfera() {

    var raioE = parseFloat(document.getElementById("raioE").value);
    if (raioE < 0) {
        alert("Número negativo");
    } else {



        var areaE = (4 * 3.14 * (raioE * raioE * raioE)) / 3;

        var resultadoE = areaE.toFixed(2);


        document.getElementById("areaE").innerText = "O volume dessa esfera é: " + resultadoE;
    }

}
function Limpar7() {
    document.getElementById("areaE").innerText = ""
}

function Triangular_Piramide() {

    var ladoPR = parseFloat(document.getElementById("ladoPR").value);
    var alturaPRB = parseFloat(document.getElementById("alturaPRB").value);
    var alturaPR = parseFloat(document.getElementById("alturaPR").value);

    if (ladoPR < 0 || alturaPR < 0 || alturaPRB < 0) {
        alert("Números negativos");
    } else {



        var basePR = (ladoPR * alturaPRB) / 2;
        var areaPR = (basePR * alturaPR) / 3;
        var resultadoPR = areaPR.toFixed(2);

        document.getElementById("areaPR").innerText = "O volume dessa piramide triangular é: " + resultadoPR;
    }

}
function Limpar8() {
    document.getElementById("areaPR").innerText = ""
} function Retangular_Piramide() {

    var ladoRP = parseFloat(document.getElementById("comprimentoRP").value);
    var larguraRP = parseFloat(document.getElementById("larguraRP").value);
    var alturaRP = parseFloat(document.getElementById("alturaRP").value);

    if (ladoRP < 0 || larguraRP < 0 || alturaRP < 0) {
        alert("Números negativos");
    } else {



        var baseRP = (ladoRP * larguraRP);
        var areaRP = (baseRP * alturaRP) / 3;
        var resultadoRP = areaRP.toFixed(2)

        document.getElementById("areaRP").innerText = "O volume dessa piramide retangular é: " + resultadoRP;
    }

}
function Limpar9() {
    document.getElementById("areaRP").innerText = ""
}
function Pentagonal_Piramide() {

    var ladoPPP = parseFloat(document.getElementById("ladoPPP").value);
    var alturaPPP = parseFloat(document.getElementById("alturaPPP").value);

    if (ladoPPP < 0 || alturaPPP < 0) {
        alert("Números negativos")
    } else {



        var areaPPP = (1.72 * (ladoPPP * ladoPPP) * alturaPPP) / 3;
        var resultadoPPP = areaPPP.toFixed(2);


        document.getElementById("areaPPP").innerText = "O volume dessa piramide pentagonal é: " + resultadoPPP;
    }

}
function Limpar10() {
    document.getElementById("areaPPP").innerText = ""
}
function Tetraedro() {

    var ladoPT = parseFloat(document.getElementById("ladoPT").value);

    if (ladoPT < 0) {
        alert("Número negativo")
    } else {


        var areaPT = ((ladoPT * ladoPT * ladoPT) * Math.sqrt(2)) / 12;

        var resultadoPT = areaPT.toFixed(2);


        document.getElementById("areaPT").innerText = "O volume desse tetraedro regular é: " + resultadoPT;
    }

}
function Limpar11() {
    document.getElementById("areaPT").innerText = ""
}