const { Pool } = require('pg')

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const cohort = process.argv[2];

let q = `
SELECT DISTINCT cohorts.name AS name, teachers.name AS teacher
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${cohort}%'
ORDER BY teacher
;`

pool.query(q)
.then(res => {
  res.rows.forEach(cohrt =>{
  console.log(res.rows);
  console.log(`${cohrt.cohort} : ${cohrt.teacher} `);
  })
})
.catch(err => console.error('query error', err.stack));
