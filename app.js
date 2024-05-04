let userString = 'A sentence is the basic unit of language. It expresses a complete thought. It does this by following the grammatical basic rules of syntax. For example: "Ram is walking". A complete sentence has at least a subject and a main verb to state (declare) a complete thought';
// We are replacing (is) in the sentence 

userString = userString.replace('is','you')
console.log(`In this we replace only 1 (is) \n${userString}`);
userString = userString.replace(/\bis\b/g,'you')
console.log(`In this string we replace all (is)\n ${userString}`);