const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categories = await Category.findAll({
      include: [Product],
    });

    // be sure to include its associated Products
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // find one category by its `id` value
    const singleCategory = await Category.findOne({
      where: { id: req.params.id },
      include: [Product],
    });
    console.log(singleCategory);
    if (!singleCategory) {
      res.status(404).json("No category found with that id");
      return;
    }
    // be sure to include its associated Products
    res.status(200).json(singleCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category

  const newCategory = await Category.create(req.body);
  res.status(200).json(newCategory);
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  const updatedCategory = await Category.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json(updatedCategory);
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json(deletedCategory);
});

module.exports = router;
