var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");

var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");

var e1 = document.getElementById("e1");
var e2 = document.getElementById("e2");
var e3 = document.getElementById("e3");
var e4 = document.getElementById("e4");
var e5 = document.getElementById("e5");

var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");

var g1 = document.getElementById("g1");
var g2 = document.getElementById("g2");
var g3 = document.getElementById("g3");
var g4 = document.getElementById("g4");
var g5 = document.getElementById("g5");

var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");
var h5 = document.getElementById("h5");

var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");

// Start positions:

// bead1: 0
// bead2: 105
// bead3: 130
// bead4: 155
// bead5: 180

function oneToggle(bead2, bead3, bead4, bead5) {
	if (bead2.style.top === "105px" || bead2.style.top === ""){
		bead2.style.top = "80px";
	} else {
		bead2.style.top = "105px";
		bead3.style.top = "130px";
		bead4.style.top = "155px";
		bead5.style.top = "180px";
	}
}

function twoToggle(bead2, bead3, bead4, bead5) {
	if (bead3.style.top === "130px" || bead3.style.top === ""){
		bead2.style.top = "80px";
		bead3.style.top = "105px";
	} else {
		bead3.style.top = "130px";
		bead4.style.top = "155px";
		bead5.style.top = "180px";
	}
}

function threeToggle(bead2, bead3, bead4, bead5) {
	if (bead4.style.top === "155px" || bead4.style.top === ""){
		bead2.style.top = "80px";
		bead3.style.top = "105px";
		bead4.style.top = "130px";
	} else {
		bead4.style.top = "155px";
		bead5.style.top = "180px";
	}
}

function fourToggle(bead2, bead3, bead4, bead5) {
	if (bead5.style.top === "180px" || bead5.style.top === ""){
		bead2.style.top = "80px";
		bead3.style.top = "105px";
		bead4.style.top = "130px";
		bead5.style.top = "155px";
	} else {
		bead5.style.top = "180px";
	}
}

function fiveToggle(bead1) {
	if (bead1.style.top === "0px" || bead1.style.top === ""){
		bead1.style.top = "25px";
	} else {
		bead1.style.top = "0px";
	}
}

a1.addEventListener("click", function(){ fiveToggle(a1); }, false);
a2.addEventListener("click", function(){ oneToggle(a2, a3, a4, a5); }, false);
a3.addEventListener("click", function(){ twoToggle(a2, a3, a4, a5); }, false);
a4.addEventListener("click", function(){ threeToggle(a2, a3, a4, a5); }, false);
a5.addEventListener("click", function(){ fourToggle(a2, a3, a4, a5); }, false);

b1.addEventListener("click", function(){ fiveToggle(b1); }, false);
b2.addEventListener("click", function(){ oneToggle(b2, b3, b4, b5); }, false);
b3.addEventListener("click", function(){ twoToggle(b2, b3, b4, b5); }, false);
b4.addEventListener("click", function(){ threeToggle(b2, b3, b4, b5); }, false);
b5.addEventListener("click", function(){ fourToggle(b2, b3, b4, b5); }, false);

c1.addEventListener("click", function(){ fiveToggle(c1); }, false);
c2.addEventListener("click", function(){ oneToggle(c2, c3, c4, c5); }, false);
c3.addEventListener("click", function(){ twoToggle(c2, c3, c4, c5); }, false);
c4.addEventListener("click", function(){ threeToggle(c2, c3, c4, c5); }, false);
c5.addEventListener("click", function(){ fourToggle(c2, c3, c4, c5); }, false);

d1.addEventListener("click", function(){ fiveToggle(d1); }, false);
d2.addEventListener("click", function(){ oneToggle(d2, d3, d4, d5); }, false);
d3.addEventListener("click", function(){ twoToggle(d2, d3, d4, d5); }, false);
d4.addEventListener("click", function(){ threeToggle(d2, d3, d4, d5); }, false);
d5.addEventListener("click", function(){ fourToggle(d2, d3, d4, d5); }, false);

e1.addEventListener("click", function(){ fiveToggle(e1); }, false);
e2.addEventListener("click", function(){ oneToggle(e2, e3, e4, e5); }, false);
e3.addEventListener("click", function(){ twoToggle(e2, e3, e4, e5); }, false);
e4.addEventListener("click", function(){ threeToggle(e2, e3, e4, e5); }, false);
e5.addEventListener("click", function(){ fourToggle(e2, e3, e4, e5); }, false);

f1.addEventListener("click", function(){ fiveToggle(f1); }, false);
f2.addEventListener("click", function(){ oneToggle(f2, f3, f4, f5); }, false);
f3.addEventListener("click", function(){ twoToggle(f2, f3, f4, f5); }, false);
f4.addEventListener("click", function(){ threeToggle(f2, f3, f4, f5); }, false);
f5.addEventListener("click", function(){ fourToggle(f2, f3, f4, f5); }, false);

g1.addEventListener("click", function(){ fiveToggle(g1); }, false);
g2.addEventListener("click", function(){ oneToggle(g2, g3, g4, g5); }, false);
g3.addEventListener("click", function(){ twoToggle(g2, g3, g4, g5); }, false);
g4.addEventListener("click", function(){ threeToggle(g2, g3, g4, g5); }, false);
g5.addEventListener("click", function(){ fourToggle(g2, g3, g4, g5); }, false);

h1.addEventListener("click", function(){ fiveToggle(h1); }, false);
h2.addEventListener("click", function(){ oneToggle(h2, h3, h4, h5); }, false);
h3.addEventListener("click", function(){ twoToggle(h2, h3, h4, h5); }, false);
h4.addEventListener("click", function(){ threeToggle(h2, h3, h4, h5); }, false);
h5.addEventListener("click", function(){ fourToggle(h2, h3, h4, h5); }, false);

i1.addEventListener("click", function(){ fiveToggle(i1); }, false);
i2.addEventListener("click", function(){ oneToggle(i2, i3, i4, i5); }, false);
i3.addEventListener("click", function(){ twoToggle(i2, i3, i4, i5); }, false);
i4.addEventListener("click", function(){ threeToggle(i2, i3, i4, i5); }, false);
i5.addEventListener("click", function(){ fourToggle(i2, i3, i4, i5); }, false);