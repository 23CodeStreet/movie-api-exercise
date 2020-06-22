var container = document.querySelector('#container')

var url = '';
// Construct a URL which will return a list of the popular movies from the TMDB api
// You'll need to find the correct api endpoint in the documentation
//    You can find it at https://developers.themoviedb.org/3
// You'll also need to have a valid api key

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
	var div = document.createElement('div')
	div.className = 'itemContainer'
	// create image and put it inside the div
	var img = document.createElement('img')
	img.src = 'http://image.tmdb.org/t/p/w185' + item.poster_path
	div.appendChild(img)
	//create title and put it inside the div
	var title = document.createElement('h4')
  title.appendChild(document.createTextNode(item.title));
	div.appendChild(title)
	//put the whole div in the container
	container.appendChild(div)
}

// Once you've got it working, you can try to do some of these extra tasks
//
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


