//function addingEventListener() {

const input = document.getElementById('button');
function clickAlert() {}

input.addEventListener('click', clickAlert);
    alert('i was clicked');
input.addEventListener('click', function () {
    alert('I was clicked!');
});

