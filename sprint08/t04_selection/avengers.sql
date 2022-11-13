USE ucode_web;
SELECT *, SUM(powers.points) AS power  FROM heroes, powers WHERE heroes.id = powers.hero_id GROUP BY heroes.id ORDER BY power DESC, heroes.id LIMIT 1;
SELECT * FROM heroes, powers WHERE heroes.id=powers.hero_id and type=2 GROUP BY heroes.id ORDER BY points, heroes.id limit 1;
SELECT *, SUM(powers.points) AS power FROM heroes, powers, (SELECT hero_id, COUNT(*) AS quantity_teams FROM teams GROUP BY hero_id) AS hero_teams WHERE heroes.id=hero_teams.hero_id  and heroes.id=powers.hero_id and hero_teams.quantity_teams = 1 GROUP BY heroes.id ORDER BY heroes.id DESC;
SELECT *, SUM(powers.points) as total_power FROM teams JOIN powers ON teams.hero_id=powers.hero_id GROUP BY teams.name ORDER BY total_power;