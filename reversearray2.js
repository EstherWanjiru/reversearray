function reverseSentence(sentence) {
    return sentence
      .join("")
      .split(" ")
      .reverse()
      .map((word) => word.split(""))
      .flat();
  }