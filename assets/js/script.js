const fill = document.querySelector('.fill'); //élément de base
const empties = document.querySelectorAll('.empty'); //élément vide

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) { //variable d'action entre chaque empties
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold'; //tant que c'est tenu
  setTimeout(() => (this.className = 'invisible'), 0); //rendre invisible l'image prise dans la base avec la class inéxistante "invisible" qui n'affichera rien
}

function dragEnd() {
  this.className = 'fill'; //dès que l'on va lâcher en dehors de la base il retrouve la class de base "fill"
}

function dragOver(e) { //au déplacement de l'élément
  e.preventDefault();
}

function dragEnter(e) {  //à l'entré dans une zone droppable
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() { //sort d'une zone droppable
  this.className = 'empty';
}

function dragDrop() { //lorsque l'on lache l'élément
  this.className = 'empty';
  this.append(fill);
}


