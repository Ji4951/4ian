const notes = [
  "I hope today makes you smile.",
  "Don't forget to drink enough water.",
  "I'm always rooting for you.",
  "Please don't skip your meals.",
  "Take a break if you're tired.",
  "You deserve every good thing.",
  "Thank you for staying.",
  "I hope you're proud of yourself.",
  "You make my days brighter.",
  "I hope something good happens to you today.",
  "Remember to be kind to yourself.",
  "I'm so proud of how far you've come.",
  "You don't have to figure everything out today.",
  "I hope you get the rest you deserve.",
  "Keep chasing your dreams, one step at a time.",
  "No matter what happens, I'm cheering for you.",
  "I hope this little note made you smile.",
  "You're stronger than you think.",
  "The world is a little brighter with you in it."
];
let opened = false;

function openJar(){

    const jar = document.getElementById("jar");

    const noteBox = document.getElementById("noteBox");

    const noteText = document.getElementById("noteText");

    if(!opened){

        jar.src="images/jarterbuka.png";

        opened=true;

    }

    const random =
    Math.floor(Math.random()*notes.length);

    noteText.innerHTML=notes[random];

    noteBox.style.display="block";

}