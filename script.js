/* filepath: /C:/Users/Alisa/OneDrive/Documents/GitHub/Week_6b/script.js */
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const vh = window.innerHeight;
  
  // Calculate scroll percentage for cloud movement (0 to 1)
  const scrollPercent = Math.min(scrolled / vh, 1);
  
  // Move welcome text upward slightly
  const textTransform = scrolled * 0.15; // Slower movement than clouds
  document.querySelector('section').style.transform = `translateY(${-textTransform}px)`;
  
  // Move fixed clouds upward
  const cloudTransform = -scrolled;
  document.getElementById('cloud-floor').style.transform = `translateY(${cloudTransform}px)`;
  document.getElementById('cloud-floor-2').style.transform = `translateY(${cloudTransform}px)`;
  document.getElementById('clouds').style.transform = `translateY(${cloudTransform}px)`;
  document.getElementById('front-cloud').style.transform = `translateY(${cloudTransform}px)`;
  
  // Mountain parallax effects
  document.getElementById('back-mountain').style.transform = `translateY(${scrolled * 0.2}px)`;
  document.getElementById('front-mountain').style.transform = `translateY(${scrolled * 0.3}px)`;
  
  // Single cloud horizontal movement
  document.getElementById('cloud-single').style.transform = `translateX(${-scrolled * 0.5}px)`;
});