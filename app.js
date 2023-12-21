// accessing the toggle button
const toggleButton = document.querySelector('.toggle-button');
const navBarLinks = document.querySelectorAll('.nav-li');
const navButtons = document.querySelector('.nav-buttons');
const heading = document.querySelector('.nav-heading');
const dropButtonLinks = document.querySelectorAll('.dropbtn')

toggleButton.addEventListener('click', () => {
    navBarLinks.forEach(link => {
        link.classList.toggle('active');
    });
    dropButtonLinks.forEach(link => {
        link.classList.toggle('active');
    });
    navButtons.classList.toggle('active');
    // heading.classList.add('heading-center');
});