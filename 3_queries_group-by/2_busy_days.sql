SELECT day, COUNT(id) total_assignments
FROM assignments
GROUP BY day
HAVING COUNT(id) >= 10 
ORDER BY day;