const { Pool } = require('pg')

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3];

let q = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${limit};
;`

pool.query(q)
.then(res => {
  res.rows.forEach(student =>{
  console.log(res.rows);
  console.log(`${student.name} has an id of ${student.student_id} and was in the ${student.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));
