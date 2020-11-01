const { keyBy } = require("lodash");
const animals = require("../data/animals");

exports.seed = async function (knex) {
    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await resetTable(knex, tableOrder[i]);
    }

    const animalsByName = keyBy(
        await knex("animals")
            .insert(
                houses.map(({ name, tier, season }) => {
                    return { name, tier, season };
                })
            )
            .returning("*"),
        "name"
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
