/*---------------------- SHOW MENU ------------------*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*--------------------- MENU SHOW ------------------*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*--------------------- MENU HIDDEN ---------------*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*--------------------- REMOVE MENU MOBILE ---------------*/

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*--------------------- SWIPER PROJECTS ---------------*/
let swiperProjects = new Swiper(".projects-container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56
    }
  }
});

/*--------------------- SWIPER TESTIMONIAL ---------------*/
let swiperTestimonial = new Swiper(".testimonial-container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/*--------------------- EMAIL JS ------------------*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    // Add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    // Show message
    contactMessage.textContent = "Write all the input field.";
  } else {
    // serviceID - templateID - #form - publicKey
    // emailjs
    //   .sendForm(
    //     "service_lytd648",
    //     "template_ttu95l1",
    //     "#contact-form",
    //     "-vMhhdP7IZv_7JpT3"
    //   )
    //   .then(
    //     () => {
    //       // Show message and add color
    //       contactMessage.classList.add("color-blue");
    //       contactMessage.textContent = "Message sent";

    //       // Remove message after five seconds
    //       setTimeout(() => {
    //         contactMessage.textContent = "";
    //       }, 5000);
    //     },
    //     (error) => {
    //       alert("OOOPS! SOMETHING HAS FAILED...", error);
    //     }
    //   );

    Email.send({
      SecureToken : "84a2578c-d1fe-42cf-9801-2dc0de43ad82",
      To : 'manjursk209@gmail.com',
      From : contactEmail.value,
      Subject : `Contacted from Portfolio`,
      Body : contactProject.value,
    }).then(
      // message => alert(message)
      (message) => {
        //       // Show message and add color
              contactMessage.classList.add("color-blue");
              contactMessage.textContent = "Message sent";
    
              // Remove message after five seconds
              setTimeout(() => {
                contactMessage.textContent = "";
              }, 5000);
            },
            (error) => {
              alert("OOOPS! SOMETHING WENT WRONG...");
            }
    );

    // To clear the input field
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

/*--------------------- SCROLL SECTIONS ACTIVE LINK ------------------*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*--------------------- SHOW SCROLL UP ------------------*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*--------------------- DARK LIGHT THEME ------------------*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";
let nextImgEl = document.querySelector('.next-svg');
let expressImgEl = document.querySelector('.express-svg');
let websockerImgEl = document.querySelector('.websocket-svg');

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
  nextImgEl.src = document.body.classList.contains(darkTheme) ? '/assets/img/nextjs-svg-2.svg' : '/assets/img/next-dark.svg';
  expressImgEl.src = document.body.classList.contains(darkTheme) ? '/assets/img/express-light.svg' : '/assets/img/express-js.svg';
  websockerImgEl.src = document.body.classList.contains(darkTheme) ? '/assets/img/websocket-light.svg' : '/assets/img/websocket.svg';
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  nextImgEl.src = document.body.classList.contains(darkTheme) ? '/assets/img/nextjs-svg-2.svg' : '/assets/img/next-dark.svg';
  expressImgEl.src = document.body.classList.contains(darkTheme) ? '/assets/img/express-light.svg' : '/assets/img/express-js.svg';
  websockerImgEl.src = document.body.classList.contains(darkTheme) ? '/assets/img/websocket-light.svg' : '/assets/img/websocket.svg';
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*--------------------- CHANGE BACKGROUND HEADER ------------------*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*--------------------- SCROLL REVEAL ANIMATION ------------------*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
  // reset: true /* Animation repeat */
});

sr.reveal(
  `.home-data, .projects-container, .testimonial-container, .footer-container`
);
sr.reveal(`.home-info div`, { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(`.skills-content:nth-child(1), .contact-content:nth-child(1)`, {
  origin: "left"
});
sr.reveal(`.skills-content:nth-child(2), .contact-content:nth-child(2)`, {
  origin: "right"
});
sr.reveal(`.qualification-content, .services-card`, { interval: 100 });