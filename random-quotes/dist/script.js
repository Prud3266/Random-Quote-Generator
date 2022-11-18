const Quote = document.getElementById('quote');
const By = document.getElementById('by');

const getquote = async () => {
  
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cba7954da9msh471cabcfe861514p1362f1jsn48155097017b',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
	.then(response => response.json())
	.then(response => {
  Quote.innerText = response[0].text; 
  By.innerText = `- ${response[0].author}`
  })
	.catch(err => console.error(err));
}

const getQuote = () => getquote();