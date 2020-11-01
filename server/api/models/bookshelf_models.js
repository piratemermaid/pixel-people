const { bookshelf } = require("./config");

const Animal = bookshelf.model("Animal", {
    tableName: "animals",
    categories() {
        return this.belongsToMany("Category");
    },
    splice() {
        return this.hasMany("Combination");
    }
});

const Category = bookshelf.model("Category", {
    tableName: "categories",
    animals() {
        return this.belongsToMany("Animal");
    }
});

const Combination = bookshelf.model("Combination", {
    tableName: "combinations",
    splice1() {
        return this.belongsTo("Animal", "splice_1_id");
    },
    splice2() {
        return this.belongsTo("Animal", "splice_2_id");
    }
});

module.exports = { Animal, Category };
