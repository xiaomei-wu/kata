// Test.describe("Example tests",_=>{
// Test.assertEquals(sabb('Can I have a sabbatical?', 5, 5), 'Sabbatical! Boom!');
// Test.assertEquals(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.'); 
// Test.assertEquals(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!'); 
// Test.assertEquals(sabb('Please calm down', 9, 1), 'Back to your desk, boy.'); 
// });

function sabb(s, val, happiness){
  // score
  // iterate over s
  // every char that is also in 'sabbatical' gets a point
  let score = 0;
  for (let char of s) {
    console.log(char)
    if ('sabbatical'.includes(char)) {
      score++;
    }
  }
  return score + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}

const sabb = (s, val, happiness) => {
  return s.split('').reduce((score, char) => {
    if('sabbitical'.includes(char)) {
      score++;
    }
    return score
  }, 0) + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}


