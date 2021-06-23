const changePassword = document.querySelector('.section-profile__name.change-pasword');


changePassword.addEventListener('click', demo);

function demo(e) {
  const label = e.path[2].querySelector('.change-password-container');
  console.log("presioando ", e.path[2].querySelector('.change-password-container'))

  if (label.getAttribute('class').includes('none')) {
    label.classList.remove('none');
  } else {
    label.classList.add('none');
  }


}