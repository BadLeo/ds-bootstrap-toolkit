document.addEventListener("DOMContentLoaded", () => {
  const anime = window.anime;
  const revealAnimatedElements = () => {
    document.querySelectorAll("[data-animate]").forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
  };

  if (!anime) {
    revealAnimatedElements();
    return;
  }

  anime({
    targets: "[data-animate]",
    opacity: [0, 1],
    translateY: [24, 0],
    scale: [0.98, 1],
    delay: anime.stagger(90, { start: 120 }),
    duration: 900,
    easing: "easeOutExpo",
    complete: revealAnimatedElements,
  });

  window.setTimeout(revealAnimatedElements, 1400);
  window.addEventListener("pageshow", revealAnimatedElements);

  anime({
    targets: ".gear[data-spin]",
    rotate: (_, i) => (i % 2 === 0 ? 360 : -360),
    duration: (_, i) => 18000 + i * 2000,
    easing: "linear",
    loop: true,
  });

  anime({
    targets: ".floating-lantern",
    translateY: [-8, 8],
    duration: 2600,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });

  const spinAccordionGears = (button, opening) => {
    const startGear = button.querySelector(".accordion-gear-start i");
    const endGear = button.querySelector(".accordion-gear-end i");

    if (!startGear || !endGear) {
      return;
    }

    anime.remove([startGear, endGear]);
    anime({
      targets: startGear,
      rotate: opening ? "+=360" : "-=180",
      scale: [1, 1.15, 1],
      duration: opening ? 700 : 420,
      easing: "easeOutBack",
    });
    anime({
      targets: endGear,
      rotate: opening ? "-=360" : "+=180",
      scale: [1, 1.15, 1],
      duration: opening ? 700 : 420,
      easing: "easeOutBack",
    });
  };

  document.querySelectorAll(".ds-accordion .accordion-collapse").forEach((collapse) => {
    collapse.addEventListener("show.bs.collapse", (event) => {
      const button = document.querySelector(`[data-bs-target="#${event.target.id}"]`);
      if (button) {
        spinAccordionGears(button, true);
      }
    });

    collapse.addEventListener("hide.bs.collapse", (event) => {
      const button = document.querySelector(`[data-bs-target="#${event.target.id}"]`);
      if (button) {
        spinAccordionGears(button, false);
      }
    });
  });

  document.querySelectorAll(".ds-gear-toggle-input").forEach((input) => {
    input.addEventListener("change", () => {
      const track = input.nextElementSibling;
      const knob = track?.querySelector(".ds-gear-toggle-knob");
      const icon = knob?.querySelector("i");
      if (!track || !knob || !icon) {
        return;
      }

      anime.remove(icon);
      anime.remove(track);
      anime({
        targets: icon,
        rotate: input.checked ? "+=180" : "-=180",
        scale: [1, 1.08, 1],
        duration: 420,
        easing: "easeOutBack",
      });
      anime({
        targets: track,
        scaleX: [1, 1.03, 1],
        duration: 280,
        easing: "easeOutQuad",
      });
      anime({
        targets: track,
        boxShadow: input.checked
          ? [
              "inset 0 0 0 1px rgba(255, 227, 173, 0.06), 0 4px 14px rgba(0, 0, 0, 0.28)",
              "inset 0 0 0 1px rgba(255, 227, 173, 0.12), 0 0 0 0.22rem rgba(185, 146, 71, 0.14)",
              "inset 0 0 0 1px rgba(255, 227, 173, 0.06), 0 4px 14px rgba(0, 0, 0, 0.28)",
            ]
          : [
              "inset 0 0 0 1px rgba(255, 227, 173, 0.06), 0 4px 14px rgba(0, 0, 0, 0.28)",
              "inset 0 0 0 1px rgba(255, 227, 173, 0.1), 0 0 0 0.18rem rgba(108, 79, 44, 0.12)",
              "inset 0 0 0 1px rgba(255, 227, 173, 0.06), 0 4px 14px rgba(0, 0, 0, 0.28)",
            ],
        duration: 420,
        easing: "easeOutQuad",
      });
    });
  });

  const updateOrb = (orb, value) => {
    const clamped = Math.max(0, Math.min(100, value));
    const viewport = orb.querySelector(".ds-orb-viewport");
    const surface = orb.querySelector(".ds-orb-surface");
    orb.dataset.value = String(clamped);
    orb.style.setProperty("--orb-fill", `${clamped}%`);
    orb.classList.toggle("is-full", clamped >= 100);
    orb.classList.toggle("is-empty", clamped <= 0);
    if (viewport) {
      viewport.style.height = `${clamped}%`;
    }
    if (surface) {
      const dy = clamped / 100 - 0.5;
      const halfWidth = Math.sqrt(Math.max(0, 0.25 - dy * dy));
      const widthPct = (halfWidth / 0.5) * 50;
      const insetPct = Math.max(6, 50 - widthPct);
      surface.style.left = `${insetPct}%`;
      surface.style.right = `${insetPct}%`;
      surface.style.opacity = clamped <= 0 || clamped >= 100 ? "0" : "1";
    }
    const valueNode = orb.parentElement?.querySelector(".ds-orb-value");
    if (valueNode && !valueNode.dataset.locked) {
      valueNode.textContent = `${Math.round(clamped)}%`;
    }
  };

  document.querySelectorAll(".ds-orb[data-value]").forEach((orb) => {
    const value = Number.parseFloat(orb.dataset.value || "0");
    updateOrb(orb, value);
  });

  document.querySelectorAll(".ds-orb[data-demo-loop]").forEach((orb) => {
    const state = { value: 0 };
    anime({
      targets: state,
      value: 100,
      direction: "alternate",
      loop: true,
      duration: 5200,
      easing: "easeInOutSine",
      update: () => updateOrb(orb, state.value),
    });
  });

  document.querySelectorAll(".btn-ds, .btn-outline-ds, .ds-card, .ds-sample-frame").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      anime.remove(element);
      anime({
        targets: element,
        scale: 1.02,
        translateY: -4,
        duration: 260,
        easing: "easeOutQuad",
      });
    });

    element.addEventListener("mouseleave", () => {
      anime.remove(element);
      anime({
        targets: element,
        scale: 1,
        translateY: 0,
        duration: 260,
        easing: "easeOutQuad",
      });
    });
  });

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.getAttribute("data-copy-target");
      const code = document.getElementById(targetId);
      if (!code) {
        return;
      }

      try {
        await navigator.clipboard.writeText(code.innerText.trim());
        const original = button.innerText;
        button.innerText = "Copied";
        anime({
          targets: button,
          scale: [1, 1.06, 1],
          duration: 380,
          easing: "easeOutBack",
        });
        window.setTimeout(() => {
          button.innerText = original;
        }, 1200);
      } catch (error) {
        button.innerText = "Clipboard blocked";
      }
    });
  });
});
