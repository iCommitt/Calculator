let result = document.querySelector('.currentMath');
let historR = document.querySelector('.historyMath');
const operator = document.querySelectorAll(".function");
const digit = document.querySelectorAll(".digit");
let num1, num2, lastActive;
let active = 0;


//DIGITS
for (let i = 0; i < digit.length; i++){
    digit[i].addEventListener("click", function(){
        deactivate();
        result.innerHTML == '0' && digit[i].innerHTML != '.' ?  result.innerHTML = digit[i].innerHTML : 
        result.innerHTML.includes('.') == true && digit[i].innerHTML == '.' ? 0 : 
        result.innerHTML == '' && digit[i].innerHTML == '.' ? result.innerHTML += '0.' :
        result.innerHTML.length > 6 ? 0 :
        active == 0 ? result.innerHTML += digit[i].innerHTML :
        result.innerHTML = digit[i].innerHTML, active = 0;
    })
}

//FUNCTIONS
for (let i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(){
        
        switch (operator[i].innerHTML){

            case 'AC':
                result.innerHTML = '0';
                num1 = 0;
                num2 = 0;
                break;
            case '+/-':
                if (+result.innerHTML > 0) result.innerHTML = 0 - result.innerHTML;
                else result.innerHTML = result.innerHTML - result.innerHTML * 2;
                break;
            case '%':
                result.innerHTML = result.innerHTML / 100;
                break;
            case '÷':
                deactivate();
                activate('÷');
                if (lastActive != '' && lastActive != '=') equal();
                lastActive = '÷'
                active = 1;
                num1 = result.innerHTML;
                break;
            case '×':
                deactivate();
                activate('×');
                if (lastActive != '' && lastActive != '=') equal();
                lastActive = '×'
                active = 1;
                num1 = result.innerHTML;
                break;
            case '+':
                deactivate();
                activate('+');
                if (lastActive != '' && lastActive != '=') equal();
                lastActive = '+'
                active = 1;
                num1 = result.innerHTML;
                break;
            case '−':
                deactivate();
                activate('−');
                if (lastActive != '' && lastActive != '=') equal();
                lastActive = '−'
                active = 1;
                num1 = result.innerHTML;
                break;
            case '=':
                deactivate();
                equal();
                lastActive = '=';
                break;
        }
        function equal(){
            switch (lastActive){
                case '+': result.innerHTML = String(+num1 + +result.innerHTML).slice(0,6); break;
                case '−': result.innerHTML = String(+num1 - +result.innerHTML).slice(0,6); break;
                case '÷': result.innerHTML = String(num1 / result.innerHTML).slice(0,6); break;
                case '×': result.innerHTML = String(num1 * result.innerHTML).slice(0,6); break;
            }
        }
    })
}

//LIGHT UP BUTTON
function activate(what){
    for (let i = 3; i < operator.length; i++){
        if (operator[i].innerHTML == what){
            operator[i].style.backgroundColor = 'white';
            operator[i].style.color = '#fea10d';
        }
    }
}

//STOP LIGHT UP BUTTON
function deactivate(what){
    for (let i = 3; i < operator.length; i++){
            operator[i].style.backgroundColor = '#fea10d';
            operator[i].style.color = 'white';
    }
}
