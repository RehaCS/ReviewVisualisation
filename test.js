//https://www.youtube.com/watch?v=oLH4uQzbNxI&index=39&list=PLDmvslp_VR0wkiclky6vj6SSDx-N2QE9z
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
	sessionStorage.setItem('a13','b');
	sessionStorage.setItem('a14','b');
	sessionStorage.setItem('a15','a');
}

$(document).ready(function (){
	//hides all questions
	$('.questionForm').hide();

	//show q1
	$('#q1').show();

	$('.questionForm #submit').click(function(){
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1 ;
		$('.questionForm').hide();
		$('#q' + next +'').fadeIn(300);
		process('' + current + '');
		return false;

		if (current == 5){
		$('.questionForm').hide();
		$('#results').fadeIn(300);
		process('' + current + '');
		return false;
		}
	});

	// $('#q1 #submit').click(function(){
	// 	$('.q-form').hide();
	// 	process('q1');
	// 	$('#q2').fadeIn(300);
	// 	return false;
	// });

	// $('#q2 #submit').click(function(){
	// 	$('.q-form').hide();
	// 	process('q2');
	// 	$('#q3').fadeIn(300);
	// 	return false;
	// });

	// $('#q3 #submit').click(function(){
	// 	$('.q-form').hide();
	// 	process('q3');
	// 	$('#q4').fadeIn(300);
	// 	return false;
	// });

	// $('#q4 #submit').click(function(){
	// 	$('.q-form').hide();
	// 	process('q4');
	// 	$('#q5').fadeIn(300);
	// 	return false;
	// });

	// $('#q5 #submit').click(function(){
	// 	$('.q-form').hide();
	// 	process('q5');
	// 	$('#results').fadeIn(300);
	// 	return false;
	// });

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


	// if (question == 'q1'){
	// 	var submitted = $('input[name=q1]:checked').val();
	// 	if (submitted == sessionStorage.a1){
	// 		correctAns++;
	// 	}
	// }

	// if (question == 'q2'){
	// 	var submitted = $('input[name=q2]:checked').val();
	// 	if (submitted == sessionStorage.a2){
	// 		correctAns++;
	// 	}
	// }

	// if (question == 'q3'){
	// 	var submitted = $('input[name=q3]:checked').val();
	// 	if (submitted == sessionStorage.a3){
	// 		correctAns++;
	// 	}
	// }

	// if (question == 'q4'){
	// 	var submitted = $('input[name=q4]:checked').val();
	// 	if (submitted == sessionStorage.a4){
	// 		correctAns++;
	// 	}
	// }

	// if (question == 'q5'){
	// 	var submitted = $('input[name=q4]:checked').val();
	// 	if (submitted == sessionStorage.a5){
	// 		correctAns++;
	// 	}

	// 	$('#results').html('<h3>Your final score is: ' + correctAns + ' out of '+totalQ+'</h3><a href="./test.html">Click here to start again</a>')
	// }
	return false;
	
}

//Event listener so init runs first
window.addEventListener('load', init, false);



