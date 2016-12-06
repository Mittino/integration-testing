'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puppies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('puppies').insert({
          name: 'sparky',
          age_in_months: 12,
          breed: 'golden retriever',
          image_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRa6saF66nu_D1cSrK4WdlL7tj_3PNPEV4p1g6TD6gC5qy5tVfVqQ"
        })

      ]);
    });
};
