/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.12
  }

);


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });



/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenu =
  document.querySelector(".mobile-menu");

const navLinks =
  document.querySelector(".nav-links");


mobileMenu?.addEventListener(
  "click",
  () => {

    navLinks.classList.toggle("mobile-open");

  }
);



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document
  .querySelectorAll(".nav-link")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        navLinks.classList.remove(
          "mobile-open"
        );

      }
    );

  });



/* =====================================================
   ACTIVE NAV LINK
===================================================== */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


const navigationLinks =
  document.querySelectorAll(
    ".nav-link"
  );


window.addEventListener(
  "scroll",
  () => {

    let currentSection = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 180;

      const sectionHeight =
        section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY <
          sectionTop + sectionHeight
      ) {

        currentSection =
          section.getAttribute("id");

      }

    });


    navigationLinks.forEach((link) => {

      link.classList.remove(
        "active"
      );


      if (
        link.getAttribute("href") ===
        `#${currentSection}`
      ) {

        link.classList.add(
          "active"
        );

      }

    });

  }
);



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
  document.querySelector(".navbar");


window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 30) {

      navbar.style.background =
        "rgba(6, 7, 10, 0.90)";

      navbar.style.boxShadow =
        "0 20px 70px rgba(0,0,0,.45)";

    } else {

      navbar.style.background =
        "rgba(8,10,14,.72)";

      navbar.style.boxShadow =
        "0 20px 60px rgba(0,0,0,.35)";

    }

  }
);



/* =====================================================
   TERMINAL TYPING EFFECT
===================================================== */

const cursor =
  document.querySelector(".cursor");


setInterval(() => {

  if (cursor) {

    cursor.style.opacity =
      cursor.style.opacity === "0"
        ? "1"
        : "0";

  }

}, 500);



/* =====================================================
   PROJECT CARD TILT
===================================================== */

const projectCards =
  document.querySelectorAll(
    ".project-card"
  );


projectCards.forEach((card) => {

  card.addEventListener(
    "mousemove",
    (event) => {

      if (window.innerWidth < 900)
        return;


      const rect =
        card.getBoundingClientRect();


      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;


      const rotateX =
        ((y - centerY) / centerY) * -2;


      const rotateY =
        ((x - centerX) / centerX) * 2;


      card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        "";

    }
  );

});
