## BootcampX


- The app will allow our staff to help students and mentors better and faster by offering quick insight into data like assignment completion and the effectiveness of assistance requests.

The Entities

- students
- cohorts
- assignments
- assignment_submissions
- teachers
- assistance_requests

We're going to start off simple and just focus on the queries for two entities: students and cohorts.

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