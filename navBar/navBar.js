// Script which loads the navigation bar (navBar.html)
$(function(){
  $("#nav-placeholder").html(
  	'<nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">' +
  
  '<a class="navbar-brand" href="./index.html">Review Fraud</a>' +
  
  '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">'+
    '<span class="navbar-toggler-icon"></span>'+
  '</button>'+
 
  '<div class="collapse navbar-collapse" id="navbarNavDropdown">'+
    
    '<ul class="navbar-nav ml-auto">' +
      
      '<li class="nav-item">' +
        '<a class="nav-link" href="./index.html">Home</a>' +
      '</li>' +

      '<li class="nav-item dropdown">' +
        
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Visualizations</a>' +
        
        '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">' +
          '<a class="dropdown-item" href="./reviewOvertime.html">Review Overtime</a>' +
          '<a class="dropdown-item" href="./ratingDistribution.html">Rating Distribution</a>' +
          '<a class="dropdown-item" href="./comLength.html">Comment Length</a>' +
          '<a class="dropdown-item" href="./avgComLength.html">Average Comment Length</a>' +
          '<a class="dropdown-item" href="./wordCloud.html">Word Cloud</a>' +
        '</div>' +
      
      '</li>' +
      
      '<li class="nav-item">' +
        '<a class="nav-link" href="#">Information</a>' +
      '</li>' +
      
      '<li class="nav-item">' +
        '<a class="nav-link" href="#">Test Yourself</a>' +
      '</li>' +

    '</ul>' +
  
  '</div> ' +
'</nav>'
  	)
})
