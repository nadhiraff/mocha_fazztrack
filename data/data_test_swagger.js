function dataCreateUser() {
    return {
        id: '1234',
        firstName: 'nadhira',
        lastName: 'fauzia',
        age: 21,
        occupation: 'testing',
        nationality: 'indonesia',
        hobbies: [
          'travel'
        ],
        gender: 'FEMALE',
        createdDate: '2023-02-28T05:35:18.349Z',
        updatedDate: '2023-02-28T05:35:18.349Z'
      }
};

function UpdateUserNull() {
  return {
      firstName: 'nadhira',
      lastName: 'fauzia',
      age: 21,
      occupation: 'QA',
      nationality: 'indo',
      hobbies: [
        'travel'
      ],
      gender: 'FEMALE',
      createdDate: '2023-02-28T05:35:18.349Z',
      updatedDate: '2023-02-28T05:35:18.349Z'
    }
};

module.exports = {
    dataCreateUser,
    UpdateUserNull
};