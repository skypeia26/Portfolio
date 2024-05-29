let message = document.getElementById("message")
let inputText = document.getElementById("input-text")

function changeText(){
    let text = inputText.value.toLowerCase();
    let theme = document.getElementById("themes")

   
    if (text === "winter") {
        theme.style.backgroundImage = "url('src/image/Winter.jpg')"; 
        message.innerText = text;
    } 
    
    else if (text === "summer") {
        theme.style.backgroundImage = "url('src/image/Summer.jpg')";
        message.innerText = text;
    } 
    
    else if (text === "autumn") {
        theme.style.backgroundImage = "url('src/image/Autumn.jpg')";
        message.innerText = text;
    } 
    
    else if (text === "spring") {
        theme.style.backgroundImage = "url('src/image/Spring.jpg')";
        message.innerText = text;
    } 

    else {
        alert("Please Enter a season");
        theme.style.backgroundImage = "url('src/image/fourseasons.jpg')";
        message.innerText = "Enter a different season!";
    }
    
}
