/* eslint-disable array-callback-return */

export default (categorys) => {
  const categories = [];
  const subCategories = [];
  categorys.map(cat => {
    if (cat.ParentId) return subCategories.push(cat);
  });
  categorys.map(cat => {
    if (!cat.ParentId) {
      cat.sub = subCategories.filter(e => e.ParentId === cat.id);
      categories.push(cat);
    }
  });
  return categories;
};
