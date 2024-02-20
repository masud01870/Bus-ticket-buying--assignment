function scrollToSeatSection() {
    // Find the position of the seat section
    const seatSection = document.getElementsByClassName('seat-section')[0];
    const sectionPosition = seatSection.offsetTop;

    // Scroll to the position of the seat section smoothly
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}


// const gridItems = document.querySelectorAll('.grid-item');

// for (let i = 0 ; i < gridItems.length; i++) {
//     gridItems[i].addEventListener('click', function() {
//         console.log('Clicked:', this.textContent);
//     });
// }