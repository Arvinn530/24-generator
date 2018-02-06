var operator = [["+", "-"], ["*", "/"]];
var a, b, c, d;
var lst = [
	["abcd", "acbd", "adbc", "bcad", "bdac", "cdab"], 
	["abcd", "adcb", "bdac", "bdca"], 
	["abcd", "abdc", "acbd", "acdb", "adcb", "adbc", "bcad", "bcda", "bdac", "bdca", "cdab", "cdba"]
];
var result = 2048;
var outputObject = document.getElementsByClassName("output")[0];
var execute = document.getElementsByClassName("execute")[0];
var inputLst = document.getElementsByTagName("input");
execute.addEventListener("click", clicked)

function isTrue(a, b) {
	for(var i of a) {
		if (b === i) {
			return true;
		}
	}
	return false;
}

function output(exp) {
		var i;
		if (eval(exp) === result) {
			for (i of exp) {
				if (i === "*") {
					outputObject.innerHTML += "x";
				}
				else if (isTrue("abcd", i)) {
					outputObject.innerHTML += eval(i);
				}
				else {
					outputObject.innerHTML += i;
				}
			}
			outputObject.innerHTML += "<br>";
		}
}

function clicked() {
	var i, j, k, l, exp;
	outputObject.innerHTML = "";
	a = inputLst[0].value;
	b = inputLst[1].value;
	c = inputLst[2].value;
	d = inputLst[3].value;
	var lst1 = operator[0].concat(operator[1]);
	
	//Formula = Random
	for (i of lst1) {
		for (j of lst1) {
			for (k of lst1) {
				exp = a + " " + i + " " +  b +  " " + j +  " " + c +  " " + k +  " " + d;
				output(exp);
			}
		}
	}

	//Formula = (a + b) x c x d
	for (i of operator[0]) {
		for (j of operator[1]) {
			for (k of operator[1]) {
				for (l of lst[0]) {
					exp = "(" + l[0] + " " + i + " " +  l[1] + ")" +  " " + j +  " " + l[2] +  " " + k +  " " + l[3];
					output(exp);
				}
			}
		}
	}

	//Formula = (a + b) x (c + d)
	for (i of operator[0]) {
		for (j of operator[1]) {
			for (k of operator[0]) {
				for (l of lst[1].slice(0, -1)) {
					exp = "(" + l[0] + " " + i + " " +  l[1] + ")" +  " " + j +  " " + "(" + l[2] +  " " + k +  " " + l[3] + ")";
					output(exp);
				}
			}
		}
	}

	//Formula = (a + b + c) x d 
	for (i of operator[0]) {
		for (j of operator[0]) {
			for (k of operator[1]) {
				for (l of lst[1]) {
					exp = "(" + l[0] + " " + i + " " +  l[1] +  " " + j +  " " + l[2] + ")" +  " " + k +  " " + l[3];
					output(exp);
				}
			}
		}
	}

	// Formula = ((a + b) + c) x d
	for (i of operator[0]) {
		for (j of operator[1]) {
			for (k of operator[0]) {
				for (l of lst[2]) {
					exp = "((" + l[0] + " " + i + " " +  l[1] + ")" +  " " + j +  " " + l[2] + ")"  +  " " + k +  " " + l[3];
					output(exp);
				}
			}
		}
	}
}
