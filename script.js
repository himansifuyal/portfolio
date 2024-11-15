const words = ["Web Developer", "Designer", "Creative Enthusiast"];
let wordIndex = 0;        // Track the current word index
let letterIndex = 0;      // Track the current letter position within the word
let isDeleting = false;   // Flag to toggle between typing and deleting
const typingElement = document.querySelector(".typing");

// Typing speed settings
const typingSpeed = 120;
const deletingSpeed = 60;
const pauseAfterTyping = 1000;
const pauseAfterDeleting = 300;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Deleting letters
        typingElement.textContent = "A " + currentWord.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
            setTimeout(type, pauseAfterDeleting); // Pause before starting the next word
        } else {
            setTimeout(type, deletingSpeed);
        }

    } else {
        // Typing letters
        typingElement.textContent = "A " + currentWord.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, pauseAfterTyping); // Pause before deleting starts
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = window.innerHeight * 0.85;

            if (sectionTop < revealPoint) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection(); // Initial check for sections already in view
});

// Handle like button functionality
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        let likeCount = button.nextElementSibling; // Select the like count span
        let currentLikes = parseInt(likeCount.textContent);
        likeCount.textContent = `${currentLikes + 1} likes`; // Increment like count
    });
});

// Toggle full description on click
document.querySelectorAll('.project-post').forEach(post => {
    post.addEventListener('click', () => {
        const fullDescription = post.querySelector('.full-description');
        fullDescription.style.display = fullDescription.style.display === 'block' ? 'none' : 'block';
    });
});
// Function to toggle like state for multiple buttons
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});
// Get all the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove 'active' class from all nav links
function removeActiveClass() {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
}

// Function to add 'active' class to the link corresponding to the section in view
function highlightNavLink() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      const id = section.getAttribute('id');
      const activeLink = document.querySelector(`#${id}Link`);
      removeActiveClass();
      activeLink.classList.add('active');
    }
  });
}

// Listen for scroll events and highlight the appropriate link
window.addEventListener('scroll', highlightNavLink);

// Initial highlight when the page loads
highlightNavLink();








