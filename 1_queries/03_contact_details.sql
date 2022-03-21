SELECT name, id, cohort_id
FROM students
WHERE email IS NULL
OR phone IS NULL;
-- \i 1_queries/03_contact_details.sql