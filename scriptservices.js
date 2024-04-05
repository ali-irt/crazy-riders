$(document).ready(function() {
    $(".service-info").click(function() {
      var serviceType = $(this).text().split(" ")[1].toLowerCase();
      var popupContent = "**Here are some general tips for " + serviceType + "**\n" +
        "- Regularly check your tire pressure and tread depth.\
    }};";
      $("#popup-content").html(marked(popupContent));   
      $('#myModal').modal('show');       
    });   
});