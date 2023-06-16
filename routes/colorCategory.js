const { CalorCategory } = require('../models/colorCategory');
const express = require('express');
const router = express.Router();












router.get(`/`, async (req, res) => {
    const categoryList = await CalorCategory.find();

    if (!categoryList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(categoryList);
})

router.get('/:id', async (req, res) => {
    const category = await CalorCategory.findById(req.params.id);

    if (!category) {
        res.status(500).json({ message: 'The category with the given ID was not found.' })
    }
    res.status(200).send(category);
})



router.post('/', async (req, res) => {
   
    try {
        let category = new CalorCategory({
            name: req.body.name
        })
        await category.save();


        res.send(category);
    } catch (error) {
        res.status(400).json(error);
    }
})

  


router.put('/:id', async (req, res) => {
    const category = await CalorCategory.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name
        },
        { new: true }
    )

    if (!category)
        return res.status(400).send('the category cannot be created!')

    res.send(category);
})



router.delete("/:id", async (req, res) => {
    try {
      const category = await CalorCategory.findById(req.params.id);
      if (category) {
        await category.remove();
        res.json({ message: "Category removed" });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });

module.exports = router;