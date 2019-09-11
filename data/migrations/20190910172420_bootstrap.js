
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {

        tbl.increments(); // defaults to 'id'
    
        // VIN: string of 17 characters, unique, required (not null)
        tbl
            .string('vin', 17)
            .unique()
            .notNullable();
    
        // make: string, required (not null) 
        tbl
            .string('make')
            .notNullable();
    
        // model: string, required (not null) 
        tbl
            .string('model')
            .notNullable();

        // mileage: integer, required (not null)
        tbl
            .integer('mileage')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
