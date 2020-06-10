const triggers = document.querySelectorAll('.explanation');
const highlight = document.createElement('span');
const wrap = document.querySelector('.wrap');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(e) {
  // highlight
  const linkCoords = e.target.getBoundingClientRect();
  const parentCoords = e.target.parentElement.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  // dropdown
  e.target.classList.add('trigget-enter');
  setTimeout(() => {
    e.target.classList.add('trigger-enter-active');
  }, 150);

  const dropdown = e.target.nextElementSibling;
  console.log(dropdown);
  dropdown.classList.add('open');
  dropdown.style.width = `${dropdown.width}px`;
  dropdown.style.height = `${dropdown.height}px`;
  dropdown.style.transform = `translate(${coords.left}px, ${coords.top-210-32}px)`;

}

function handleLeave(e) {
e.target.classList.remove('trigger-enter', 'trigger-enter-active');
e.target.classList.remove('open');
}

triggers.forEach(i => i.addEventListener('mouseenter', highlightLink));
triggers.forEach(i => i.addEventListener('mouseleave', handleLeave));