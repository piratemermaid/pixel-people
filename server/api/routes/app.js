const { Router } = require("express");
const models = require("../models/bookshelf_models");

const router = new Router();

router.get("/animals", async (req, res) => {
    const animals = await models.Animal.fetchAll({
        withRelated: ["categories", "splice.splice1", "splice.splice2"]
    });

    res.send(
        animals.toJSON().map(({ name, tier, season, categories, splice }) => {
            let splice1Name = null;
            let splice2Name = null;
            if (splice[0] && splice[0].splice1) {
                splice1Name = splice[0].splice1.name;
            }
            if (splice[0] && splice[0].splice2) {
                splice2Name = splice[0].splice2.name;
            }

            return {
                name,
                tier,
                season,
                categories: categories.map(({ name }) => {
                    return name;
                }),
                splice: [splice1Name, splice2Name]
            };
        })
    );
});

module.exports = router;
