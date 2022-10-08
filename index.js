const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  
}
function titleCased() {
  const result = [];
  for (let i=0; i < 10; i++){
    let randomName = tutorials[i].split(' ').map(capitalize).join(' ');
    result.push(randomName);
  }
  return result;
}

/*
function titleCased(){
  const result = [];
  for (let item of tutorials){
    result.push(item.)
  }
}
/*
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  
  }
function titleCased() {
let result = []
    for(let i=0; i<10; i++){
      let taco = tutorials[i].split(``).map(capitalize).join(``)
      result.push(taco)
    
    }
    
    return result
    
    }*/