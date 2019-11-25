const container = document.getElementById('container')

const url = '';
// construct a url which will return a list of movies from the tmdb api
// Youll need to create an account with tmbd and create an api key,
// youll also need to find the correct api endpoint in the documentation.

ajax({url: url}, processData);

function processData(result, data){
  var movieData = JSON.parse(data);
	console.log('IF YOU SEE DATA YOUVE COMPLETED TASK 1', movieData)
	// in your console you will see the data returned from the api
	//TASK
	//Pass just the results through to the loopResults function below
	//( just the array of 20 results, not the whole object response being displayed in the console)
}

function loopResults(movies){
	console.log('IF YOU SEE ONLY AN ARRAY OF 20 RESULTS BELOW YOU HAVE COMPLETED THE FIRST TASK:')
	console.log(movies)
}

function renderItem(item){
	//this function has already been written for you
	console.log('IF YOU SEE THIS PRINTED 20 TIMES IN A ROW YOU HAVE COMPLETED THE SECOND TASK')
	//create div and give it a class we can refer to in css
	const div = document.createElement('DIV')
	div.className = 'itemContainer'
	// create image and put it inside the div
	const img = document.createElement('IMG')
	img.src = 'http://image.tmdb.org/t/p/w185' + item.poster_path
	div.appendChild(img)
	//create title and put it inside the div
	const title = document.createElement('H4')
	title.innerHTML = item.title 
	div.appendChild(title)
	//put the whole div in the container
	container.appendChild(div)
}

//TASK
// change the URL we are using to call the api so the response only includes comedy movies
// https://developers.themoviedb.org/3/discover/movie-discover 
// you will have to read the documentation to find out how to do this.  
// You'll need to ammend the query string

//TASK
// change the URL we are using to call the api so the response only includes TV SHOWS
// HINT
// This might have a knock on effect which you'll have to debug and fix.

//TASK 
// using javascript (and css if you'd like), change the style of the movies being displayed.
//Make the images bigger and position the text absolutely over the top of the image.

//TASK
// See what you can do with the weather
// https://darksky.net/dev


