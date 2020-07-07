$(function(){
    $(".devour-burger").on('click',(event)=>{
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");
    
        var newDevourState = {
        devour: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newDevourState
            }).then(
            function() {
                console.log("changed sleep to", newDevour);
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
            devour: false
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