window.onload = function () {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let actions = ["excuse", "Dog", "Crazy", "LOL"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];
  let randomWhoPosition = Math.floor(Math.random()* who.length);
  let randomWhatPosition = Math.floor(Math.random()* what.length);
  let randomWhenPosition = Math.floor(Math.random()* when.length);
  let randomactionsPosition = Math.floor(Math.random()* actions.length);
  
  let randomWho= who[randomWhoPosition];
  let randomWhat= what[randomWhatPosition];
  let randomWhen= when[randomWhenPosition];
  let randomActions= actions[randomactionsPosition];
  
  document.getElementById("excuse").innerHTML = randomWho + " " + randomWhat + " " + randomActions + " " + randomWhen + " " ;
};
