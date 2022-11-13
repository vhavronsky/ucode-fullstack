USE ucode_web;
SELECT *, COUNT(*) AS quantity_teams FROM heroes JOIN teams ON heroes.id=teams.hero_id WHERE NOT heroes.race='human' and heroes.name LIKE '%a%' AND heroes.class_role IN ('tankman', 'healer') GROUP BY heroes.id;
