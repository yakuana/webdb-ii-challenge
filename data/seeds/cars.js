exports.seed = function(knex) {

    return knex('cars') 
        .truncate() 
        .then(function() {
            return knex('cars').insert([
            { vin: 'A1234B1234C1234D1', make: 'Acura', model: '2020 Acura TLX', mileage: 200},
            { vin: 'B1234C1234D1234E2', make: 'Tesla', model: '2019 Model X', mileage: 200},
            { vin: 'C1234D1234E1234F3', make: 'Bugatti', model: 'Bugatti Veyron', mileage: 200},
            ]);
        });
  };
  