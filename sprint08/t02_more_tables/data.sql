USE ucode_web;
INSERT INTO powers(hero_id, name, points, type) 
VALUES 
('1', 'iron shield', '200', 'defense'),
('1', 'bloody first', '44', 'attack'),
('4', 'iron shield', '12', 'defense'),
('6', 'iron shield', '380', 'attack'), 
('6', 'iron shield', '80', 'defense'), 
('8', 'bloody first', '88', 'attack'), 
('11', 'bloody first', '110', 'attack'),
('11', 'bloody first', '35', 'defense'), 
('12', 'iron shield', '24', 'attack'), 
('12', 'bloody first', '9', 'defense'); 



INSERT INTO races(hero_id, name) 
VALUES
('3', 'three'), 
('4', 'Human'), 
('8', 'half-breed');

INSERT INTO teams(hero_id, name) 
VALUES
('1', 'Hydra'), 
('1', 'Avengers'),
('2', 'Hydra'), 
('2', 'Avengers'),
('4' , 'Hydra'),
('8', 'Hydra'),
('10', 'Avengers'),
('11', 'Avengers'), 
('12', 'Avengers'),
('12', 'Hydra');