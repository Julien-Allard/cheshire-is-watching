document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const anchor = document.getElementById('cat');
  const rect = anchor.getBoundingClientRect();
  const anchorX = rect.left + rect.width / 2;
  const anchorY = rect.top + rect.height / 2;

  const angleDegree = angle(mouseX, mouseY, anchorX, anchorY);

  // console.log(angleDegree);

  const eyes = document.querySelectorAll('.eye');
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${180 + angleDegree}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const radius = Math.atan2(dy, dx); // rayon PI
  const degrees = (radius * 180) / Math.PI; // conversion en degrés pour le CSS
  return degrees;
}
