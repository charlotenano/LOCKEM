document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("footer.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load footer.html (${response.status})`);
        }
        return response.text();
      })
      .then((html) => {
        footerPlaceholder.outerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading footer component:", error);
      });
  }

  const track = document.getElementById("govCarouselTrack");
  const prevBtn = document.querySelector(".gov-carousel-btn.prev");
  const nextBtn = document.querySelector(".gov-carousel-btn.next");

  if (track && prevBtn && nextBtn) {
    const getScrollStep = () => {
      const firstCard = track.querySelector(".story-card");
      return firstCard ? firstCard.offsetWidth + 24 : 380;
    };

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: getScrollStep(), behavior: "smooth" });
    });
  }
});

const mobileDrawer = document.querySelector(".mobile-drawer");
const menuOpenButtons = [...document.querySelectorAll("[data-menu-open]")];
const menuCloseButton = document.querySelector("[data-menu-close]");
if (mobileDrawer) document.body.append(mobileDrawer);

function closeMobileMenu({ restoreFocus = true } = {}) {
  if (!mobileDrawer) return;
  mobileDrawer.classList.remove("open");
  mobileDrawer.setAttribute("aria-hidden", "true");
  menuOpenButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
  document.body.classList.remove("mobile-menu-open");
  if (restoreFocus) menuOpenButtons[0]?.focus();
}

menuOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add("open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    button.setAttribute("aria-expanded", "true");
    document.body.classList.add("mobile-menu-open");
    menuCloseButton?.focus();
  });
});
menuCloseButton?.addEventListener("click", () => closeMobileMenu());
document.addEventListener("click", (event) => {
  if (!mobileDrawer?.classList.contains("open")) return;
  if (
    mobileDrawer.contains(event.target) ||
    menuOpenButtons.some((button) => button.contains(event.target))
  )
    return;
  closeMobileMenu({ restoreFocus: false });
});
mobileDrawer?.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => closeMobileMenu({ restoreFocus: false }));
});
document.addEventListener("keydown", (event) => {
  if (!mobileDrawer?.classList.contains("open")) return;
  if (event.key === "Escape") {
    closeMobileMenu();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = [...mobileDrawer.querySelectorAll("button, a[href]")];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024 && mobileDrawer?.classList.contains("open")) {
    closeMobileMenu({ restoreFocus: false });
  }
});

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter;
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.style.display = filter === "all" || card.dataset.category === filter ? "" : "none";
    });
  });
});

const threatObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      document.querySelectorAll(".scroll-nav a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: 0 },
);
document.querySelectorAll(".threat-card").forEach((card) => threatObserver.observe(card));

document.querySelectorAll(".threat-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    document.querySelectorAll(".threat-tile").forEach((item) => item.classList.remove("active"));
    tile.classList.add("active");
    const target = document.querySelector(tile.dataset.target);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("highlight");
    window.setTimeout(() => target.classList.remove("highlight"), 1100);
  });
});

document.querySelectorAll(".hotspot").forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    document.querySelectorAll(".hotspot").forEach((item) => item.classList.remove("active"));
    hotspot.classList.add("active");
  });
});

const lawObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".law-index a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-20% 0px -65%", threshold: 0 },
);
document.querySelectorAll(".law-section").forEach((section) => lawObserver.observe(section));

const progressRows = [...document.querySelectorAll(".check-row")];
function updateProgress() {
  const count = progressRows.filter((row) => row.querySelector("input").checked).length;
  const label = document.querySelector("#progress-label");
  const bar = document.querySelector("#progress-bar");
  if (label) label.textContent = `${count} of 3 done`;
  if (bar) bar.style.width = `${(count / 3) * 100}%`;
  progressRows.forEach((row) =>
    row.classList.toggle("checked", row.querySelector("input").checked),
  );
}
progressRows.forEach((row) => {
  row.addEventListener("click", (event) => {
    if (event.target.tagName !== "INPUT") {
      event.preventDefault();
      const input = row.querySelector("input");
      input.checked = !input.checked;
    }
    if (row.dataset.evidence) {
      document
        .querySelector(".evidence-detail")
        .classList.toggle("open", row.querySelector("input").checked);
    }
    updateProgress();
  });
});