let articleFooter = document.querySelector('.article__footer');
let authorBlock = document.querySelector('.article__author');
let articleLinks = document.querySelector('.article__links');
let shareBtn = document.querySelector('.article__shareBtn');
let shareBtnSVG = shareBtn.querySelector('svg');

switch (document.documentElement.clientWidth > 768) {
  case false:
    shareBtn.addEventListener('click', mobileLayout);
    break;
  default:
    shareBtn.addEventListener('click', desktopLayout);
}

function mobileLayout() {
  switch (authorBlock.style.display) {
    case 'none':
      authorBlock.style.display = 'flex';

      articleLinks.style.display = 'none';
      
      articleFooter.style.backgroundColor = 'transparent';
      articleFooter.style.paddingBlockStart = '10px';

      shareBtn.classList.remove('active');
      break;
    default:
      authorBlock.style.display = 'none';

      articleLinks.style.display = 'flex';

      articleFooter.style.backgroundColor = 'hsl(217, 19%, 35%)';
      articleFooter.style.paddingBlockStart = '16px';

      shareBtn.classList.add('active');
  }
}

function desktopLayout() {
  switch (articleLinks.style.display) {
    case 'flex':
      articleLinks.style.display = 'none';

      shareBtn.classList.remove('active');
      break;
    default:
      articleLinks.style.display = 'flex';

      shareBtn.classList.add('active');
  }
}