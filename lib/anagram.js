function anagram(str){
    if(!str){
        return []
    }
    if(str.length==1){
        return [str];
    }
    if(str.length==2){
        return [str[0]+str[1],str[1]+str[0]] 
    }
    
    var result=[];
    for(i=0;i<3;i++){
        result.push(str[i]+anagram(drop(str,i)[0]));
        result.push(str[i]+anagram(drop(str,i)[1]));
    }
    return result
}

function drop(str,n){
    var result=""

    for(i=0;i<str.length;i++){
        if(i==n){
            continue
        }
        result +=str[i]
    }
    return result
}
module.exports = anagram