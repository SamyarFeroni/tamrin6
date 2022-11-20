function theReversStr(string){
    let list1 = []
    list1.push(string.split)
    let list2 =string.split("")
    list2.reverse();
    list2.join("");
    for(let i = 0;i<list2.length;i++){
        if(list2[i] === list1[i]){
            return true
        } else{
            return false
        }
    }
    return 
}
console.log(theReversStr("Samyar"));
