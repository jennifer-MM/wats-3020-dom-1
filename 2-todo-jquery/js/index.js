//TODO add document ready function
$(function () {
      $("#todo-form").submit(function(event) {
          event.preventDefault();


          let itemElement = $("[name='item-input']");
          let itemValue = itemElement.val();
          

          // get the value of the input box using jQuery

          //check that user has input a value before proceeding
          if (itemValue.length !== 0) {

            $(".todo-list").append("<li><input type ='checkbox'><label>" + itemValue + " </label></li>");

              //create new item
              

              //set up toggle on check box click
              // TODO add the code to make this function get added to every :checkbox on the change event
              $(":checkbox").change(function (event) {
                if ($(this).is(':checked')) {
                  $(this).siblings("label").css("text-decoration", "line-through");
                } else {
                  $(this).siblings("label").css("text-decoration", "none");
                }
              }) // checkbox event function

            }

          }) // form submit
      }) // document ready