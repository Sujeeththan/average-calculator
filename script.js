 function average(event) {
            event.preventDefault();

            let num1 = parseFloat(document.getElementById("num1")).value;
            let num2 = parseFloat(document.getElementById("num2")).value;
            let num3 = parseFloat(document.getElementById("num3")).value;
            let num4 = parseFloat(document.getElementById("num4")).value;
            let sum;
            let average 



            sum = (num1 + num2 + num3 + num4) 
            average =  sum / 4;


            document.getElementById("output").innerHTML = `${average}`;
        }