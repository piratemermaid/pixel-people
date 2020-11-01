const { Router } = require("express");
const models = require("../models/bookshelf_models");

const router = new Router();

router.get("/animals", async (req, res) => {
    const animals = await models.Animal.fetchAll({
        withRelated: ["categories", "splice.splice1", "splice.splice2"]
    });

    res.send(
        animals.toJSON().map(({ name, tier, season, categories, splice }) => {
            return {
                name,
                tier,
                season,
                categories: categories.map(({ name }) => {
                    return name;
                }),
                splice: splice.map(({ splice1, splice2 }) => {
                    // TODO: remove logic when data is complete
                    let splice1Name = null;
                    let splice2Name = null;
                    if (splice1) {
                        splice1Name = splice1.name;
                    }
                    if (splice2) {
                        splice2Name = splice2.name;
                    }
                    return [splice1Name, splice2Name];
                })
            };
        })
    );
});

module.exports = router;
