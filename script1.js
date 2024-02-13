document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("startBtn");
    const popups = document.querySelectorAll(".popup");
    const nextBtns = document.querySelectorAll("[id^='nextBtn']");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const backgroundMusic = document.getElementById("backgroundMusic");
  
    let popupIndex = 0;
    let noButtonClicks = 0;
  
    startBtn.addEventListener("click", function() {
      startBtn.style.display = "none";
      showPopup(popupIndex);
      backgroundMusic.play();
    });
  
    function showPopup(index) {
      popups.forEach(popup => popup.classList.remove("show"));
      popups[index].classList.add("show");
    }
  
    function increaseYesButtonSize() {
      yesBtn.style.fontSize = `${parseInt(getComputedStyle(yesBtn).fontSize) + 2}px`;
    }
  
    nextBtns.forEach((btn, index) => {
      btn.addEventListener("click", function() {
        popupIndex++;
        if (popupIndex < popups.length) {
          showPopup(popupIndex);
        } else {
          document.getElementById("finalPopup").classList.add("show");
        }
      });
    });
  
    yesBtn.addEventListener("click", function() {
      alert("Yes! Buti naman pumayag ka!");
    });
  
    noBtn.addEventListener("click", function() {
      noButtonClicks++;
      noBtn.textContent = `No (${noButtonClicks})`;
      increaseYesButtonSize();
  
      // No button click functionality
      if (noBtn.textContent.startsWith("No")) {
        noBtn.textContent = "Are you sure?";
      } else {
        noBtn.textContent = "NO (" + noButtonClicks + ")";
      }
    });
  
    // Heart animation
    const heartsContainer = document.getElementById("hearts-container");
    setInterval(createHeart, 500); // Adjust the interval as needed
  
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * window.innerWidth + "px";
      heartsContainer.appendChild(heart);
  
      // Remove hearts after animation ends
      heart.addEventListener("animationend", function() {
        heart.remove();
      });
    }
  });