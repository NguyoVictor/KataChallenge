function gaslighting(onShirt, said, friendKnows) {
  const shirtWord = onShirt.split("");
  const yourWord = said.split("");

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

console.log(gaslighting("snack", "snake", ["c"]));
console.log(gaslighting("snack", "snake", ["s", "n", "a", "k", "e"]));
console.log(gaslighting("smile", "smirk", ["s", "m", "i"]));