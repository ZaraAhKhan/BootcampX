SELECT day, COUNT(id) total_assignments
FROM assignments
GROUP BY day
ORDER BY day;