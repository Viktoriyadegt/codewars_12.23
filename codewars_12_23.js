const correct = (string) => {
        let a = string
        .split ('')
        .map((m)=>m==='5'? 'S' : m )
        .map((m)=>m==='0'? 'O' : m )
        .map((m)=>m==='1'? 'I' : m )
        .join('')
        return a
    }


    
console.log(correct("51NGAP0RE"));
