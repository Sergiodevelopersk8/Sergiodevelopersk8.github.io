var counter=1;
  setInterval(function(){
      document.getElementById('radio'+ counter).checked = true;
  
      counter++;
      
  
      if(conter> 4){
          counter = 1;
      }
  },5000);
  