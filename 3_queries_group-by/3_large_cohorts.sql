SELECT cohorts.name cohort_name,COUNT(students.id) student_count
FROM students JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING COUNT(students.id) >= 18
ORDER BY COUNT(students.id);