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
  smallrags: ['html', 'css', 'javascript'],
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
  smallrags: ['html', 'css', 'javascript'],
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
  smallrags: ['html', 'css', 'javascript'],
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
  smallrags: ['html', 'css', 'javascript'],
  classN: 'cla-4',
},
];
// pop up functions
