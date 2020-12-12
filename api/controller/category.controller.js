import Send from '../utils/res.utils';
import CategoryService from '../services/category.service';
import Categories from '../utils/category';
import createSlug from '../utils/create.slug';

const Product = {
  async get(req, res) {
    const categorys = await CategoryService.get();
    return Send(res, 200, undefined, Categories(categorys));
  },

  async create(req, res) {
    const category = await CategoryService.create({
      name: req.body.name,
      slug: createSlug(req.body.name),
      UserId: req.user.id,
      ParentId: req.body.ParentId
    });
    return Send(res, 201, 'Category created successfully', category);
  },

  async update(req, res) {
    const category = req.user.roleId === 1
      ? await CategoryService.update(
        { name: req.body.name, ParentId: req.body.ParentId },
        { id: req.params.id }
      )
      : await CategoryService.update(
        {
          name: req.body.name,
          ParentId: req.body.ParentId
        },
        { id: req.params.id, UserId: req.user.id }
      );
    return Send(res, 201, 'Category updated successfully', category);
  },

  async delete(req, res) {
    const category = req.user.roleId === 1
      ? await CategoryService.delete({ id: req.params.id })
      : await CategoryService.delete({
        id: req.params.id,
        UserId: req.user.id
      });
    return Send(res, 201, 'Category deleted successfully', category);
  }
};

export default Product;
