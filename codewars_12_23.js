//========================1 way==================================

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

//========================2 way==================================

const correct1 = (string) => {
        return string.replace(/5/g, 'S').replace(/1/g, 'I').replace(/0/g, 'O')
    }

    
console.log(correct1("51NGAP0RE"));

