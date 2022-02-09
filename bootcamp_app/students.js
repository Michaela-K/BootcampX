const { Pool } = require('pg')

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let q = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
LIMIT 5;
`

pool.query(q)
.then(res => {
  console.log(res.rows);
  // console.log(`${students.name} has an id of ${student_id} and was in the ${cohort} cohort`)
})
.catch(err => console.error('query error', err.stack));
