$(document).ready(function() {
  console.log( "ready!" );

  $("#btn").click(function(){
    navigator.geolocation.getCurrentPosition( function(position){
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
      $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude, function( data ) {
        $("#result" ).text(data.results[1].formatted_address);
        console.log(data);
        alert( "Load was performed." );
      });
    });
  });
});
