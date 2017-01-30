var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('.workoutmain').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('workout-file.pdf');
});

$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){
      $(this).next().slideToggle('fast');


    });
  });
