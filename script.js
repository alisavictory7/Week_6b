gsap.registerPlugin(ScrollTrigger);

let speed = 100;

// --- Forest Scene ---
let forestScene = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroll-trigger",
        start: "top top",
        end: "20% bottom",  // End the forest scene after 20% of the scroll
        scrub: 1
    }
});
gsap.set("#forest-scene",{visibility:"visible"});
gsap.set("#desert-scene",{visibility:"hidden"});
gsap.set("#city-scene",{visibility:"hidden"});
gsap.set("#sky-scene",{visibility:"hidden"});
gsap.set("#moon-scene",{visibility:"hidden"});
gsap.set("#rural-scene",{visibility:"hidden"});

forestScene.to("#forest-scene image[xlink\\:href*='forest_back.png']", { y: 0.5 * speed }, 0);
forestScene.to("#forest-scene image[xlink\\:href*='forest_mid.png']", { y: 1 * speed }, 0);
forestScene.to("#forest-scene image[xlink\\:href*='forest_long.png']", { y: 1.5 * speed }, 0);
forestScene.to("#forest-scene image[xlink\\:href*='forest_short.png']", { y: 2 * speed }, 0);
forestScene.to("#forest-scene image[xlink\\:href*='forest_front.png']", { y: 2.5 * speed }, 0);
forestScene.to("#forest-bg", {attr: { fill: "url(#forest-grad2)" } }, 0);


// --- Desert Scene ---
let desertScene = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroll-trigger",
        start: "20% top",   // Start when forest scene ends
        end: "40% bottom",     // End after another 20%
        scrub: 1,
      onEnter: function(){
        gsap.set("#desert-scene",{visibility:"visible"});
        gsap.set("#forest-scene",{visibility:"hidden"});
      },
      onLeaveBack: function() {
       gsap.set("#forest-scene",{visibility:"visible"});
       gsap.set("#desert-scene",{visibility:"hidden"});
      }
    }
});

desertScene.to("#desert-scene image[xlink\\:href*='desert_dunemid.png']", { y: 1 * speed }, 0);
desertScene.to("#desert-scene image[xlink\\:href*='desert_dunefrontt.png']", { y: 2 * speed }, 0);
desertScene.to("#desert-scene image[xlink\\:href*='desert_cloud.png']", { x: -1 * speed }, 0); // Example: move clouds
desertScene.to("#desert-bg", {attr: { fill: "url(#desert-grad2)" } }, 0);
// --- City Night Scene ---
let cityScene = gsap.timeline({
     scrollTrigger: {
        trigger: "#scroll-trigger",
        start: "40% top",   // Start when the desert scene ends
        end: "60% bottom",   // End after another 20%
        scrub: 1,
        onEnter: function(){
          gsap.set("#city-scene",{visibility:"visible"});
          gsap.set("#desert-scene",{visibility:"hidden"});

        },
        onLeaveBack: function() {
        gsap.set("#desert-scene",{visibility:"visible"});
        gsap.set("#city-scene",{visibility:"hidden"});
      }
    }
});


cityScene.to("#city-scene image[xlink\\:href*='parallaxcitybackgroundmountain.png']", { y: 0.5 * speed }, 0);
cityScene.to("#city-scene image[xlink\\:href*='parallaxcitybackgroundmountain2.png']", { y: 1 * speed }, 0);
cityScene.to("#city-scene image[xlink\\:href*='parallaxcitybuildings.png']", { y: 1.5 * speed }, 0);
cityScene.to("#city-scene image[xlink\\:href*='parallaxcityfront.png']", { y: 2 * speed }, 0);
cityScene.to("#city-scene image[xlink\\:href*='parallaxcitywater.png']", { y: 0.8 * speed }, 0); // Slight movement for water
cityScene.to("#city-scene image[xlink\\:href*='parallaxcitywaterreflexion.png']", { y: 0.8 * speed, opacity: 0.8 }, 0);
cityScene.to("#city-bg", {attr: { fill: "url(#city-grad2)" } }, 0);
// --- Sky Scene ---
let skyScene = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroll-trigger",
        start: "60% top",   // Start when forest scene ends
        end: "80% bottom",  // End the forest scene after 20% of the scroll
        scrub: 1,
      onEnter: function(){
        gsap.set("#sky-scene",{visibility:"visible"});
         gsap.set("#city-scene",{visibility:"hidden"});
      },
      onLeaveBack: function() {
        gsap.set("#sky-scene",{visibility:"hidden"});
         gsap.set("#city-scene",{visibility:"visible"});
      }
    }
});

