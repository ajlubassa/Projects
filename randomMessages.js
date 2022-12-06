const verb = ['Father', 'Beginning and End', 'Ancient Of Days', 'Annointed One', 'Creator', 'God Almighty', 'God Who Sees', 'Everlasting God'];



const conclusion = ['Immutable', 'Infinite', 'Self-Sufficiant', 'Omnipotent', 'All-Knowing', 'Omnipresent', 'Full Of Perfect, Unchanging Wisdom', 'Unchangily True', 'Perfect In All He Does'];


var rVerb = verb[Math.floor(Math.random()*verb.length)];


var rConclusion = conclusion[Math.floor(Math.random()*conclusion.length)];

let text =  ("The " + rVerb + " is " + rConclusion + ".");

console.log(text);