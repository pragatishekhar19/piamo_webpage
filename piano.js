function playSound(note) {
    const audioElement = document.getElementById(note + 'Note');
    audioElement.currentTime = 0;
    audioElement.play();
  }

  document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');

    keys.forEach(function (key) {
      key.addEventListener('click', function () {
        const note = key.classList.contains('white') ? 'c' : 'd'; 
        playSound(note);
      });
    });
  });