// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};





// MODAL

function memory() {
  var visited = sessionStorage['visited'];
  if (!visited) {
     myModal();
     sessionStorage['visited'] = true;
  }

  function myModal(){
    // const modalOuvert = document.getElementById('open-modal');
    const modalModal = document.getElementById('modal');
    const modalBody = document.getElementById('body');
    const modalFerme = document.getElementById('close-modal');
    const modalExtend = document.getElementById('extend-modal');
    var para = document.createElement("P");

    
    modalModal.style.display = "block";
    modalBody.style.opacity = "0.7";
      
    
    modalFerme.onclick = function() {
    modalModal.style.display = "none";
    modalBody.style.opacity = "1";
    }

    modalExtend.onclick = function() {
    document.getElementById("modal").innerHTML = '<div class="modal-inner content center"><h2>Congrats!</h2><p>    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, dolorem maiores sunt dolore voluptas asperiores aliquam debitis mollitia vitae harum repudiandae voluptatem exercitationem fuga necessitatibus porro, placeat eos recusandae? Nostrum.</p><button id="close-modal">CLOSE</button></div>';
  }
};
}

window.onload = setTimeout(memory,3000);



