// if(window.innerWidth <= 768){
//     document.body.classList.remove('bg-gradient-to-br','from-purple-800','via-purple-900','to-indigo-900');
//     document.body.classList.add('bg-gradient-to-br','from-purple-600','via-purple-650','to-indigo-650');
// }

    // Particles 
const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));


const particlesContainer = document.getElementById('particles-container');
    particles.forEach(particle => {
      const div = document.createElement('div');
      div.className = 'absolute rounded-full bg-white/20 animate-float';
      div.style.width = `${particle.size}px`;
      div.style.height = `${particle.size}px`;
      div.style.left = `${particle.x}%`;
      div.style.top = `${particle.y}%`;
      div.style.animationDelay = `${particle.delay}s`;
      div.style.animationDuration = `${particle.duration}s`;
      particlesContainer.appendChild(div);
    });