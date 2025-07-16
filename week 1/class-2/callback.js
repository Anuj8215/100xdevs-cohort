//setTimeout()

//Assignment

// === Terminal Clock ===
function pad(num) {
  return num < 10 ? "0" + num : num;
}

setInterval(() => {
  const now = new Date();
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  console.clear();
  console.log("🕒 Terminal Clock:");
  console.log(timeStr);
}, 1000);

// === Countdown from 30 to 0 ===
let count = 30;
const countdown = setInterval(() => {
  console.log(`Countdown: ${count}`);
  count--;
  if (count < 0) {
    clearInterval(countdown);
    console.log("✅ Countdown complete!");
  }
}, 1000);

// === setTimeout Delay Measurement ===
const expectedDelay = 1000; // ms
const start = Date.now();

setTimeout(() => {
  const end = Date.now();
  const actualDelay = end - start;
  console.log(`\n⏱️ Measuring setTimeout delay:`);
  console.log(`Expected delay: ${expectedDelay}ms`);
  console.log(`Actual delay: ${actualDelay}ms`);
}, expectedDelay);
