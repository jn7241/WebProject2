const button1 = document.getElementById('btn1');

const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');


const text1 = document.getElementById('textbox1');
const text2 = document.getElementById('textbox2');
const text3 = document.getElementById('textbox3');
const text4 = document.getElementById('textbox4');
const text5 = document.getElementById('textbox5');

function remember(){
	output1.innerHTML = "Name: " +text1.value;
	output2.innerHTML = "Surname: " +text2.value;
	output3.innerHTML = "Email: " +text3.value;
	output4.innerHTML = "Street Address " +text4.value;
	output5.innerHTML = "Phone number: " +text5.value;
	
}
button1.addEventListener('click', remember);
