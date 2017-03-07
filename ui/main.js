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
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function() {
   
   
   var names = ['name1', 'name2', 'name3', 'name4'];   
   var list = '';
   for(var i=0;i<names.length;i++){
       list += '<li>' + names[i] + '</li>';
   }
   var ul = document.getElementById('namelist');
   ul.innerHTML = list;
   
 };