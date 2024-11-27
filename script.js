function menu(event) {
    event.preventDefault();
    
    const nav = document.querySelector('nav');
    const elements = document.querySelectorAll('article, section, address');
    
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
        elements.forEach(element => {
            element.style.display = 'none';
        });
    } else {
        nav.style.display = 'none';
        elements.forEach(element => {
            element.style.display = 'flex';
        });
    }
}