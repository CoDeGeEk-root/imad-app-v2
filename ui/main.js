var button = document.getElementById('counter');

button.onclick = function () {
  
  //request to counter
  // This is request object
  var request  = new XMLHttpRequest();
  //check if the request is done and capture the response
  //render this respnse to HTML file using counter variable.
  request.onreadystatechange = function(){
    if(request.readystate === XMLHttpRequest.DONE){
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        
    }
  };
  //Make the request
  request.open('GET','http://codegeek-root.imad.hasura-app.io/counter',true);
  request.send(null);
 };
 
 //submit name

 var submit = document.getElementById('submit_btn');
 submit.onclick = function() {
     var request  = new XMLHttpRequest();
  //check if the request is done and capture the response
  //render this respnse to HTML file using counter variable.
  request.onreadystatechange = function(){
    if(request.readystate === XMLHttpRequest.DONE){
        if(request.status === 200){
             var names = request.responseText;
             names = JSON.parse(names);
   var list = '';
   for(var i=0;i<names.length;i++){
       list += '<li>' + names[i] + '</li>';
   }
   var ul = document.getElementById('namelist');
   ul.innerHTML = list;
        }
        
    }
  };
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
  //Make the request
  request.open('GET','http://codegeek-root.imad.hasura-app.io/submit-name?name=' + name,true);
  request.send(null);
   
   
  
   
 };