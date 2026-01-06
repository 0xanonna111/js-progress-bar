const progress = document.getElementById("progress");
let value = 0;
let interval = null;

function startProgress() {
  if (interval) return;

  value = 0;
  progress.style.width = "0%";

  interval = setInterval(() => {
    value++;
    progress.style.width = value + "%";

    if (value >= 100) {
      clearInterval(interval);
      interval = null;
    }
  }, 50);
}
