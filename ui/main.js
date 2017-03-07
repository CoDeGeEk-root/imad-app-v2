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
  request.open('GET','htt[://codegeek-root.imad.hasura-app.io/counter',true);
  request.send(null);
  
  
  
    
};