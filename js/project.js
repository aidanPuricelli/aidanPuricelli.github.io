document.addEventListener('DOMContentLoaded', () => {
    const projects = ['div-art', 'mtg-ai', 'vinyl-vault'];
    let currentIndex = 0;
  
    const leftArrow = document.querySelector('.arrows .material-symbols-outlined:nth-child(1)');
    const rightArrow = document.querySelector('.arrows .material-symbols-outlined:nth-child(2)');
  
    function showProject(index) {
      projects.forEach((id) => {
        document.getElementById(id).style.display = 'none';
      });
  
      document.getElementById(projects[index]).style.display = 'block';
    }
  
    showProject(currentIndex);

    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % projects.length;
      showProject(currentIndex);
    });
  
    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length;
      showProject(currentIndex);
    });
});
  
