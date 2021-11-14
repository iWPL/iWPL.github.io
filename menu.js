const hamburger = document.getElementById('hamburger');
const trainingMenu = document.getElementById('trainingMenu');

const toggleTrainingSubmenu = () => {
  // console.log('yeay');
  const twisty = document.getElementById('trainingMenuTwisty');
  const subnav = document.getElementById('trainingSubnav');
  // console.log(twisty);
  if (twisty.classList.contains('twistyOpen')) {
    twisty.classList.remove('twistyOpen');
    twisty.classList.add('twistyClosed');
    subnav.classList.add('subnav_closed');
    subnav.classList.remove('subnav_open');
  } else {
    twisty.classList.remove('twistyClosed');
    twisty.classList.add('twistyOpen');
    subnav.classList.add('subnav_open');
    subnav.classList.remove('subnav_closed');
  }
};

trainingMenu.addEventListener('click', toggleTrainingSubmenu);
