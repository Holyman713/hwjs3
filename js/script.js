var a = +prompt('Введите число');
var b = +prompt('Введите степень');
var c=1;

if (isNaN(a)){
    for (i = 0; i<b ;i++) {
        c=c*5;       
    }
    alert(5 + ' ^ ' + b + ' = ' + c);
}else if(isNaN(b)) {
    for (i = 0; i<5 ;i++) {
        c=c*a;       
    }
    alert(a + ' ^ ' + 5 + ' = ' + c);
}else {
    for (i = 0; i<b ;i++) {
        c=c*a;       
    }
    alert(a + ' ^ ' + b + ' = ' + c);
}



do {
    line = +prompt('Введите количество строк для лестницы');
}while (line==0);
if (isNaN(line)){
    line = 5;
}
do {
    var symbol = prompt('Введите символ отступов');
}while (symbol==' ');

do {
    var symbol2 = prompt('Введите конечный символ');
}while (symbol==' ');


for(i=0;i<line;i++){
    // if (i!=0){
    //     symbol2=symbol+symbol2;
    //     console.log(symbol2);
    // } 
    // else {
    //     console.log(symbol2);
    // }
    i!=0 ? console.log(symbol2=symbol+symbol2) : console.log(symbol2);
    
}
