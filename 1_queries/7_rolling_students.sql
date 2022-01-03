SELECT students.name students_name,
cohorts.name cohort_name,
cohorts.start_date cohort_start_date,
students.start_date students_start_date
FROM students JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.start_date <> students.start_date
ORDER BY cohorts.start_date;