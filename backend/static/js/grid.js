document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('heroGrid');
  const ctx = canvas.getContext('2d');
  let width, height;

  
  function resizeCanvas() {
    const hero = canvas.parentElement;
    width = hero.offsetWidth;
    height = hero.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  
  let mouseX = -1000; 
  let mouseY = -1000;


  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });


  canvas.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  const gridSize = 40; 
  const baseColor = 'rgba(255, 255, 255, 0.1)'; 
  const highlightColor = 'rgba(255, 255, 255, 0.4)'; 
  const highlightDistance = 80; 

  function drawGrid() {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;

    for (let x = 0; x <= width; x += gridSize) {
      const distance = Math.abs(mouseX - x);
      ctx.strokeStyle = distance < highlightDistance ? highlightColor : baseColor;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y <= height; y += gridSize) {
      const distance = Math.abs(mouseY - y);
      ctx.strokeStyle = distance < highlightDistance ? highlightColor : baseColor;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    requestAnimationFrame(drawGrid);
  }

  drawGrid();
});