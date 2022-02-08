SELECT assignments.id, assignments.day, assignments.chapter, assignments.name, COUNT(assistance_requests.*) AS total_requests
FROM assistance_requests
JOIN assignments ON assignments.id = assistance_requests.assignment_id
GROUP by assignments.id
ORDER BY total_requests DESC;