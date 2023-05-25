//your code here
let band = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function bands(bde){
	return bde.replace(/^(a|an|the)/i,'').trim();
}

const bandName = band.sort((a,b)=> bands(a) > bands(b) ? 1:-1 );

let roam = document.getElementById('band');
roam.innerHTML = bandName.map(band => `<li>${band}</li>`);




