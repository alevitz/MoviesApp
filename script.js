//capture vals form each input 
//function to capture values from dom
//build our html of what will insert onto page
//include button to remove each element

function captureValues() {
  let $movieTitle = $('#moviename').val();
  let $movieRating = $('#rating').val();

  return `${$movieTitle} My Rating: ${$movieRating}`;

}

function appendMovie(str) {
  let newElement = `<p class="movie">${str} <button class="remove">Remove</button><p>`;

  $(`.ratingscontainer`).append(newElement);

}

function removeMovie( event ) {
  let $target = $(event.target);
  $target.remove();
}

