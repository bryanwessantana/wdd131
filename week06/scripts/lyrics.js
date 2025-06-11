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
