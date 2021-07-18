const API_KEY= "840523a722e0ffc0a860538562e81c5e";

function findMovie() {
    //requète ajax
    $.ajax({
		url:"https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY,
		method: "GET",
		dataType: "json",
		data: {
		},
		headers: {}
	}).done(getMovies)
	.fail(function(jqXHR, textStatus, errorThrown) {
		console.log("Erreur de récupération")
	});
}

function getMovies(response) {
    
	//gestion de l'affichage des films les 20 films tendances de la semaine

    /*Le titre, l'image du film, la note du film, combien de personnes ont votés, la date de sortie du film, la description
    si vous avez envi vous pouvez rajouter tout ce que vous voulez comme infos (auteurs...)*/
    let liste = response.results;
    let url = "https://image.tmdb.org/t/p/original";
    for(let i = 0; i < liste.length; i++) {
    	$('.Film').append($('<div>').addClass('test')
			.append($('<h2>').text(liste[i].title))
			.append($('<img>').attr('src', url + liste[i].poster_path))
			.append($('<p>').text("Note: "+ liste[i].vote_average + "/10"))
			.append($('<p>').text(liste[i].vote_count + " personnes ont voté."))
			.append($('<p>').text(liste[i].release_date))
			.append($('<p>').text(liste[i].overview))
			);
    }
    
    
}

