/*
const b1 = document.getElementById('iphone12');
const b2 = document.getElementById('pixel');
const b3 = document.getElementById('s21');
const b4 = document.getElementById('redmi');
const b5 = document.getElementById('macmini');
const b6 = document.getElementById('aio');
const b7 = document.getElementById('expertcenter');
const b8 = document.getElementById('optiplex');
const b9 = document.getElementById('g3');
const b10 = document.getElementById('ideaflex');
const b11= document.getElementById('flex3');
const b12 = document.getElementById('m1air');
/*

/*
output1 = document.getElementById("op1");
output2 = document.getElementById("op2");
output3 = document.getElementById("op3");
output4 = document.getElementById("op4");
output5 = document.getElementById("op5");
output6 = document.getElementById("op6");
output7 = document.getElementById("op7");
output8 = document.getElementById("op8");
output9 = document.getElementById("op9");
output10 = document.getElementById("op10");
output11 = document.getElementById("op11");
output12 = document.getElementById("op12");
*/


add1 = 380;
add2 = 110;
add3 = 300;
add4 = 220;
add5 = 580;
add6 = 500;
add7 = 630;
add8 = 160;
add9 = 750;
add10 = 480;
add11 = 180;
add12 = 800;

count = 0;

function buttonClicked(){
	x = document.activeElement.getAttribute("id");
	
	if (x == "iphone12"){
		count = count + add1;
		device.innerHTML = device.innerHTML + "Iphone 12" + "<br>";
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x== "pixel"){
		count = count + add2;
		device.innerHTML = device.innerHTML + "Pixel 3" + "<br>";
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x== "s21"){
		device.innerHTML = device.innerHTML + "Samsung galaxy S21" + "<br>";
		count = count + add3;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x== "redmi"){
		device.innerHTML = device.innerHTML + "Redmi Note 10" + "<br>";
		count = count + add4;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x == "macmini"){
		device.innerHTML = device.innerHTML + "M1 Mac mini" + "<br>";
		count = count + add5;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x == "aio"){
		device.innerHTML = device.innerHTML + "Lenovo AIO 3i-2022" + "<br>";
		count = count + add6;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x == "expertcenter"){
		device.innerHTML = device.innerHTML + "Asus ExpertCenter D500SC" + "<br>";
		count = count + add7;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x == "optiplex"){
		device.innerHTML = device.innerHTML + "Dell Optiplex 3050SFF" + "<br>";
		count = count + add8;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x == "g3"){
		device.innerHTML = device.innerHTML + "Dell G3 3500" + "<br>";
		count = count + add9;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x == "ideaflex"){
		device.innerHTML = device.innerHTML + "Ideapad Flex 5" + "<br>";
		count = count + add10;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	if (x == "flex3"){
		device.innerHTML = device.innerHTML + "Lenovo Flex 3" + "<br>";
		count = count + add11;
		price.innerHTML = "Price:  " + "&euro;" + count  ;
	}
	if (x == "m1air"){
		device.innerHTML = device.innerHTML + "M1 Macbook Air" + "<br>";
		count = count + add12;
		price.innerHTML = "Price:  " + "&euro;" + count;
	}
	final.innerHTML = "";
	i = 1
}


function purchase(){
	if (i == 1){
		y= prompt("Type yes to confirm purchase: ");
	}
	if (i == 1 && y == "yes"){
		final.innerHTML = "Purchase charged in account!";
		device.innerHTML = "";
		price.innerHTML = "";
		i = 0
	}

}


