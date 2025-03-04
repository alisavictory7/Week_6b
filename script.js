window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const vh = window.innerHeight;
    const floatingWoman = document.getElementById('floating-woman');
    const time = Date.now() * 0.001; // Current time in seconds for smooth animation

    // Calculate woman's vertical position from scroll
    const startPosition = -100; // Starting position (vh)
    const finalPosition = 60;   // Final position (vh)
    const scrollProgress = Math.min(scrolled / (vh * 2), 1);
    
    // Calculate base position
    const basePosition = startPosition + ((100 - startPosition + finalPosition) * scrollProgress);
    const finalBasePosition = Math.min(basePosition, finalPosition);
    
    // Add bobbing movement once in final position
    if (scrollProgress >= 1) {
        // Vertical bobbing (±1vh)
        const verticalBob = Math.sin(time * 1.5) * 1;
        // Horizontal bobbing (±0.5vw)
        const horizontalBob = Math.sin(time * 2) * 0.5;
        
        // Apply bobbing animation
        floatingWoman.style.bottom = `${finalBasePosition + verticalBob}vh`;
        floatingWoman.style.left = `calc(50% - 15vw + ${horizontalBob}vw)`;
    } else {
        // Regular position during scroll up
        floatingWoman.style.bottom = `${finalBasePosition}vh`;
        floatingWoman.style.left = `calc(50% - 15vw)`;
    }

    // Welcome section fade out
    const welcomeOpacity = Math.max(0, 1 - (scrolled / vh));
    document.querySelector('.welcome-container').style.opacity = welcomeOpacity;

    // First scene (Sky) - starts after 1vh
    if (scrolled > vh) {
        const skyScroll = scrolled - vh;
        document.getElementById('back-mountain').style.transform = `translateY(${skyScroll * 0.2}px)`;
        document.getElementById('front-mountain').style.transform = `translateY(${skyScroll * 0.3}px)`;
        document.getElementById('cloud-single').style.transform = `translateX(${-skyScroll * 0.5}px)`;
    }

    // Forest scene - starts after 2vh
    if (scrolled > vh * 2) {
        const forestScroll = scrolled - (vh * 2);
        document.getElementById('forest-mountain').style.transform = `translateY(${forestScroll * 0.2}px)`;
        document.getElementById('forest-back').style.transform = `translateY(${forestScroll * 0.3}px)`;
        document.getElementById('forest-mid').style.transform = `translateY(${forestScroll * 0.4}px)`;
        document.getElementById('forest-long').style.transform = `translateY(${forestScroll * 0.5}px)`;
        document.getElementById('forest-short').style.transform = `translateY(${forestScroll * 0.6}px)`;
    }

    // Desert scene - starts after 3vh
    if (scrolled > vh * 3) {
        const desertScroll = scrolled - (vh * 3);
        document.getElementById('desert-mountain').style.transform = `translateY(${desertScroll * 0.2}px)`;
        document.getElementById('desert-dune-mid').style.transform = `translateY(${desertScroll * 0.3}px)`;
        document.getElementById('desert-dune-front').style.transform = `translateY(${desertScroll * 0.4}px)`;
        document.getElementById('desert-cloud').style.transform = `translateX(${-desertScroll * 0.5}px)`;
    }
});