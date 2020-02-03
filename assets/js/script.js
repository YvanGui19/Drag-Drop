document.addEventListener("DOMContentLoaded", function(event){
  console.log('loaded'); // Chargement du DOM


const fill = document.querySelector('.fill'); //élément de base
const empties = document.querySelectorAll('.empty'); // éléments vide

fill.addEventListener('dragstart', dragStart); //Mise en place de la méthode a chaque fois que l'événement est spécifié : ici L'utilisateur clic et commence a déplacer l'élément
fill.addEventListener('dragend', dragEnd);// ici oépration de déplacement se termine l'utilisateur relache

for (const empty of empties) { //variable d'action entre chaque empties
  empty.addEventListener('dragover', dragOver);// un élément en cours de déplacement est en cours de survol d'une zone de dépôt valide 
  empty.addEventListener('dragenter', dragEnter);//un élément en cours de déplacement arrive sur une zone de dépôt valide
  empty.addEventListener('dragleave', dragLeave);//un élément en cours de déplacement quitte une zone de dépôt valide
  empty.addEventListener('drop', dragDrop);//un élément est déposé sur une cible valide
}



function dragStart() {
  this.className += ' hold'; //tant que c'est tenu
  setTimeout(() => (this.className = 'invisible')); //rendre invisible l'image prise dans la base avec la class inéxistante "invisible" qui n'affichera rien
}

function dragEnd() {
  this.className = 'fill'; //dès que l'on va lâcher en dehors de la base il retrouve la class de base "fill"
}

function dragOver(e) { // au déplacement de l'élément
  e.preventDefault();
}

function dragEnter(e) { //à l'entré dans une zone droppable
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() { // sort d'une zone droppable
  this.className = 'empty';
}

function dragDrop() { // lorsque l'on lache l'élément
  this.className = 'empty';
  this.append(fill);
}

})
