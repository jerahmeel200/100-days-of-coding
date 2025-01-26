(() => {
  const findFirstVowel = (str: string) => {
    const vowels: string[] = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        console.log(`The first vowel in string is ${str[i]} at index ${i}`);

        return str[i];
      }
    }
    console.log("no vowel found");
    return null;
  };

  const result = findFirstVowel("hjjjkkkk");

  console.log(result);
})();
