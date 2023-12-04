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

//========================3 way==================================

function correct2(string) {
	const map = {
		0: "O",
		1: "I",
		5: "S"
	};
	
	return string
		.split("")
		.map(c => map.hasOwnProperty(c) ? map[c] : c)
		.join("");
}

console.log(correct2("51NGAP0RE"));

