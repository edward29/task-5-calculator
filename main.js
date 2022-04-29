window.onload = function() {
    // calculator input fields and format a numbers
    const calcu = {
        getHstry() {
            return document.querySelector(".history").innerText;
        },

        getPrnitHstry(num) {
            document.querySelector(".history").innerText=num;
        },

        getOpt(){
            return document.querySelector(".result").innerText;
        },

        getPrintOpt(num) {
            if(num == "") {
                document.querySelector(".result").innerText=num;
            } else {
                document.querySelector(".result").innerText=calcu.getFormat(num);
            }	
        },

        getFormat(num) {
            if (num == "-") {
                return "";
            }
            let n = Number(num);
            let newNum = n.toLocaleString("en");
            return newNum;
        },

        getRevFormat(num) {
            return Number(num.replace(/,/g,''));
        }
    }

    // get all the operator and turn into a function
    let oprtr = document.getElementsByClassName("operator");
    for (let i = 0; i < oprtr.length; i++){
        oprtr[i].addEventListener('click',function(){

            switch (this.innerText || this.id) {
                case "π":
                    calcu.getPrintOpt(Math.PI);
                    break;
                    
                case "x²":
                    calcu.getPrintOpt(Math.pow(calcu.getOpt(), 2));
                    break;

                case "x³":
                    calcu.getPrintOpt(Math.pow(calcu.getOpt(), 3));
                    break;

                case "sin":
                    calcu.getPrintOpt(Math.sin(calcu.getOpt()));
                    break;

                case "cos":
                    calcu.getPrintOpt(Math.cos(calcu.getOpt()));
                    break;

                case "tan":
                    calcu.getPrintOpt(Math.tan(calcu.getOpt()));
                    break;

                case "√":
                    calcu.getPrintOpt(Math.sqrt(calcu.getOpt()));
                    break;

                case "∛":
                    calcu.getPrintOpt(Math.pow(calcu.getOpt(), 1/3));
                    break;

                case "exp":
                    calcu.getPrintOpt(Math.exp(calcu.getOpt())); 
                    break;

                case "C":
                    calcu.getPrnitHstry(""); //clear history
                    calcu.getPrintOpt(""); //clear current output
                    break;

                case "CE":
                    calcu. getPrintOpt(""); //clear current output
                    break;

                case "Bs":
                    let res = calcu.getRevFormat(calcu.getOpt()).toString();
                    if (res) {
                        res = res.slice(0, -1); //delete the last number
                        calcu.getPrintOpt(res); //print new output
                    }
                    break;
                    
                default:
                    let result = calcu.getOpt();
                    let history = calcu.getHstry();
                    if(result == "" && history != ""){
                        if (isNaN(history[history.length-1])){
                            history = history.slice(0, -1);
                        }
                    }

                    if(result != "" || history !=" "){
                        result = result == ""? result : calcu.getRevFormat(result);
                        history = history+result;
                        try {
                            if (this.innerText == "=") {
                                let result = eval(history); 
                                calcu.getPrintOpt(result); //get the total
                                calcu.getPrnitHstry(history); 
                            } else {
                                history += this.innerText;
                                calcu.getPrnitHstry(history);
                                calcu.getPrintOpt("");
                            }
                        } catch (error) {
                            calcu.getPrnitHstry("");
                            calcu.getPrintOpt(error);
                        }
                    }
                    break;
            }
        });
    }

    // get the numbers and put into input fields
    let numbers = document.querySelectorAll(".number");
    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', function() {
            let output = calcu.getRevFormat(calcu.getOpt());
            if (output != NaN) {
                output += this.innerText;
                calcu.getPrintOpt(output);
            }
        });
    }

    // disable the inspect element
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    document.onkeydown = (e) => {
        if (event.keyCode == 123) {
            return false;
        }

        if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
            return false;  
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
            return false;  
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
            return false;  
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === "U".charCodeAt(0)) {
            return false;  
        }
        if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
            return false;  
        }
    }
    
}