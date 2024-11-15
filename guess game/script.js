

var enterbutton = document.getElementById('enterbutton');
var againbutton = document.getElementById('againbutton');
var cont = document.getElementById('cont');
let attempts = 0;

var randomNumber = Math.ceil(Math.random() * 100);
let input ="";


function checknumber (){    

    input = document.getElementById('userinput').value;

    if(input == randomNumber){
        window.alert("You Guessed right" + ","+"it was "+ randomNumber + `The Number Of the attempts ${attempts}`);
    }
    else if (input > randomNumber && input<100){
        window.alert("You Guessed Too High.Guess Below"+ ` ${input}`)
        attempts++;
    }
    else if (input<randomNumber && input>1){
        window.alert("You Guessed Too Low.Guess Above"+ ` ${input}`)
        attempts++;
    }
    else if(isNaN(input)){
        window.alert('This is not a Number!');
        attempts++;
    }
    else{          
          window.alert('It has to between the 1 and 100');
          Reset()
    }


    input.value="";
}

const Reset =() =>{
    input.innerHTML ="";
    console.log(input);
}

enterbutton.addEventListener('click',checknumber);
againbutton.addEventListener('click',function(){
    location.reload();
})