/* var palabra  = "0_0 (: /-\ :) 0-0"; */
var flag = false;
var notAllowed = ['!', '@', '#', '&' ,'(', ')', '-', '[', '{', '}',']', ':',';',',', '?' ,'/', '*', "\\", '_','.','~','$','^','+','=','<','>',' '];



let checkPalindrome = function(){

    var palabra = document.getElementById("word").value; 
    //Convert the enterted word into upper case
    palabra  = palabra.toUpperCase();
   document.getElementById("word").value = "";
    
    
    
    //Store each letter from the word entered in an array 
    var palabra_arr = [];
    for(let i = 0; i<palabra.length; i++){
        if(!notAllowed.includes(palabra[i]))
            palabra_arr.push(palabra[i]);
    }
    
    
    
    
    //reverse saves the word reverse
    var reverse = [];
    
    
    //for loop implemented to store reverse word in reverse
    for (let i = palabra_arr.length ; i> 0; i--)
    {
       reverse.push(palabra_arr[i-1])
    
    }
    
    for (let i=0 ; i<reverse.length; i++){
        if(reverse[i] === palabra_arr[i]){
            flag = true;
        }
        else{
            flag = false;
            break;
        }
    }
    
    
    if(flag===false){
        /* console.log("No es palindroma"); */
        document.querySelector(".outcome").innerHTML = `The word ${palabra.toLowerCase()} is not palindrome.`
    }else{
       /*  console.log("Si es palindroma");  */   
       document.querySelector(".outcome").innerHTML = `The word ${palabra.toLowerCase()} is palindrome!!! `
    }




}




document.getElementById("check").addEventListener("click",checkPalindrome);