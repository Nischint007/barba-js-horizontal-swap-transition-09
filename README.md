# 🚀 Barba.js Series – 09 Horizontal Swap Transition

This project is part of my Beginner → Advanced Barba.js Series, where I explore creative page transition techniques using Barba.js and GSAP.

👉 In this project, I recreate a Horizontal Swap Transition, where the current page scales down and slides out of the viewport while the next page enters from the opposite side and scales back to its original size.

---

## 📌 Overview

This transition transforms page navigation into a fluid motion experience.

As users navigate between pages, the outgoing view shrinks and moves away while the incoming view slides into place and restores itself to full scale. The result is a clean page-swapping illusion that adds depth and continuity without relying on overlays or fullscreen reveals.

---

## ✨ Features

* Horizontal page swap animation
* Synchronized scale and translation
* Smooth GSAP timeline sequencing
* Seamless Barba.js integration
* Lightweight and reusable structure

---

## ⚙️ How It Works

1. User clicks a navigation link
2. Current page scales down
3. Current page slides out to the left
4. Next page enters from the right
5. Next page scales back to full size
6. Transition completes seamlessly

---

## 🔹 Core Animation

```js
function scaleOut(data) {
    const tl = gsap.timeline();

    tl.to(data.current.container, {
        scale: 0.7,
        duration: 1.1
    });

    tl.to(data.current.container, {
        xPercent: -100,
        duration: 1.1
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
        duration: 1
    }, 0);

    tl.to(data.next.container, {
        xPercent: 0,
        duration: 1
    }, 0);

    return tl;
}
```

### ▶️ Outgoing Page

The current page scales down to 70% and slides out of the viewport, creating space for the next page.

### ▶️ Incoming Page

The next page begins off-screen at a reduced scale before sliding into position and restoring itself to full size.

---

## 🔹 Barba.js Integration

```js
barba.init({
    transitions: [{
        name: "swap-reveal",

        leave(data) {
            return scaleOut(data);
        },

        enter(data) {
            return scaleIn(data);
        }
    }]
});
```

Barba.js orchestrates both phases, creating a seamless page transition experience.

---

## 🧠 Key Takeaways

* Simple motion can create strong visual impact
* Scale and translation work together to create depth
* GSAP timelines simplify animation orchestration
* Barba.js enables smooth page-to-page navigation
* Transitions can enhance usability without becoming distracting

---

## ✍️ Author

### Nischint Singh

🔗 LinkedIn:
https://www.linkedin.com/in/nischint-singh-98a329314/
