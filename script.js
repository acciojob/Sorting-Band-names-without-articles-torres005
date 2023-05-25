//your code here
let bandName = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function bands(bde){
	return bde.replace(/^(a|an|the)/i,'').trim();
}

const band = bandName.sort((a,b)=> bands(a) > bands(b) ? 1:-1 );


