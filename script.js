 function processData(c1, c2, c3) {
  var x = document.getElementsByClassName("face");
  var cv1 = document.getElementById(c1).value;
  var cv2 = document.getElementById(c2).value;
  var cv3 = document.getElementById(c3).value;
  for (var i = 7; i < 12; i++) {
    x[i].style.backgroundColor=cv1; 
    x[i].style.backgroundImage="";
  }
  for (var i = 1; i < 4; i++) {
    x[i].style.backgroundColor=cv2;
    x[i].style.backgroundImage="";
   
  }
  for (var i = 13; i < 24; i++) {
    x[i].style.backgroundColor=cv3;
    x[i].style.backgroundImage="";
  
  } 

  var input = document.querySelector('input[type="file"]');
  var reader = new FileReader();
  var file = document.getElementById("getval").files[0];
  reader.onloadend = function() {
    for (var i = 7; i < 12; i++) {
      x[i].style.backgroundImage="url(" +reader.result + ")";
    }
  }
  var input2 = document.querySelector('input[type="file"]');
  var reader2 = new FileReader();
  var file2 = document.getElementById("getval2").files[0];
  reader2.onloadend = function() {
    for (var i = 1; i < 4; i++) {  
      x[i].style.backgroundImage="url(" +reader2.result + ")";
    }
  }
  var input3 = document.querySelector('input[type="file"]');
  var reader3 = new FileReader();
  var file3 = document.getElementById("getval3").files[0];
  reader3.onloadend = function() {
    for (var i = 13; i < 24; i++) {
      x[i].style.backgroundImage="url(" + reader3.result + ")";
    }
  }
  if (file) {
    reader.readAsDataURL(file);
  } 
  if (file2) {
    reader2.readAsDataURL(file2);
  } 
  if (file3) {
    reader3.readAsDataURL(file3);
  }
}

function example() {
  var x = document.getElementsByClassName("face");
   
  for (var i = 7; i < 12; i++) {
    x[i].style.backgroundImage="url(example.gif)"; 
  }
  for (var i = 1; i < 4; i++) {
    x[i].style.backgroundImage="url(example.gif)";
   
  }
  for (var i = 13; i < 24; i++) {
    x[i].style.backgroundImage="url(example.gif)";
  
  } 
}