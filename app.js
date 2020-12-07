const APIkey = '1EZhckQCdYDJOve4C3rJL1MZbnOmMgW7';

console.log("Let's get this party started!");

async function getGif(term) {
	const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
		params: { api_key: APIkey, q: term }
	});
	let number = Math.floor(Math.random() * res.data.data.length);
	console.log(number);
	return res.data.data[number].images.original.url;
}

$('form').on('submit', async function(evt) {
	evt.preventDefault();
	let term = $('#search').val();
	console.log(term);
	const url = await getGif(term);
	console.log(url);
	$('#pics').append(`<img src='${url}' class='giffy' >`);
	$('#search').val('');
});

$('#deleteGifs').on('click', function(evt) {
	evt.preventDefault();
	$('#pics img').remove();
});
