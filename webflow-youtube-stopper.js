// WEBFLOW CUSTOM CODE FOR PAUSING YOUTUBE VIDEOS ON CLICK OF A BUTTON OR BACKGROUND

const embeds = document.querySelectorAll("iframe.embedly-embed");

// get all close elements - elements with class ".popup_close" or ".popup_bg"
const closeElements = document.querySelectorAll(".popup_close, .popup_bg");

// map the embeds to an array of playerjs.Player objects
const players = Array.prototype.map.call(
  embeds,
  (embed) => new playerjs.Player(embed)
);

// when the player is ready, add event listeners - a click on any closeElement will pause all embeds
players.forEach((player) => {
  player.on("ready", () => {
    closeElements.forEach((closeElement) => {
      closeElement.addEventListener("click", () => {
        player.pause();
      });
    });
  });
});

// pause all embeds when the close button or background is clicked
for (let i = 0; i < closeElements.length; i++) {
  closeElements[i].addEventListener("click", () => {
    for (let j = 0; j < embeds.length; j++) {
      embeds[j].pause();
    }
  });
}
