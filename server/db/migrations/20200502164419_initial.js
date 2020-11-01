exports.up = async function (knex) {
    await knex.schema.createTable("animals", (table) => {
        table.increments("id");
        table.string("name");
        table.integer("tier");
        table.string("season");
    });

    await knex.schema.createTable("categories", (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable("combinations", (table) => {
        table.increments("id");
        table.integer("animal_id").references("id").inTable("animals");
        table.integer("splice_1_id").references("id").inTable("animals");
        table.integer("splice_2_id").references("id").inTable("animals");
    });

    await knex.schema.createTable("animals_categories", (table) => {
        table.increments("id");
        table.integer("animal_id").references("id").inTable("animals");
        table.integer("category_id").references("id").inTable("categories");
    });
};

exports.down = async function (knex) {
    const tableOrder = [
        "animals",
        "combinations",
        "categories",
        "animals_categories"
    ];

    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await knex.schema.dropTableIfExists(tableOrder[i]);
    }
};
