//function definition, where the function gaslighting has three parameters
function gaslighting(onShirt, said, friendKnows) {
 //use the split string method to convert the strings 'onShirt' and 'said' into arrays of characters.
 //It makes it easier it compare individual letters
  const shirtWord = onShirt.split("");
  const yourWord = said.split("");
//comparison loop
//This loop iterates through each character of the shirt text (onShirt) and what was said (said).
//It compares the characters at the same position in both strings.
//If a character on the shirt is different from what was said and either the character on the shirt or what was said is known by a friend, then it returns true.
  for (let i = 0; i < shirtWord.length; i++) {
    const letterOnShirt = shirtWord[i];
    const yourLetter = yourWord[i];
    if (
      letterOnShirt !== yourLetter &&
      (friendKnows.includes(letterOnShirt) || friendKnows.includes(yourLetter))
    ) {
      return true;
    }
  }

  return false;
}
//if the loop ends without finding any inconsistency between the shirt text and what was said it returns false.
//hence indicating no gaslighting is happening

console.log(gaslighting("snack", "snake", ["c"]));
console.log(gaslighting("snack", "snake", ["s", "n", "a", "k", "e"]));
console.log(gaslighting("smile", "smirk", ["s", "m", "i"]));
//these lines calls the gaslighting function with different arguments and prints the results to the console
