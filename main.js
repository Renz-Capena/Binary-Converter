//Number to Binary
const numberInput = document.querySelector("input[name='inputNumber']");
const resultBinary = document.querySelector("#resultBinary");


numberInput.addEventListener('keyup',function(){
    let userInput = numberInput.value;
    
    if(userInput <= 255){
        
        let binaryContainer = [];
        
        for(let i = userInput ; i > 0 ; i = parseInt(i/2)){
            binaryContainer.push(i%2)
        }
        
        resultBinary.textContent = binaryContainer.reverse().join('')
        
    }else{
        
        alert('Your Number input is greater than 255')
        resultBinary.textContent  = 'Error'
        
    }
})



//Binary to Number
const binaryInput = document.querySelector("input[name='inputBinary']");
const resultNumber = document.querySelector("#resultNumber");

binaryInput.addEventListener('keyup',function(){

    let userInput = Array.from(this.value)

    let valid = userInput.every(isValid);

    function isValid(number){
        return number == 1 || number == 0
    }


    if(!this.value){
        resultNumber.textContent = ''
    }else if(valid == true){
        if(this.value.length <= 8){
            resultNumber.textContent = parseInt(binaryInput.value, 2)
        }else{
            alert('Your Binary input is greater than 255')
            resultNumber.textContent = 'Error'
        }
    }else{

        alert('Please input only 0 and 1')
        resultNumber.textContent = 'Error'

    }
    
    
    

    


})