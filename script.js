function scaleOut(data) {
    const tl = gsap.timeline();

    tl.to(data.current.container, {
        scale: 0.7,
        duration: 1.1,
        ease: "power3.inOut"
    });

    tl.to(data.current.container, {
        xPercent: -100,
        duration: 1.1,
        ease: "power4.inOut"
    });

    return tl;
}

function scaleIn(data) {
    const tl = gsap.timeline();

    gsap.set(data.next.container, {
        scale: 0.7,
        xPercent: 100,
    });

    tl.to(data.next.container, {
        scale: 1,
        delay: 0.5,
        duration: 1,
        ease: "power3.inOut"
    },"0");

    tl.to(data.next.container, {
        xPercent: 0,
        duration: 1,
        ease: "power3.inOut"
    },"0");
    return tl;
}

barba.init({
    transitions: [
        {
            name: "swap-reveal",

            leave(data) {
                return scaleOut(data);
            },

            enter(data) {
                return scaleIn(data);
            }
        }
    ]
});