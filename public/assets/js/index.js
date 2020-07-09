$(function(){
    $(".devour-burger").on('click',function(){
        console.log(this)
        var id = $(this).attr("data-id");
        var newDevour = $(this).data("devour");

        var newDevourState = {
            devour: 1
        };

        console.log(event);

        console.log(id);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
            }).then(
            function() {
                console.log("changed devour to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })

    $(".create-form").on('submit',(event)=>{
        event.preventDefault();
        let newBurger = {
            name: $("#exampleFormControlTextarea1").val().trim(),
            //devour: $("[name=devour]:checked").val().trim()
            devour: 0
        };
        console.log(newBurger);
        $.ajax("/api/burgers",{
            type:"POST",
            data:newBurger
        }).then(()=>{
            console.log("New Burger Created!");
            location.reload();
        });
    });


});