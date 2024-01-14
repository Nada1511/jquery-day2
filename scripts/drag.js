$('#draggable').draggable();
$('#droppable').droppable({
  drop: function (event, ui) {
    $('#draggable').hide('explode');
    $(this).addClass('ui-state-highlight').find('img').html('Dropped!');
  },
});
