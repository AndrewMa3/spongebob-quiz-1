let currentQuestion = 0;
let score = 0;
let questions = [
   {//question 1    
	"question": "Spongebob lives...",
	"a": "Under a rock",
	"b": "In a pineapple",
	"c": "In a treedome",
	"d": "In a Moai",
	"image":"quizimages/houses.jpg",
	"answer": "b",
   },
   {//question 2
      "question": "What is the name of Spongebob's pet?",
      "a": "Gary the snail",
      "b": "Gale the snail",
      "c": "Snail-bob",
      "d": "Manny the mollusk",
      "image":"quizimages/gary.jpg",
      "answer": "a"
   },
   {//question 3
	"question": "What instrument does Squidward play?",
	"a": "The guitar",
	"b": "The flute",
	"c": "The piano",
	"d": "The clarinet",
	"image":"quizimages/squidward.jpg",
	"answer": "d"
   },
   {//question 4
      "question": "Spongebob works at...",
      "a": "The Chum Bucket",
      "b": "The Crusty Crab",
      "c": "The Oyster Office",
      "d": "The Krusty Krab",
      "image":"quizimages/underwear.jpg",
      "answer": "d"
   },
   {//question 5
      "question": "Does Spongebob have a boating license?",
      "a": "Yes",
      "b": "No",
      "c": "Yes but it was stolen",
      "d": "He drives a car",
      "image":"quizimages/boating.jpg",
      "answer": "b"
   },
   {//question 6
      "question": "Who is this?",
      "a": "Sandy Cheeks",
      "b": "Plankton",
      "c": "Mr's. Puff",
      "d": "Seabass",
      "image":"quizimages/sandy.jpg",
      "answer": "a"
   },
   {//question 7
      "question": "Why are Plankton and Mr. Krabs rivals?",
      "a": "Mr. Krabs squashed Plankton's mother",
      "b": "Plankton gets more customers",
      "c": "Plankton is always trying to steal the Krabby Patty secret formula", 
      "d": "Mr. Krabs steals Plankton's moneys",
      "image":"quizimages/plankKrabs.jpg",
      "answer": "c"
   },
   {//question 8
      "question": "What sound does he make?",
      "a": "Woof",
      "b": "Moo",
      "c": "Oog",
      "d": "Meow",
      "image":"quizimages/garyMeow.jpg",
      "answer": "d"
   },
   {//question 9
      "question": "Who is this?",
      "a": "Spongepaper",
      "b": "Sheetbob",
      "c": "Drawbob",
      "d": "Doodlebob",
      "image":"quizimages/doodlebob.jpg",
      "answer": "d"
   },
   {//question 10
      "question": "''It's a(n) ______.''",
      "a": "Donkey",
      "b": "Giraffe",
      "c": "Elephant",
      "d": "Monkey",
      "image":"quizimages/bubbleGiraffe.jpg",
      "answer": "b"
   },
 ];
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }
 function loadQuestion() {
  
     
    // close light box for first question
    if (questions == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	 img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 function hintBtn() {
   document.getElementById("hint").style.visibility = "visible";
   if(questions == 0){
      document.getElementById("hint").innerHTML = "Hint 1";
      currentQuestion = -1;
   }
   else if(questions == 1){
      document.getElementById("hint").innerHTML = "Hint 2";
      currentQuestion = -1;
   }
   else if(questions == 2){
      document.getElementById("hint").innerHTML = "Hint 3";
      currentQuestion = -1;
   }
   else if(questions == 3){
      document.getElementById("hint").innerHTML = "Hint 4";
      currentQuestion = -1;
   }
   else if(questions == 4){
      document.getElementById("hint").innerHTML = "Hint 5";
      currentQuestion = -1;
   }
   else if(questions == 5){
      document.getElementById("hint").innerHTML = "Hint 6";
      currentQuestion = -1;
   }
   else if(question == 6 ){
      document.getElementById("hint").innerHTML = "Hint 7";
      currentQuestion = -1;
   }
   else if(questions == 7){
      document.getElementById("hint").innerHTML = "Hint 8";
      currentQuestion = -1;
   }
   else if(questions == 8){
      document.getElementById("hint").innerHTML = "Hint 9";
      currentQuestion = -1;
   
   }else{
      document.getElementById("hint").innerHTML = "Hint 10";
      currentQuestion = -1;
   }
   
   
   
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = " Yay, correct! Your score is " + score + " / " + questions.length;
    } else {
       message = "Opps, incorrect! Your score is " + score + " / " + questions.length; 
    } // else
        
    
   }
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       if(score === 10 || score === 9){
          message = "You finished the quiz! Your score is " + score + " / " + questions.length + ". You're a smartypants!";
       }else if(score === 8 || score === 7){
         message = "You finished the quiz! Your score is " + score + " / " + questions.length + ". You did great!";
       }else{
         message = "You finished the quiz! Your score is " + score + " / " + questions.length + ". Keep working on it!";
       }
    } else { 
       loadQuestion();
      
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
 
 
 
 
 
 
 
 
 
 
   
