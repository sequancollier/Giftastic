$(document).ready(function(){
    // Initial array of football players
    var NflPlayers = ["Odell Beckham", "Antonio Brown", "Saqoun Barkley", "Julio Jones", "Todd Gurley"];

   // Event listener for our cat-button
   $("#NflPlayers").on("click", function() {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=fTM89p8b8ZJMLBqRBGb6hwuamR5iRi2Q&tag=search";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {

      // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var NflPlayers = $("<img>");

        // Setting the catImage src attribute to imageUrl
        Nflplayers.attr("src", imageUrl);
        NflPlayers.attr("alt", "Odell Beckham");

        // Prepending the NflPlayer to the images div
        $("#images").prepend(NflPlayers);
      });
  });
});

