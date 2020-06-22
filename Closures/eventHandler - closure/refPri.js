function checkButton(btn,label){
    btn.addEventListener('click',()=>{
        console.log(`The ${label} button is clicked`);
    });
}


var button = document.getElementById('btn');

checkButton(button,'Submit');


console.log("check");

