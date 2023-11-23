  (function() {

  const sliders = document.querySelectorAll('.testimony_body');
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value = 0;

  buttonNext.addEventListener('click', () => {
    changePosition(1);
  });

  buttonBefore.addEventListener('click', () => {
    changePosition(-1);
  });

  const changePosition = (add) => {
    sliders[value].classList.remove('testimony_body--show');
    value += add;

    if (value >= sliders.length) {
      value = 0;
    } else if (value < 0) {
      value = sliders.length - 1;
    }

    sliders[value].classList.add('testimony_body--show');
  };
})();


