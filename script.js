const page = document.getElementById("page");
const messageInput = document.getElementById("messageInput");
const displayMessage = document.getElementById("displayMessage");

const photoUpload = document.getElementById("photoUpload");
const teacherPhoto = document.getElementById("teacherPhoto");

const audioUpload = document.getElementById("audioUpload");
const teacherAudio = document.getElementById("teacherAudio");


// OPEN CARD
function openCard() {
    page.classList.add("flipped");
}


// CLOSE CARD
function closeCard() {
    page.classList.remove("flipped");
}


// UPDATE MESSAGE
function updateMessage() {
    displayMessage.innerText = messageInput.value;

    // Close the page after updating
    page.classList.remove("flipped");
}


// ADD PHOTO
photoUpload.addEventListener("change", function(event) {

    const file = event.target.files[0];

    if (file) {
        const imageURL = URL.createObjectURL(file);
        teacherPhoto.src = imageURL;
    }

});


// ADD AUDIO
audioUpload.addEventListener("change", function(event) {

    const file = event.target.files[0];

    if (file) {
        const audioURL = URL.createObjectURL(file);

        teacherAudio.src = audioURL;

        alert("Audio added successfully! 🎵");
    }

});


// PLAY AUDIO
function playAudio() {

    if (!teacherAudio.src) {
        alert("Please add an audio file first.");
        return;
    }

    teacherAudio.play();
}


// STOP AUDIO
function stopAudio() {

    teacherAudio.pause();
    teacherAudio.currentTime = 0;

}
