const { Pool } = require('pg')

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

let q = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

pool.query(q, values)
.then(res => {
  res.rows.forEach(student =>{
  console.log(res.rows);
  console.log(`${student.name} has an id of ${student.student_id} and was in the ${student.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));
