let articleFooter = document.querySelector('.article__footer');
let authorBlock = articleFooter.querySelector('.article__author');

// Tooltip in desktop
let articleLinks = articleFooter.querySelector('.article__links');
let articleLinksPointer = document.querySelector('.article__links__pointer');

let shareBtn = articleFooter.querySelector('.article__shareBtn');
let shareBtnSVG = shareBtn.querySelector('svg');

if (document.documentElement.clientWidth < 768)
  shareBtn.addEventListener('click', mobileLayout);
  else shareBtn.addEventListener('click', desktopLayout);

function mobileLayout() {
  switch (authorBlock.style.display) {
    case 'none':
      authorBlock.style.display = 'flex';

      articleLinks.style.display = 'none';
      
      articleFooter.classList.remove('links')

      shareBtn.classList.remove('active');
      break;
    default:
      authorBlock.style.display = 'none';

      articleLinks.style.display = 'flex';

      articleFooter.classList.add('links');

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
      if (articleLinks.getBoundingClientRect().right > document.documentElement.clientWidth) {
        let overflowEdge = articleLinks.getBoundingClientRect().right - document.documentElement.clientWidth;

        articleLinks.style.right = parseInt(getComputedStyle(articleLinks).right) + overflowEdge + 16 + 'px';

        articleLinksPointer.style.right = parseFloat(getComputedStyle(articleLinksPointer).right) - overflowEdge - 16 + 'px';
      }

      shareBtn.classList.add('active');
  }
}