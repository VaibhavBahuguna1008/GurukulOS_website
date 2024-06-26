var btn = document.querySelector("#who")
//it will make a function according to the event
var check = 0
btn.addEventListener("click",function(){
    if(check == 0){
        who.innerHTML = "Teacher"
        check = 1
    }else{
        who.innerHTML = "Student"
        check = 0
    }
})
var a = gsap.timeline()
function time(){
    var a = 0
    //Code inside function will display after 1s of interval
    setInterval(function(){
            //it will generate a variable with random values and increase it
            a = a + Math.floor(Math.random()*15)
            if(a<100){
                document.querySelector("#loader h1").innerHTML = a +"%"
            }else{
                a=100
                document.querySelector("#loader h1").innerHTML = a +"%"
            }
    },50)
}

a.to("#loader h1",{
    scale:1.2,
    delay:0.2,
    duration:0.8,
    onStart:time() //This will run the time func
})
a.to("#loader",{
    //it will slide the loader above the screen 
    top:"-100vh",
    duration:1,
    delay:0
})