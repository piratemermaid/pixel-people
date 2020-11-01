const { keyBy } = require("lodash");
const {
    animals,
    animalsCategories,
    animalsSplice
} = require("../data/animals");
const categories = require("../data/categories");

exports.seed = async function (knex) {
    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await resetTable(knex, tableOrder[i]);
    }

    const animalsByName = keyBy(
        await knex("animals")
            .insert(
                animals.map(({ name, tier, season }) => {
                    return { name, tier, season };
                })
            )
            .returning("*"),
        "name"
    );

    const categoriesByName = keyBy(
        await knex("categories")
            .insert(
                categories.map((name) => {
                    return { name };
                })
            )
            .returning("*"),
        "name"
    );

    await knex("animals_categories").insert(
        animalsCategories.map(({ animal, category }) => {
            return {
                animal_id: animalsByName[animal].id,
                category_id: categoriesByName[category].id
            };
        })
    );

    await knex("combinations").insert(
        animalsSplice.map(({ animal, splice1, splice2 }) => {
            // Logic for nonexistent splice animals
            // just for while data is incomplete
            // TODO: remove when data is complete
            let splice1Id = null;
            let splice2Id = null;
            if (animalsByName[splice1]) {
                splice1Id = animalsByName[splice1].id;
            }
            if (animalsByName[splice2]) {
                splice2Id = animalsByName[splice2].id;
            }

            return {
                animal_id: animalsByName[animal].id,
                splice_1_id: splice1Id,
                splice_2_id: splice2Id
            };
        })
    );
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};

const tableOrder = [
    "animals",
    "combinations",
    "categories",
    "animals_categories"
];
