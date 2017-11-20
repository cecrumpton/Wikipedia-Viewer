//the part that gets the api request without the search term
  var api = "https://en.wikipedia.org/w/api.php?"

  function searchLikeABoss() {

    //removes elements with class names if they exist, so that old searches are removed from the page
    $(".description").remove();
    $(".random").remove();
    $(".bigLink").remove();

    //adds the information in the search term to the api
    var searchInput = document.getElementById("search").value;
    var searchInputMod = searchInput.replace(/ /g, "%20");
    var apiFull = api + "action=opensearch&search=" + searchInputMod + "&format=json&origin=*";

    //the AJAX
    $.ajax(apiFull, {
      dataType: "json",
      type: "GET",
      success: function(data) {
        //retrieves the information to be displayed on the page after the AJAX call
        var numberOfResults = data[1].length;
        for (i=0; i<numberOfResults; i++) {
            var resultButton = $("<a></a>").attr({
              class: "btn btn-primary bigLink",
              href: data[3][i],
              target: "_blank"
            }).text(data[1][i]) //end resultButton info
            var description = $("<p></p>").attr("class", "description").text(data[2][i]);

            //adds search information below the search box
            $(".searchResultsData").append(resultButton, description);
        } //end for loop
      } //end success function
    }) //end ajax
  } //end function searchLikeABoss
//end of program
