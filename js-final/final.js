function createStory() {
  const name1 = document.getElementById("name1").value;
  const adjective1 = document.getElementById("adjective1").value;
  const creature1 = document.getElementById("creature1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const adjective3 = document.getElementById("adjective3").value;
  const verb1 = document.getElementById("verb1").value;
  const creature2 = document.getElementById("creature2").value;
  const name2 = document.getElementById("name2").value;
  const object = document.getElementById("object").value;
  const power = document.getElementById("power").value;
  const adjective4 = document.getElementById("adjective4").value;
  const adjective5 = document.getElementById("adjective5").value;




  const story = `Once upon a time, in a land faraway, there lived a ${adjective1} ${creature1} named ${name1}. ${name1} was a little bit of an outcast in the ${creature1} village because they were known for being extremely ${adjective2} and ${adjective3}. One day when ${name1} was ${verb1} in the woods, they met a ${creature2} named ${name2}. ${name2} had a magical ${object} that granted the beholder the power of ${power}. ${name2} could sense that ${name1} needed some help due to their ${adjective4} demeanor so the ${creature2} handed over the ${object} to the poor ${creature1} ${name1}. When ${name1} arrived back to the village, they showed all of their ${creature1} friends their new power and everyone thought it was ${adjective5}. The end!`;

  document.getElementById("story").innerHTML = story;
}