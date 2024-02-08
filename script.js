const answers=[];
const question=["What is the exact location of my train?","From which platform will my train depart?","At what time will my train arrive?","By how much time my train is delayed?"];
function scripting(n){
    const view_box=document.getElementById("view_port");
    view_box.innerHTML="<h3>"+question[n-1]+"</h3><span>From:<input type='text' placeholder='Enter station name' id='from'></span><i class='fa-solid fa-arrow-right-arrow-left' onclick='reverse()'></i><span>To:<input type='text' placeholder='Enter station name' id='to'></span>Train Number:<input type='number' placeholder='Enter train number(optional)'><button>Find Train</button>"
}
function reverse(){
    var from=document.getElementById('from');
    var to=document.getElementById('to');
    var temp=to.value;
    to.value=from.value;
    from.value=temp;
}
function appear(){
    const boxes=document.getElementsByClassName("boxes");
    for(i=0;i<4;i++){
        for(j=0;j<=100;j+=30){
            boxes[i].style.filter="opacity("+j+"%)";
            window.setTimeout(console.log('Works'), 2000);
        }
    }
}
