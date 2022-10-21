const interval = setInterval(question, 1000);

function question(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}