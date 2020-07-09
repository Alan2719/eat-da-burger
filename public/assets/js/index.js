$(function(){
    $(".devour-burger").on('click',(event)=>{
        var id = $(this).data("id");
        var newDevour = $(this).data("devour");

        var newDevourState = {
            devour: newDevour
        };

        console.log(newDevourState);
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
            devour: 1
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