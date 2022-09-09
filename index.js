const menu = document.querySelector('.li-class2');
const detail = document.querySelector('.mobile-modal');
const buttonX = document.querySelector('.close-btn');
const body = document.querySelector('.bbb');

function open() {
  detail.classList.toggle('hide');
  menu.classList.toggle('hide');
  body.classList.toggle('blur');
}

function close() {
  detail.classList.toggle('hide');
  menu.classList.toggle('hide');
  body.classList.toggle('blur');
}

menu.addEventListener('click', open);
buttonX.addEventListener('click', close);

const modalLinks = document.getElementsByClassName('m-links');

modalLinks[0].addEventListener('click', close);
modalLinks[1].addEventListener('click', close);
modalLinks[2].addEventListener('click', close);

const projects = [{
  id: '1',
  title: 'Tonic',
  feature: ['Canopy', 'Back End Dev', 2015],
  short: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  long: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://ahmednazirmusah.github.io/myPortfolio/',
  cardImage: 'works/Snapshoot-Portfolio1.svg',
  dotImg: 'works/Counter.svg',
  bigtags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  smalltags: ['html', 'css', 'javascript'],
  classN: 'cla-1',
},
{
  id: '2',
  title: 'Multi-Post Stories',
  feature: ['Canopy', 'Back End Dev', 2015],
  short: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  long: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://ahmednazirmusah.github.io/myPortfolio/',
  cardImage: 'works/Snapshoot-Portfolio2.svg',
  dotImg: 'works/Counter.svg',
  bigtags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  smalltags: ['html', 'css', 'javascript'],
  classN: 'cla-2',
},
{
  id: '3',
  title: 'Tonic',
  feature: ['Canopy', 'Back End Dev', 2015],
  short: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  long: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://ahmednazirmusah.github.io/myPortfolio/',
  cardImage: 'works/Snapshoot-Portfolio3.svg',
  dotImg: 'works/Counter.svg',
  bigtags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  smalltags: ['html', 'css', 'javascript'],
  classN: 'cla-3',
},
{
  id: '4',
  title: 'Multi-Post Stories',
  feature: ['Canopy', 'Back End Dev', 2015],
  short: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  long: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveLink: 'https://ahmednazirmusah.github.io/myPortfolio/',
  cardImage: 'works/Snapshoot-Portfolio4.svg',
  dotImg: 'works/Counter.svg',
  bigtags: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  smalltags: ['html', 'css', 'javascript'],
  classN: 'cla-4',
},
];
// functions for works
const cardsEl = document.querySelector('.works');
projects.forEach((cardModal) => {
  cardsEl.innerHTML += `
  <div class="card1 c-class">
        <img src="${cardModal.cardImage}" alt="snaphot" class="p-img">
        <div>
          <h2>${cardModal.title}</h2>
          <section class="u-c">
            <h5>${cardModal.feature[0]}</h5>
            <img src="${cardModal.dotImg}" alt="counter">
            <h5 class="sec">${cardModal.feature[1]}</h5>
            <img src="${cardModal.dotImg}" alt="counter">
            <h5 class="sec">${cardModal.feature[2]}</h5>  
          </section>
          <p>
          A daily selection of privately personalized reads; no accounts or sign-ups required.
          </p>
          <ul class="u-html">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
          <button class="button see"><h4>See Project</h4></button>
        </div> 
      </div>`;
});

const popUp = (i) => `
<section class="modal-holder">
  <div class="mod-1">
    <h2 class="tonic-title">${projects[i].title}</h2>
    <button class="closePopup"><img src="works/icon.svg"></button>
  </div>
  <div class="u-c">
    <h5>${projects[i].feature[0]}</h5>
    <img src="${projects[i].dotImg}"  alt="counter">
    <h5 class="sec">${projects[i].feature[1]}</h5>
    <img src="${projects[i].dotImg}" alt="counter">
    <h5 class="sec"${projects[i].feature[2]}</h5>  
  </div>
  <img src="${projects[i].cardImage}" alt="snaphot" class="ing">
  <div class="modal-div">
    <p>${projects[i].long}</p>
    <div>
      <ul class="u-html">
        <li>${projects[i].smalltags[0]}</li>
        <li>${projects[i].smalltags[1]}</li>
        <li>${projects[i].smalltags[2]}</li>
      </ul>
      <ul class="u-html">
        <li>${projects[i].bigtags[3]}</li>
        <li>${projects[i].bigtags[4]}</li>
        <li>${projects[i].bigtags[5]}</li>
      </ul>
      <div>
        <a href="#" class="button"><h4>See live</h4></a>
        <a href="#" class="button"><h4>See source</h4></a>
      </div>
    </div>
  </div>
</section>
`;

const seeProject = document.querySelectorAll('.see');
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    const mainHolder = document.createElement('div');
    mainHolder.classList.add('pop-modal');
    mainHolder.innerHTML = popUp(i);
    document.body.appendChild(mainHolder);
    body.classList.toggle('blur');
    document.body.style.overflow = 'hidden';
    function pClose() {
      document.body.removeChild(mainHolder);
      body.classList.toggle('blur');
      document.body.style.overflow = 'visible';
    }
    const closepop = document.querySelector('.closePopup');
    closepop.addEventListener('click', pClose);
  });
}
/* Email Validation Code */

const mainForm = document.getElementById('form-input');
const validator = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}/;
mainForm.addEventListener('submit', (e) => {
  const emailentry = document.getElementById('email-input').value;
  const message = document.getElementById('message');
  if (!validator.test(emailentry)) {
    e.preventDefault();
    message.innerHTML = 'Invalid Email : Email Required in Lower Case';
    message.style.color = '#ff0000';
    message.classList.add('h-light');
    return false;
  }
  return true;
});