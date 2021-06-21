const rotateLeft = (n, d, arr)=>{
    if(d<0){
        return "d is negative";
    }
    
    for (let i = 0; i < d; i++) {
        let ele = arr.shift();
        arr.push(ele);      
    }
    console.log(arr);
}