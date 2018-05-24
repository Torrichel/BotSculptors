'use strict';

const casual = require('casual');

module.exports = () => {
    const data = {
      users: []
    };

    // Creates 13k users
    for (let i = 0; i < 1000 * 13; i++) {
        data.users.push({
            id: i,
            name: casual.full_name,
            avatarUrl: 'https://fakeimg.pl/50x50/'
        })
    }



    return data;
};


// GET -> /api/users?searchTerm={value} -> {result: [{id:string, name:string, avatarUrl: string}], nextPageUrl?:string, previousPageUrl?:string }