/////// Code it yourself :)
$(function(){
  $("#btnAdd").click(function(){

    //valuee
    newdiv=$("<div></div>");
    mytext=$("<label/>");
    mytext.text($("#taskInput").val());
    mytext.addClass("task");
    newdiv.append(mytext).appendTo('.tasksBox');

    //done
    done = $(" <button> Done </button>");
    done.addClass("done");
    newdiv.append(done);
    done.click(function(){    
        $(this).parent().addClass("TaskDone");
    });


    //delete button
    deletebtn=$("<button>DELETE</button>");
    deletebtn.addClass("delete");
    newdiv.append(deletebtn).appendTo('.tasksBox');
    deletebtn.click(function(){
      $(this).parent().remove();
    });

    

    });

});