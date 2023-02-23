const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  const allTags = await Tag.findAll({ include: [Product] });
  // find all tags
  // be sure to include its associated Product data
  res.status(200).json(allTags);
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const singleTag = await Tag.findOne({ where: { id: req.params.id } });
  res.status(200).json(singleTag);
});

router.post("/", async (req, res) => {
  // create a new tag
  const createTag = await Tag.create(req.body);
  res.status(200).json(createTag);
});

// check from here
router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json(updateTag);
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  const delTag = await Tag.destroy({ where: { id: req.params.id } });
  res.status(200).json(delTag);
});

module.exports = router;
