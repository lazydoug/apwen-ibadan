const getReadTime = wordCount => {
  const meanWordCharacterCount = 5,
    wordsPerMinute = 200

  return Math.ceil(wordCount / meanWordCharacterCount / wordsPerMinute)
}

export default getReadTime
