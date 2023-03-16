const customName = document.getElementById('customname');

const randomize = document.querySelector('.randomize');

const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'On a freezing cold day in January, about 2 degrees fahrenheit, :insertx: was going on a ski trip. They decided to put on their favorite :inserty: to prepare for the trip. Once they got on the mountain, everyone was laughing at them for their silly outfit. A little girl even threw a :insertz: at their head that was nearly 20 pounds.'; 
let insertX = ['Dwayne "The Rock" Johnson', 'Martha Stewart', 'Drake', 'CeeLo Green', 'Jamie Lee Curtis'];
let insertY = ['ballgown', 'top hat', 'gorilla costume', 'fedora'];
let insertZ = ['meat loaf', 'bowling pin', 'water balloon', 'chinchilla', 'leprechaun'];
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

let xItem, yItem, zItem;
xItem = randomValueFromArray(insertX);
yItem = randomValueFromArray(insertY);
zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('A little girl', name)+ '';
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(20/14) + ' stone';
      const temperature =  Math.round((2-32)*(5/9)) + ' degrees centigrade';
      newStory = newStory.replace("2 degrees fahrenheit", temperature);  
      newStory = newStory.replace("20 pounds", weight); 
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }