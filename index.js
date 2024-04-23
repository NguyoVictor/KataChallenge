function misleadingSigns(onShirt, said, lettersKnown) {
  const lettersOnShirt = onShirt.split('');
  const lettersSaid = said.split('');

for (let i = 0; i < lettersOnShirt.length; i++) {

  if (!lettersKnown.includes(lettersSaid[i])) {

      if (lettersOnShirt[i] !== lettersSaid[i]) {
          return true;
      }
  }
}


return false;
}