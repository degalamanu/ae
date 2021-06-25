
  function bigFun(){

  
    var a= document.getElementById("text1").value;
    document.getElementById("text1").value="";
    document.getElementById("a").innerHTML=a;
    if(a=="open google"){  
    open("https://google.com")
   
document.getElementById("1").innerHTML="opening google...";
return false;
        }
        if(a=="call police"){
         
          open("tel:100")
          document.getElementById("1").innerHTML="caling police...."
          return false;
         
            }
        if(a=="open amazon"){
          open("https://amazon.com")
         
          document.getElementById("1").innerHTML="opening amazon...";
          return false;
        }
        if(a=="open twitter"){
          open("https://twitter.com")
         
          document.getElementById("1").innerHTML="opening twitter...";
          return false;
        }
        if(a=="open facebook"){
          open("https://facebook.com")
         
          document.getElementById("1").innerHTML="opening facebook...";
          return false;
        }
        if(a=="open messenger"){
         
          open("https://www.messenger.com")
          document.getElementById("1").innerHTML="opening messanger...";
          return false;
        }
        if(a==""){
            
          document.getElementById("1").innerHTML="hello ! what can i do for you";
              return false;
             
        }
        
              if(a=="hello"){  
                
                
             
                document.getElementById("1").innerHTML="HI I AM AINOTE YOU CAN CALL ME NOTE";
                return false;

     
      
 }
 if(a=="i am ill"){
 
  document.getElementById("1").innerHTML="if you have fever type [!] if you have cold type[@] ";
return false;


    }
    if(a=="@"){
     
      document.getElementById("1").innerHTML="oh you have cold don't worry.if you have headache then press[q]";
          return false;
          
    }
    if(a=="!"){
     
      document.getElementById("1").innerHTML="what is your body temperature?";
          return false;
    
        }
        if(a=>98){
         
          document.getElementById("1").innerHTML="you have fever if you have headache please go to the doctor";
              return false;
        
            }
            if(a=="@"){
             
              document.getElementById("1").innerHTML="oh you have cold don't worry.if you have headache then press[q]";
                  return false;
            }
    else{
       document.getElementById("1").innerHTML="i don't know";
                  return false;
    }
            
            }
          function page(){
           
            open("https://console.dialogflow.com/api-client/demo/embedded/6b37f443-8d00-4a58-8f28-efa773358bf3")
          }
          
        
