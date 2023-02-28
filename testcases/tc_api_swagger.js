const testcases = {
    description: 'Update User - Testcases endpoint ubah data user',
    positive: {
        case1: 'testid01 - Test apakah endpoint update data user berfungsi menggubah data user yang sesuai',

    },
    negative: {
        case1: 'testid02 = Test apakah endpoint update user gagal ketika age bernilai 0',
        case2: 'testid03 - Test apakah endpoint update user gagal ketika hobbies kosong',
        case3: 'testid04 - Test apakah endpoint update user gagal ketika data id null'
    }
};

// const testcases = {
//     description: 'createuser - Testcases endpoint create user',
//     positive: {
//         case1: 'testid01 - Test apakah endpoint create user berfungsi membuat data user yang sesuai',
//         case2: 'testid04 - Test apakah endpoint create user berfungsi membuat data user yang sesuai dari file ekstensti json',
//         case3: 'testid05 - Test apakah endpoint create user validasi bahwa datanya eksist dari endpoint get user'

//     },
//     negative: {
//         case1: 'testid02 = Test apakah endpoint create user berfungsi dengan hobi integer/angka',
//         case2: 'testid03 - Test apakah endpoint create user berfungsi dengan data hobi kosong'
//     }
// };

// const testcasesKulkas = {
//     feature1: { //section_pintu_kulkas
//         description: '',
//         positive: {
//             case1: 'Test apakah endpoint create user berfungsi membuat data user yang sesuai'
//         },
//         negative: {
//             case1: 'Test apakah endpoint create user berfungsi dengan hobi integer/angka',
//             case2: 'Test apakah endpoint create user berfungsi dengan data hobi kosong'
//         }
//     }
// };

module.exports = {
    testcases,
}