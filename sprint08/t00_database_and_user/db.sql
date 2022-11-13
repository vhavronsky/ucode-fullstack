CREATE DATABASE ucode_web;
CREATE user IF NOT EXISTS 'vhavronsky'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web.* TO 'vhavronsky'@'localhost';
FLUSH PRIVILEGES;