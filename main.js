

// let myElement ;

// window.addEventListener("keypress", function(e) {
//     if (e.key == 'a') {
//         document.querySelector('audio[data-key = "65"]').play();
//         myElement = document.querySelector('div[data-key = "65"]');
//         myElement.classList.add("playing");
// 	}
//     if (e.key == 'z') {
//         document.querySelector('audio[data-key = "90"]').play()
//         myElement = document.querySelector('div[data-key = "90"]');
//         myElement.classList.add("playing");
//         }
//     if (e.key == 'e') {
//         document.querySelector('audio[data-key = "69"]').play()
//         myElement = document.querySelector('div[data-key = "69"]');
//         myElement.classList.add("playing");
//         }
//     if (e.key == 'q') {
//         document.querySelector('audio[data-key = "81"]').play()
//         myElement = document.querySelector('div[data-key = "81"]');
//         myElement.classList.add("playing");
//         }
//     if (e.key == 's') {
//         document.querySelector('audio[data-key = "83"]').play()
//         myElement = document.querySelector('div[data-key = "83"]');
//         myElement.classList.add("playing");
//         }
//     if (e.key == 'd') {
//         document.querySelector('audio[data-key = "68"]').play()
//         myElement = document.querySelector('div[data-key = "68"]');
//         myElement.classList.add("playing");
//         }
//     if (e.key == 'w') {
//          document.querySelector('audio[data-key = "87"]').play()
//          myElement = document.querySelector('div[data-key = "87"]');
//          myElement.classList.add("playing");
//         }
//     if (e.key == 'x') {
//         document.querySelector('audio[data-key = "88"]').play()
//         myElement = document.querySelector('div[data-key = "88"]');
//         myElement.classList.add("playing");
//         }
//     if (e.key == 'c') {
//         document.querySelector('audio[data-key = "67"]').play()
//         myElement = document.querySelector('div[data-key = "67"]');
//         myElement.classList.add("playing");
//         }
//         setTimeout(() => {
//         myElement.classList.remove("playing");
//         }, 250);
//   });    


function playing_audio(keycode) {
    document.querySelector('audio[data-key="' + keycode + '"]').play();
    document.querySelector('div[data-key="' + keycode + '"]').classList.toggle("playing")();
    // console.log(keycode);
}

window.addEventListener('keydown', (event) => {
    playing_audio(event.keyCode);
    // console.log(event.keyCode);
});


window.addEventListener('keyup', (event) => {
    playing_audio(event.keyCode);
    // console.log(event.keyCode);
});
    












