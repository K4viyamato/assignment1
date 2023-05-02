
var firstImage = document.getElementById('one');
var secondImage = document.getElementById('two');
var thirdImage = document.getElementById('three');
var forthImage = document.getElementById('four');
var defaulty = document.getElementById('five');



var action = (element) => {

    // when mouse hover over(https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
    element.addEventListener("mouseenter",()=>{

        defaulty.src=element.src;
        // alert('wadehari');


        element.style.width="190px";
        element.style.height="250px";
        element.style.transition="0.6s";

        //trasition 
        defaulty.style.width="520px";
        defaulty.style.height="670px";
        defaulty.style.transition="0.6s";

        //change the background color
        document.body.style.backgroundColor = element.alt;
        // alert(element.alt);



    });

    // when mouse leave(https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
    element.addEventListener("mouseleave",()=>{

    
        // alert('wadehari');
        element.style.width="200px";
        element.style.height="260px";
        element.style.transition="0.6s";

        //trasitionn
        defaulty.style.width="500px";
        defaulty.style.height="650px";


    });

}


action(firstImage);
action(secondImage);
action(thirdImage);
action(forthImage);

