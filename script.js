$(document).ready(function(){

  $.getJSON( "./urls.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      $.ajax({
       url:val.url,
       type:'GET'
      })
      .done(function(data) {
          var content = $(data).find('table.toccolours');

          $('#content table').append(`
            <tr>
             <td>`+$(data).find('h1.firstHeading').text()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("Rechtsform") td').text()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("Staat") td span').text()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("Sitz") td').html()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("Bankleitzahl") td').text()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("BIC") td').text()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("Gründung") td').text()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("Website") td').text()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("Bilanzsumme") td').text()+`</td>
             <td>`+$(data).find('table.toccolours tr:contains("Mitarbeiter") td').text()+`</td>
            </tr>
           `);
      })
      .fail(function() {
          var content = $(data).find('table.toccolours');
          $('table').append(`
            <tr>
             <td>`+val.name+`</td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
            </tr>
           `);
      })
    });
  });

})