skyScene.to("#sky-scene image[xlink\\:href*='sky_back_mountain.png']", { y: 0.5 * speed }, 0);
skyScene.to("#sky-scene image[xlink\\:href*='sky_cloud_floor.png']", { y: 1.2 * speed }, 0);
skyScene.to("#sky-scene image[xlink\\:href*='sky_cloud_floor_2.png']", { y: 2.5 * speed , x: -1*speed}, 0);
skyScene.to("#sky-scene image[xlink\\:href*='sky_clouds.png']", { y: 1 * speed, x: -0.5*speed }, 0);
skyScene.to("#sky-scene image[xlink\\:href*='sky_front_cloud.png']", { y: 2 * speed , x: -1.2*speed}, 0);
skyScene.to("#sky-scene image[xlink\\:href*='sky_front_mountain.png']", { y: 1.5 * speed }, 0);
skyScene.to("#sky-scene image[xlink\\:href*='sky_cloud_single.png']", {  x: -2*speed }, 0);


// --- Moon Scene ---
let moonScene = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroll-trigger",
        start: "80% top",
        end: "90% bottom",
        scrub: 1,
      onEnter: function(){
        gsap.set("#moon-scene",{visibility:"visible"});
        gsap.set("#sky-scene",{visibility:"hidden"});

      },
      onLeaveBack: function() {
         gsap.set("#moon-scene",{visibility:"hidden"});
        gsap.set("#sky-scene",{visibility:"visible"});

      }
    }
});

moonScene.to("#moon-scene image[xlink\\:href*='moon_back.png']", { y: 0.5 * speed }, 0);
moonScene.to("#moon-scene image[xlink\\:href*='moon_mid.png']", { y: 1 * speed }, 0);
moonScene.to("#moon-scene image[xlink\\:href*='moon_front.png']", { y: 1.5 * speed }, 0);
moonScene.to("#moon-scene image[xlink\\:href*='moon_floor.png']", { y: 2 * speed }, 0);

// --- Rural Area Scene ---
let ruralScene = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroll-trigger",
        start: "90% top",
        end: "100% bottom",
        scrub: 1,
        onEnter: function(){
        gsap.set("#rural-scene",{visibility:"visible"});
        gsap.set("#moon-scene",{visibility:"hidden"});
      },
      onLeaveBack: function() {
         gsap.set("#rural-scene",{visibility:"hidden"});
        gsap.set("#moon-scene",{visibility:"visible"});
      }
    }
});


ruralScene.to("#rural-scene image[xlink\\:href*='ruralparallaxmountainback.png']", { y: 0.5 * speed }, 0);
ruralScene.to("#rural-scene image[xlink\\:href*='ruralparallaxmountainback2.png']", { y: 1 * speed }, 0);
ruralScene.to("#rural-scene image[xlink\\:href*='ruralparallaxmountain.png']", { y: 1.5 * speed }, 0);
ruralScene.to("#rural-scene image[xlink\\:href*='ruralparallaxvillage.png']", { y: 2 * speed }, 0);
ruralScene.to("#rural-scene image[xlink\\:href*='ruralparallaxriver.png']", { y: 1.2 * speed }, 0);
ruralScene.to("#rural-scene image[xlink\\:href*='ruralparallaxriverfront.png']", { y: 2.5 * speed }, 0);
ruralScene.to("#rural-scene image[xlink\\:href*='ruralparallaxclouds.png']", { x: -1 * speed }, 0); // Example: move clouds


//reset scrollbar position after refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};