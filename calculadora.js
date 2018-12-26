'use strict'

var args = process.argv.slice(2);

var operacion = args[1];
var num1 = parseFloat(args[0]);
var num2 = parseFloat(args[2]);

var result = '\n Introduce bien los parámetros \n';

if( args.length == 3 ){
    switch( operacion ){
        case 'mas': 
            result = 'Suma: ' + (num1 + num2);
            break;
        
        case 'menos': 
            result = 'Resta: ' + (num1 - num2);
            break;
            
        case 'por': 
            result = 'Multiplica: ' + (num1 * num2);
            break;
            
        case 'entre': 
            result = 'Divide: ' + (num1 / num2);
    }
    
}

console.log(result);