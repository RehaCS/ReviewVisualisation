//https://www.youtube.com/watch?v=oLH4uQzbNxI&index=39&list=PLDmvslp_VR0wkiclky6vj6SSDx-N2QE9z
var correctAns = 0;
var totalQ = 5;

//Initialiser
function init(){
	//set right answer in session storage
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','a');
	sessionStorage.setItem('a3','a');
	sessionStorage.setItem('a4','a');
	sessionStorage.setItem('a5','a');
}



$(document).ready(function (){
	//hides all questions
	$('.q-form').hide();

	//show q1
	$('#q1').show();

	// $('.q-form #submit').click(function(){
	// 	//get data attr. Parent of submit is <form>
	// 	current = $(this).parents('form:first').data('question');
	// 	next = $(this).parents('form:first').data('question') +1;
	// 	$('.q-form').hide();
	// 	//show next q
	// 	$('#q'+next'').fadeIn(300);
	// 	process(''+current+'');
	// 	return false;
	// });

	$('#q1 #submit').click(function(){
		$('.q-form').hide();
		process('q1');
		$('#q2').fadeIn(300);
		return false;
	});

	$('#q2 #submit').click(function(){
		$('.q-form').hide();
		process('q2');
		$('#q3').fadeIn(300);
		return false;
	});

	$('#q3 #submit').click(function(){
		$('.q-form').hide();
		process('q3');
		$('#q4').fadeIn(300);
		return false;
	});

	$('#q4 #submit').click(function(){
		$('.q-form').hide();
		process('q4');
		$('#q5').fadeIn(300);
		return false;
	});

	$('#q5 #submit').click(function(){
		$('.q-form').hide();
		process('q5');
		$('#results').fadeIn(300);
		return false;
	});

});

//process answers
function process(question){

	if (question == 'q1'){
		var submitted = $('input[name=q1]:checked').val();
		if (submitted == sessionStorage.a1){
			correctAns++;
		}
	}

	if (question == 'q2'){
		var submitted = $('input[name=q2]:checked').val();
		if (submitted == sessionStorage.a2){
			correctAns++;
		}
	}

	if (question == 'q3'){
		var submitted = $('input[name=q3]:checked').val();
		if (submitted == sessionStorage.a3){
			correctAns++;
		}
	}

	if (question == 'q4'){
		var submitted = $('input[name=q4]:checked').val();
		if (submitted == sessionStorage.a4){
			correctAns++;
		}
	}

	if (question == 'q5'){
		var submitted = $('input[name=q5]:checked').val();
		if (submitted == sessionStorage.a5){
			correctAns++;
		}

		$('#results').html('<h3>Your final score is: ' + correctAns + ' out of 5</h3><a href="./test.html">Click here to start again</a>')
	}
	return false;
	
}

//Event listener so init runs first
window.addEventListener('load', init, false);



