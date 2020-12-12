function createSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export default createSlug;
