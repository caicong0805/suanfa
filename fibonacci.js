var fabonacci = []
fabonacci[1] = 1;
fabonacci[2] = 2;
for(var i=3; i<20; i++){
    fabonacci[i] = fabonacci[i-1] + fabonacci[i-2];
}
for(var i= 1;i<fabonacci.length;i++){
    console.log(fabonacci[i]);
}

