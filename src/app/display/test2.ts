// interface tejas{
//     (a:number,b:number): void;
// }

// function aaa(i:number,j:number):void{
//     console.log(i+" "+j);
// }


// let vari_able : tejas = aaa;
// vari_able(1,2);







// interface parent{
//     v1:number;
// }

// interface child extends parent{
//     v2:number;
// }

// let mini = <child>{};
// mini.v1=11;
// mini.v2=3333;
// console.log(mini.v1+" "+mini.v2);



// interface one{
//     v1:number;    
// }
// interface two{
//     v2:number;
// }

// interface three extends one,two{

// }

// let four : three = {v1:1212,v2:56565};
// console.log(four.v1+" "+four.v2);




interface keyValue{
    (num1:number,num2:number):void;
}

function addKeyValue(a:number,b:number):void{
    console.log(a+b);
}

function updateKeyValue(a:number,b:number){
    console.log((a+10)+" "+(b+10));
}

let obj : keyValue = addKeyValue;
obj(12,12);

obj = updateKeyValue;
obj(12,12);













