import imageUrlBuilder from '@sanity/image-url'

export const useUtils =()=>{

    const builder = imageUrlBuilder(useSanity().config)
    function CreateURL(source, width = 300, height = 300) {
      return builder.image(source).width(width).height(height).url()
    }

    function limitWords(text, limit) {
      const words = text.split(' ');
      if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
      }
      return text;
  }

  function limitCharacters(text, limit) {
    if (text.length > limit) {
        return text.substring(0, limit) + '...';
    }
    return text;
}

    return {CreateURL, limitWords, limitCharacters}
}