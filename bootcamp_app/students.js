const {Pool} = require('pg');

const pool = new Pool({
  user:'vagrant',
  password:'123',
  host:'localhost',
  database:'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3] || 5;
const queryString = `
SELECT students.id,students.name,cohorts.name AS cohort 
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
const values = [`%${cohort}%`,limit];
pool.query(queryString,values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    });
    
  })
  .catch(err => console.log('query error', err.stack));