let dineroCofla = prompt("Cofla, Cuando dinero tienes?")
let dineroRoberto = prompt("Roberto, Cuando dinero tienes?")
let dineroPedro = prompt("Pedro, Cuando dinero tienes?")

dineroCofla = parseInt(dineroCofla);

if(dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, Comprate el helado de agua");
    alert("Y te sobra " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, Comprate el helado de crema");
    alert("Y te sobra " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, Comprate el helado de heladix");
    alert("Y te sobra " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, Comprate el helado de heladovich");
    alert("Y te sobra " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, Comprate el helado de helardo");
    alert("Y te sobra " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
    alert("Cofla, Compate el helado de confites o el pote de 1/4 kg");
    alert("Y te sobra " + (dineroCofla - 2.9));
}
else {
    alert("Cofla, Lo siento, no te alcanza para ningun helado");
}

// Roberto
if(dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, Comprate el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, Comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, Comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, Comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, Comprate el helado de helardo");
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto, Compate el helado de confites o el pote de 1/4 kg");
}
else {
    alert("Roberto, Lo siento, no te alcanza para ningun helado");
}

// Pedro
if(dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, Comprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, Comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, Comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, Comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, Comprate el helado de helardo");
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, Compate el helado de confites o el pote de 1/4 kg");
}
else {
    alert("Pedro, Lo siento, no te alcanza para ningun helado");
}
