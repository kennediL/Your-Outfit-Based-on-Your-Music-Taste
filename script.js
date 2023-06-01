// 1. Store each input as a variable (there should be two input boxes - one for each answer) [ ]
// 2. Store the button as a variable (there should be ONE button) [ ]
// 3. Create a click handler [ ]
// 4. Use the .value property to store user input [ ]
// 5. Add console.log to test if the code is being stored [ ]
// 6. Write a conditional statement with else-if to include all 4 possible results [ ]
// 7. Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
// 8. Write a sentence using string concatenation using the data stored in the user input variables [ ]
// 9. Add a next level feature! [ ]

let result=document.querySelector(".result");
let submitButton=document.querySelector(".submitButton");
let fit1=document.querySelector(".fit1"); 


submitButton.onclick=function(){
 let input1=document.querySelector(".input1").value;
 let input2=document.querySelector(".input2").value;
console.log(input1);
  console.log(input2);

if(input1==="Tyler the Creator"&& input2==="Kendrick Lamar"){
  result.innerHTML="Since you pressed "+ input1 +" and "+ input2 + " your outfit is";
  fit1.src="img1.PNG"
}

  else if(input1==="Tyler the Creator"&& input2==="J.cole"){
    result.innerHTML="Since you pressed "+ input1 +" and "+ input2 + " your outfit is";
    fit1.src="img3.PNG"
    
  
  }

  else if (input1==="The Weeknd"&& input2==="Kendrick Lamar"){
    result.innerHTML="Since you pressed "+ input1 +" and "+ input2 + " your outfit is";
    fit1.src="img2.PNG"
    
  }

  else if (input1==="The Weeknd"&& input2==="J.cole"){
    result.innerHTML="Since you pressed "+ input1 +" and "+ input2 + " your outfit is";
    fit1.src="img4.PNG"
  }

  else{
  result.innerHTML="Please make sure you spelled the Artists' name correctly."
    
  }

    















  
};