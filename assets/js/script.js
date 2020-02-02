const fill = document.querySelector('.fill'); //élément de base
const empties = document.querySelectorAll('.empty'); 

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold'; //tant que c'est tenu
  setTimeout(() => (this.className = 'invisible'), 0); //rendre invisible l'image prise dans la base avec la class inéxistante "invisible" qui n'affichera rien
}

function dragEnd() {
  this.className = 'fill'; //dès que l'on va lâcher en dehors de la base il retrouve la class de base "fill"
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}


