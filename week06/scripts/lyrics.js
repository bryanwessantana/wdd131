document.getElementById('currentyear').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const enrollForm = document.getElementById('enrollForm');

    if (enrollForm) {
        enrollForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const course = document.getElementById('course').value;
            const comments = document.getElementById('comments').value;

            const enrollment = {
                name,
                email,
                course,
                comments,
                timestamp: new Date().toISOString()
            };

            localStorage.setItem('lastEnrollment', JSON.stringify(enrollment));
            alert(`Thanks for enrolling, ${name}! We’ll contact you soon.`);
            enrollForm.reset();
        });
    }

    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            courseCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            alert(`You selected the ${card.dataset.level} course.`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("languageSelect");
    const languageGroups = document.querySelectorAll(".language-group");

    function showLanguage(language) {
        languageGroups.forEach(group => {
            if (group.id === language) {
                group.classList.add("active");
            } else {
                group.classList.remove("active");
            }
        });
    }

    select.addEventListener("change", () => {
        showLanguage(select.value);
    });

    // Default display
    showLanguage("english");
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const footerRight = document.createElement('div');
    footerRight.className = 'footer-right';
    footerRight.setAttribute('data-aos', 'fade-left');

    footerRight.innerHTML = `
      <a href="https://br.linkedin.com/in/lyrics-english-school-30bb98238?trk=public_profile_browsemap" target="_blank" rel="noopener">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/lyrics_ingles_personalizado/" target="_blank" rel="noopener">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/lyricseducacao/" target="_blank" rel="noopener">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.youtube.com/@lyricsidiomas8791" target="_blank" rel="noopener">
        <i class="fab fa-youtube"></i>
      </a>
    `;

    const footerContainer = document.querySelector('footer .footer-container');
    if (footerContainer) {
        footerContainer.appendChild(footerRight);
    }
});  