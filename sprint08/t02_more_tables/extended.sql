USE ucode_web;
CREATE TABLE IF NOT EXISTS powers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    hero_id INT NOT NULL,
    name VARCHAR(20) NOT NULL,
    points INT,
    type ENUM('attack', 'defense'),
    CONSTRAINT powers_heroes_fk            
    FOREIGN KEY(hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);
-- CONSTRAINT // имя для ограничения внешнего ключа
CREATE TABLE IF NOT EXISTS races(
    id INT AUTO_INCREMENT PRIMARY KEY,
    hero_id INT NOT NULL,
    name VARCHAR(20) NOT NULL,
    CONSTRAINT races_heroes_fk 
    FOREIGN KEY(hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS teams(
    id INT AUTO_INCREMENT PRIMARY KEY,
    hero_id INT NOT NULL,
    name VARCHAR(20) NOT NULL,
    CONSTRAINT teams_heroes_fk
    FOREIGN KEY(hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);