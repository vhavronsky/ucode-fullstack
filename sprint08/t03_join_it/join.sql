USE ucode_web;
SELECT * FROM heroes LEFT JOIN teams ON heroes.id=teams.hero_id;
SELECT * FROM heroes LEFT JOIN powers ON heroes.id=powers.hero_id;
SELECT * FROM heroes INNER JOIN powers ON heroes.id=powers.hero_id INNER JOIN teams ON heroes.id=teams.hero_id;