const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['../wa10/pic1.jpeg', `../wa10/pic2.jpeg`, `../wa10/pic3.jpeg`, `../wa10/pic4.jpeg`, '../wa10/pic5.jpeg'];
/* Declaring the alternative text for each image file */
const alts = {
  '../wa10/pic1.jpeg' : 'Cat laying',
  '../wa10/pic2.jpeg' : 'Cat close up',
  '../wa10/pic3.jpeg' : 'Cat with a flower',
  '../wa10/pic4.jpeg' : 'Cat making funny face',
  '../wa10/pic5.jpeg' : 'Cat sitting',
}

/* Looping through images */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });