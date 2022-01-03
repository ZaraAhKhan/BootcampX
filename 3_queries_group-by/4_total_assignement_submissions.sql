SELECT cohorts.name cohort, COUNT(assignment_submissions.id) total_submissions
FROM cohorts 
JOIN students ON cohort_id = cohorts.id
JOIN assignment_submissions ON students.id = student_id
GROUP BY cohorts.name
ORDER BY total_submissions desc; 