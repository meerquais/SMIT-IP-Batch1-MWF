// alert("Connect!");

// var button = document.getElementById("myButton");

// button.addEventListener("mouseover" , function(){
//     alert("Button Clicked!");
// });


emailjs.init("bwlK9TVEZNbvuJzZS");

var form = document.getElementById("contactForm");

form.addEventListener( "submit" , function(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

console.log("Name : " + name )
console.log("Email : " + email )
console.log("Message : " + message)


    const templateParams = {
        from_name: name,
        // from_email: email,
        message: message,
    }

    emailjs.send("service_0xxpsjp" , "template_hyxenbo" , templateParams)
    .then(function(response){
        alert("Email sent Successfully! Response: " + response.status);
        form.reset();
    }, function(error){
        alert("failed to send email. Error: " + error)
        console.log("failed to send email. Error: " + error)
    }
)



} )