let authorBlock = document.getElementsByClassName('article__author')[0];
let articleFooter = document.getElementsByClassName('article__footer')[0];
let shareBtn = document.getElementsByClassName('article__shareBtn')[0];

shareBtn.addEventListener('click', function() {
  switch (authorBlock.style.display) {
    case 'none':
      authorBlock.style.display = 'flex';
      articleFooter.style.backgroundColor = '#fff';
      articleFooter.style.paddingBlockStart = '10px';
      break;
    default:
      authorBlock.style.display = 'none';
      articleFooter.style.backgroundColor = 'hsl(217, 19%, 35%)';
      articleFooter.style.paddingBlockStart = '16px';
  }
});