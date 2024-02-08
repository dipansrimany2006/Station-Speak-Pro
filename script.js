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

function initMap() {
    // Replace the coordinates with your desired location
    const myLatLng = { lat: -34.397, lng: 150.644 };
  
    // Create a new map centered at the specified coordinates
    const map = new google.maps.Map(document.getElementById('map-container'), {
      zoom: 8, // Adjust the zoom level
      center: myLatLng,
    });
  
    // Add a marker at the specified coordinates
    const marker = new google.maps.Marker({
      position: myLatLng,
      map,
      title: 'Your Marker Title',
    });
}

function new_location() {
    const map = document.getElementById("map");
    var locationInput = document.getElementById("locationsearchform").value;
    
    // Split the location input into an array
    var location = locationInput.split(" ");

    // Join the array elements with "+" and encode the resulting string
    var loc = encodeURIComponent(location.join("+"));

    // Replace the previous code with the updated URL
    map.src = "https://www.google.co.in/maps?q=" + loc + "/@22.6779287,88.3434035,12.21z?entry=ttu&t=&z=13&ie=UTF8&iwloc=&output=embed";
}
