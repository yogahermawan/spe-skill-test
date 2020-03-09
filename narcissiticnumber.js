const readline = require('readline');

function getDiceAnswer() {
    return new Promise(resolve => {    
        const rl = readline.createInterface({
            input:  process.stdin,
            output: process.stdout
        });
        rl.question("Input Number ? ", (answer) => {
            resolve(answer);
            rl.close();
        });
    });   
}
var lines = [];
getDiceAnswer().then(answer => {
    lines.push(answer);
    narcissistic(answer);
    function narcissistic( value ) {
        var angka= value.toString().length; 
        var digit = []; 
        var result = [];
        angka = parseInt(angka); 
        digits = value.toString() 
        for(let i=0;i<digits.length;i++) {
            digit.push(parseInt(digits[i]));
        }
        for(let i=0;i<digit.length;i++){
            result.push(Math.pow(digit[i],angka));
        }
        var sum = result.reduce(add, 0); 
        function add(a, b) {
            return a + b;
        }
        sum == value ? console.log(value + " is narcissitic ") : console.log(value + " is not narcissistic");
    }
});
