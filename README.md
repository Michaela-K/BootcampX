## BootcampX


- The app will allow our staff to help students and mentors better and faster by offering quick insight into data like assignment completion and the effectiveness of assistance requests.

The Entities

- students
- cohorts
- assignments
- assignment_submissions
- teachers
- assistance_requests

A cohort will have the following attributes:

- id: A unique identifier
- name: The name of the cohort
- start_date: The cohorts' start date
- end_date: The cohorts' end date

A student will have the following attributes:

- id: A unique identifier
- name: The full name of the student
- email: The students' email address
- phone: The students' phone number
- github: The students' github profile url
- start_date: The students' start date of the Bootcamp
- end_date: The students' end date of the Bootcamp
- cohort_id: The id of the cohort that the student is enrolled in

An assignment will have the following attributes:

- id: A unique identifier
- name: The name of the assignment
- content: The written content body of the assignment
- day: The day that the assignment appears on
- chapter: The order that the assignment will appear in the day.
- duration: The average time it takes a student to finish

An assignment_submission will have the following attributes:

- id: A unique identifier
- assignment_id: The id of the assignment
- student_id: The id of the student
- duration: The time it took the student to complete the assignment
- submission_date: The date is was submitted

A student will be able to submit an assignment_submissions for every single assignment. So a student will submit many assignment_submissions and an assignment will have many assignment_submissions associated with it.