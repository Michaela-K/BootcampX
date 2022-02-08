SELECT teachers.name AS name, count(assistance_requests.*) AS total_assistances
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;
