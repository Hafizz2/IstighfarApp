let count = 0;
const countEl = document.getElementById("count");
const rewardEl = document.getElementById("reward");
const button = document.getElementById("floating-button");

// Load saved count
window.onload = () => {
  const saved = localStorage.getItem("istighfarCount");
  if (saved) {
    count = parseInt(saved);
    countEl.textContent = count;
    updateRewardMessage(count);
  }
};

// Count logic
button.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
  updateRewardMessage(count);
  localStorage.setItem("istighfarCount", count);
});

// Reward messages
function updateRewardMessage(count) {
  if (count >= 1000) {
    rewardEl.textContent =
      "MashaAllah! Allah forgives your sins and increases your peace.";
  } else if (count >= 500) {
    rewardEl.textContent = "You're being purified by dhikr. Keep going!";
  } else if (count >= 100) {
    rewardEl.textContent = "Each istighfar brings you closer to Jannah.";
  } else {
    rewardEl.textContent =
      "Start your journey of forgiveness. Allah is waiting.";
  }
}

// Dragging logic
let isDragging = false;
let offsetX, offsetY;

button.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - button.getBoundingClientRect().left;
  offsetY = e.clientY - button.getBoundingClientRect().top;
  document.body.classList.add("dragging");
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.right = "auto";
    button.style.bottom = "auto";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.classList.remove("dragging");
});
