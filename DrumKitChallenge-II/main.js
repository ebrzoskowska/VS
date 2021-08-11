const sounds = {
  a: `sounds/boom.wav`,
  s: `sounds/clap.wav`,
  d: `sounds/hihat.wav`,
  f: `sounds/kick.wav`,
  g: `sounds/openhat.wav`,
  h: `sounds/ride.wav`,
  j: `sounds/snare.wav`,
  k: `sounds/tink.wav`,
  l: `sounds/tom.wav`,
};

Object.keys(sounds).forEach(key => {
  const btn = document.createElement("button");
  document.querySelector("#drum-pad").appendChild(btn);
  const audio = document.createElement("audio");
  audio.src = sounds[key];
  sounds[key] = audio;
  btn.textContent = key;
  btn.addEventListener("click", e => {
    audio.currentTime = 0;
    audio.play();
  });
});

document.addEventListener("keydown", e => {
  if (sounds[e.key]) {
    sounds[e.key].currentTime = 0;
    sounds[e.key].play();
  }
});
