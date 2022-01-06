const {Pool} = require('pg');

const pool = new Pool({
  user:'vagrant',
  password:'123',
  host:'localhost',
  database:'bootcampx'
});

pool.connect(() => {
  console.log('connected');
});

const cohort = process.argv[2] || 'JUL 02';
const values = [`%${cohort}%`];
const queryString =
`SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests 
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teacher;`;

pool.query(queryString,values)
  .then(res => {
    res.rows.forEach(cohortTeacher => {
      console.log(`${cohortTeacher.cohort}: ${cohortTeacher.teacher}`);
    });
  })
  .catch(err => console.log('query error', err.stack));
