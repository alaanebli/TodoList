function add() {
    let txt = $('#inputBox').val(); 
    $("#todo").append( " <div class='Box'> <p id='#draggable' class='ui-state-default'> "+txt+"</p> <button class='removebtn' onclick='this.parentNode.remove()'> <i  class='material-icons'>delete	</i> </button>    </div>" );
    $('#inputBox').val("") ; 

    
      $( "#done, #todo" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

  }
  
  function remove(x){
    x.remove() ; 
    
  }


  