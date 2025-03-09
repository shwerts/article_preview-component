let articleFooter = document.querySelector('.article__footer');
let authorBlock = document.querySelector('.article__author');
let articleLinks = document.querySelector('.article__links');
let shareBtn = document.querySelector('.article__shareBtn');
let shareBtnSVG = shareBtn.querySelector('svg');

shareBtn.addEventListener('click', mobileLayout);

function mobileLayout() {
  switch (authorBlock.style.display) {
    case 'none':
      authorBlock.style.display = 'flex';

      articleLinks.style.display = 'none';
      
      articleFooter.style.backgroundColor = 'transparent';
      articleFooter.style.paddingBlockStart = '10px';

      shareBtn.style.backgroundColor = 'hsl(210, 46%, 95%)';
      shareBtnSVG.firstElementChild.setAttribute('fill', '#6E8098');
      break;
    default:
      authorBlock.style.display = 'none';

      articleLinks.style.display = 'flex';

      articleFooter.style.backgroundColor = 'hsl(217, 19%, 35%)';
      articleFooter.style.paddingBlockStart = '16px';

      shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)';
      shareBtnSVG.firstElementChild.setAttribute('fill', '#fff');
  }
}