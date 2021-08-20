function bucketize(s,n){

    s = s + " ";
 
    let buckets = [];
    let words = s.split(" ")
    let buc = "";
    let i = 0;
    let j = 0;
    let sto = 0;

    for(let w of words){

            if(n < w.length){


                return [];
            }


    }


    if(words.length >= 3 && n > 1){

    for(let c = 0; c < s.length; c++){
        j++;
        console.log(c + ": " + s[c] + " j: " + j);
        if(s[c]===" "){
    
            buc = buc + words[i] + " ";
            i++;
            sto = c; 
        }
    
            if(j >= n){
               if(s[++c] === " "){
                   buc = buc + words[i] + " ";
                   i++;
                   sto = c 
               }
                buckets.push(buc.slice(0, -1));
                buc = "";
                j = 0;
               
                c = sto;
            
        }
    
        
    }
}
    if(j <= n && buc.length > 0){
        
        buckets.push(buc.slice(0, -1));
    
    }
    console.log(buckets)
    return buckets;
}

//*/








