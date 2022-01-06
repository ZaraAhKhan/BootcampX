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

const cohort = process.argv[2];

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests 
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohort || 'JUL 02'}%'
ORDER BY teacher;`)
  .then(res => {
    res.rows.forEach(cohortTeacher => {
      console.log(`${cohortTeacher.cohort}: ${cohortTeacher.teacher}`);
    });
  })
  .catch(err => console.log('query error', err.stack));
