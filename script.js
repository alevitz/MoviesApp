//capture vals form each input 
//function to capture values from dom
//build our html of what will insert onto page
//include button to remove each element

function captureValues() {
  let $movieTitle = $('#moviename').val();
  let $movieRating = $('#rating').val();

  $('#moviename').val("");
  $('#rating').val("");

  return `${$movieTitle} My Rating: ${$movieRating}`;

}

function appendMovie(str) {
  let newElement = `<p class="movie">${str} <button class="remove">Remove</button><p>`;

  $(`.ratingscontainer`).append(newElement);

}

function post () {
  appendMovie(captureValues());
}

function removeMovie( event ) {
  let $target = $(event.target);
  $target.parent().remove();
}

$(function () {
  $(".submit").on("click", post);

  $(".ratingscontainer").on("click", ".remove", removeMovie);

})