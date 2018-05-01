//Code reused from https://www.youtube.com/watch?v=oLH4uQzbNxI&index=39&list=PLDmvslp_VR0wkiclky6vj6SSDx-N2QE9z
var correctAns = 0;
var totalQ = 15;

//Initialiser
function init(){
	//set right answer in session storage
	sessionStorage.setItem('a1','a');
	sessionStorage.setItem('a2','a');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','a');
	sessionStorage.setItem('a5','a');
	sessionStorage.setItem('a6','b');
	sessionStorage.setItem('a7','b');
	sessionStorage.setItem('a8','a');
	sessionStorage.setItem('a9','b');
	sessionStorage.setItem('a10','a');
	sessionStorage.setItem('a11','b');
	sessionStorage.setItem('a12','a');
	sessionStorage.setItem('a13','a');
	sessionStorage.setItem('a14','b');
	sessionStorage.setItem('a15','a');
}

$(document).ready(function (){
	//hides all questions
	$('.questionForm').hide();

	//show q1
	$('#q1').show();

	$('.questionForm #submit').click(function(){
		currentQ = $(this).parents('form:first').data('question');
		nextQ = $(this).parents('form:first').data('question')+1 ;
		$('.questionForm').hide();
		$('#q' + nextQ +'').fadeIn(300);
		process('' + currentQ + '');
		return false;

		if (currentQ == 5){
		$('.questionForm').hide();
		$('#results').fadeIn(300);
		process('' + currentQ + '');
		return false;
		}
	});

});

//process answers
function process(n){
	console.log('question number is ', n)

	var submitted = $('input[name=q'+n+']:checked').val();
	if (submitted == sessionStorage.getItem('a'+n)){
		correctAns++;
	}

	if (n == totalQ){
		$('#results').html('<h3>Your final score is: ' + correctAns + ' out of '+totalQ+'</h3><a href="./test.html">Click here to start again</a>')
	}

	return false;
	
}

//Event listener so init runs first
window.addEventListener('load', init, false);



