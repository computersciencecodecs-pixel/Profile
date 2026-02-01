const LearnMoreButton = document.getElementById('LearnMore');
const popup = document.getElementById("Popup");
const Percetange = document.getElementById("Percetange")


function SocialSecurityNumber(){
	popup.style.display = "block";
	let i = 0

	setInterval(function(){
		if (i<=100){
			Percentage.innerText = i+ "%"
			i++			
		}
	},100)
}