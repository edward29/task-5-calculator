window.onload = function() {
    let result = document.querySelector(".result");
    let history = document.querySelector(".history");
    let btn = Array.from(document.querySelectorAll(".button"));
    
    btn.map(button => {
        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case "π":
                    result.innerText = Math.PI;
                    break;
                    
                case "x²":
                    result.innerText = Math.pow(result.innerText, 2);
                    break;

                case "x³":
                    result.innerText = Math.pow(result.innerText, 3);
                    break;

                case "sin":
                    result.innerText = Math.sin(result.innerText);
                    break;

                case "cos":
                    result.innerText = Math.cos(result.innerText);
                    break;

                case "tan":
                    result.innerText = Math.tan(result.innerText);
                    break;

                case "√":
                    result.innerText = Math.sqrt(result.innerText);
                    break;

                case "∛":
                    result.innerText = Math.pow(result.innerText, 1/3);
                    break;

                case "exp":
                    result.innerText = Math.exp(result.innerText);
                    break;

                case "+":
                    if (history.innerText) {
                        history.innerText += result.innerText  + "+";
                        result.innerText = "";
                    } else {
                        history.innerText = result.innerText + "+";
                        result.innerText = "";
                    }
                    break;
                    
                case "-":
                    if (history.innerText) {
                        history.innerText += result.innerText + "-";
                        result.innerText = "";
                    } else {
                        history.innerText = result.innerText + "-";
                        result.innerText = "";
                    }
                    break;
                    
                case "*":
                    if (history.innerText) {
                        history.innerText += result.innerText + "*";
                        result.innerText = "";
                    } else {
                        history.innerText = result.innerText + "*";
                        result.innerText = "";
                    }
                    break;
                    
                case "/":
                    if (history.innerText) {
                        history.innerText += result.innerText + "/";
                        result.innerText = "";
                    } else {
                        history.innerText = result.innerText + "/";
                        result.innerText = "";
                    }
                    break;
                    
                case "=":

                    try {
                        if(result.innerText === "" && history.innerText === ""){
                            return false;
                        } else {
                            history.innerText += result.innerText;
                            result.innerText = eval(history.innerText);
                        }
                        
                    } catch {
                        history.innerText = "";
                        result.innerText = "Please check your input\nThe page will reload in 3 seconds";

                        window.setTimeout( () => {
                            window.location.reload();
                        }, 3000);
                    }
                    
                    break;
                
                case "CE":
                    result.innerText = "";
                    break;

                case "C":
                    result.innerText = "";
                    history.innerText = "";
                    break;

                default:
                    result.innerText += e.target.innerText;
                    break;
            }
        });
    });

    const bs = document.querySelector("#Bs");
    bs.addEventListener('click', () => {
        if (result.innerText === '') {
            history.innerText = history.innerText.slice(0, -1);
        } else {
            result.innerText = result.innerText.slice(0, -1);
        }
    });

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