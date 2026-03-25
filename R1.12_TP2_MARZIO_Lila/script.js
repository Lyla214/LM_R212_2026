const bouton = document.querySelector('.menu-btn'); 
// trouve le bouton menu dans la page
const menu = document.querySelector('.menu');
bouton.addEventListener('click', () => {
// lorsqu'on clique (état), le bouton s'ouvre
    menu.classList.toggle('is-open');
// si présent, l'action est réalisée
});

document.addEventListener('keydown', (event) => {
// action réalisée => appuyer sur une touche du clavier
  if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
// quand le modal "en savoir plus" est ouvert/visible, 
    modal.classList.remove('is-visible');
// touche du clavier nommé "Echap" enlève le pop-up
    btnOpen.focus();
  }
});

bouton.addEventListener('click', () => {
//   menu.classList.toggle('is-open');
  const isOpen = menu.classList.contains('is-open');
  bouton.setAttribute('aria-expanded', isOpen);
});
// aria-expanded = menu ouvert ou fermé

const btnOpen = document.querySelector('.modal-open');
const btnClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
// le modal est sélectionné, bouton ouvert et fermé

btnOpen.addEventListener('click', () => {
  modal.classList.add('is-visible');
});
// Au click, le modal "en savoir plus" s'ouvre

btnClose.addEventListener('click', () => {
  modal.classList.remove('is-visible');
});
// Au click, le modal "en savoir plus" se ferme quand il est présent

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
    modal.classList.remove('is-visible');
    btnOpen.focus();
  }
});

modal.addEventListener('click', (event) => {
  // Si le clic est sur le fond (la modale elle-même), pas sur son contenu
  if (event.target === modal) {
    modal.classList.remove('is-visible');
    btnOpen.focus();
  }
});

function ouvrirModale() {
  modal.classList.add('is-visible');
  modal.setAttribute('aria-hidden', 'false');
}

 // le modal est seléctionné, et lorque c'est un bouton, pas de fermeture

function fermerModale() {
  modal.classList.remove('is-visible');
  modal.setAttribute('aria-hidden', 'true');
  btnOpen.focus();
}

btnOpen.addEventListener('click', ouvrirModale);
btnClose.addEventListener('click', fermerModale);

const questions = document.querySelectorAll('.faq-question');

// focus sur les questions dans la FAQ

questions.forEach((question) => {
  question.addEventListener('click', () => {
// à chaque fois qu'on clique sur une question, 
    const reponse = question.nextElementSibling;
    const estDejaOuverte = reponse.classList.contains('is-visible');
// la question s'ouvre, et si elle est déjà ouverte, elle est visible
    reponse.classList.toggle('is-visible');
       // Fermer toutes les réponses
    document.querySelectorAll('.faq-answer').forEach((r) => {
      r.classList.remove('is-visible');
    });

    // Si elle n'était pas ouverte, l'ouvrir
    if (!estDejaOuverte) {
      reponse.classList.add('is-visible');
    }
  });
});

