-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 13. Jun 2023 um 22:10
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `empire-v-altv`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `blips`
--

CREATE TABLE `blips` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `sprite` varchar(255) DEFAULT NULL,
  `x` float DEFAULT NULL,
  `y` float DEFAULT NULL,
  `z` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `blips`
--

INSERT INTO `blips` (`id`, `name`, `color`, `sprite`, `x`, `y`, `z`) VALUES
(2, 'Polizei', '0', '60', 442.8, -982.879, 30.6783),
(3, 'Polizei', '0', '60', 839.723, -1294.09, 38.5135),
(4, 'Sheriff', '0', '58', 365.354, -1595.18, 39.7267),
(5, 'Krankenhaus', '0', '61', 309.349, -1458.53, 46.8374),
(6, 'Klammottenladen', '0', '73', 93.0462, -1400.72, 81.329),
(7, 'Einkaufsgeschäft(24/7)', '0', '59', 39.9956, -1339.23, 93.2924),
(8, 'Tankstelle', '0', '52', -67.3451, -1752.67, 75.2968),
(9, 'Autohaus', '0', '225', -43.622, -1115.93, 27.3759),
(10, 'Krankenhaus', '0', '61', 307.846, -589.938, 43.2821),
(11, 'Friseur', '0', '71', 135.798, -1709.2, 29.2799);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `colshapes`
--

CREATE TABLE `colshapes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `sprite` varchar(255) DEFAULT NULL,
  `x` float DEFAULT NULL,
  `y` float DEFAULT NULL,
  `z` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `colshapes`
--

INSERT INTO `colshapes` (`id`, `name`, `color`, `sprite`, `x`, `y`, `z`) VALUES
(9, 'PoliceClothesMenu', '0', '60', 454.193, -992.848, 30.6783),
(10, 'PoliceWeaponGiveMenu', '0', '60', 452.36, -979.859, 30.6783),
(14, 'Kleidungsladen', '0', '60', 72.3692, -1396.21, 29.3641),
(17, 'Firsuerladen', '0', '71', 136.906, -1708.07, 29.2799),
(18, 'PoliceDienstMenu', '0', '60', 440.387, -975.745, 30.6783),
(19, 'Bank', '0', '60', 147.732, -1035.69, 29.3304);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `loginregister`
--

CREATE TABLE `loginregister` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `registerdate` varchar(255) DEFAULT NULL,
  `lastlogin` varchar(255) DEFAULT NULL,
  `lastlogout` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `markers`
--

CREATE TABLE `markers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `sprite` varchar(255) DEFAULT NULL,
  `x` float DEFAULT NULL,
  `y` float DEFAULT NULL,
  `z` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `playerclohtes`
--

CREATE TABLE `playerclohtes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `hat_style` int(11) DEFAULT NULL,
  `hat_texture` int(11) DEFAULT NULL,
  `hair_style` int(11) DEFAULT NULL,
  `hair_texture` int(11) DEFAULT NULL,
  `glasses_style` int(11) DEFAULT NULL,
  `glasses_texture` int(11) DEFAULT NULL,
  `mask_style` int(11) DEFAULT NULL,
  `mask_texture` int(11) DEFAULT NULL,
  `torso_style` int(11) DEFAULT NULL,
  `torso_texture` int(11) DEFAULT NULL,
  `legs_style` int(11) DEFAULT NULL,
  `legs_texture` int(11) DEFAULT NULL,
  `shoes_style` int(11) DEFAULT NULL,
  `shoes_texture` int(11) DEFAULT NULL,
  `accessories_style` int(11) DEFAULT NULL,
  `accessories_texture` int(11) DEFAULT NULL,
  `undershirt_style` int(11) DEFAULT NULL,
  `undershirt_texture` int(11) DEFAULT NULL,
  `bodyarmor_style` int(11) DEFAULT NULL,
  `bodyarmor_texture` int(11) DEFAULT NULL,
  `decal_style` int(11) DEFAULT NULL,
  `decal_texture` int(11) DEFAULT NULL,
  `top_style` int(11) DEFAULT NULL,
  `top_texture` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `playerclohtes`
--

INSERT INTO `playerclohtes` (`id`, `name`, `hat_style`, `hat_texture`, `hair_style`, `hair_texture`, `glasses_style`, `glasses_texture`, `mask_style`, `mask_texture`, `torso_style`, `torso_texture`, `legs_style`, `legs_texture`, `shoes_style`, `shoes_texture`, `accessories_style`, `accessories_texture`, `undershirt_style`, `undershirt_texture`, `bodyarmor_style`, `bodyarmor_texture`, `decal_style`, `decal_texture`, `top_style`, `top_texture`) VALUES
(1, 'FreddyOnline24', 0, 0, 10, 1, 9, 1, 0, 0, 35, 0, 25, 0, 0, 0, 58, 0, 55, 0, 59, 0, 0, 0, 58, 0),
(3, 'Thesilveraction', NULL, NULL, 2, 1, NULL, NULL, NULL, NULL, 4, NULL, 9, NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `playerlastlocation`
--

CREATE TABLE `playerlastlocation` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `x` float DEFAULT NULL,
  `y` float DEFAULT NULL,
  `z` float DEFAULT NULL,
  `dimension` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `playerlastlocation`
--

INSERT INTO `playerlastlocation` (`id`, `name`, `x`, `y`, `z`, `dimension`) VALUES
(1, 'FreddyOnline24', 149.512, -1031.37, 29.3304, NULL),
(2, 'Thesilveraction', 149.248, -1038.47, 29.3473, NULL),
(3, 'kerbi', 452.611, -988.642, 30.6783, NULL),
(4, 'Hargun singh', 397.938, -1039.36, 29.4484, NULL),
(5, 'Artem', -45.2835, -1112.18, 26.4323, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `playerstats`
--

CREATE TABLE `playerstats` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `bankmoney` int(11) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `job_rank` varchar(255) DEFAULT NULL,
  `is_dienst` tinyint(1) DEFAULT NULL,
  `permission_level` int(11) DEFAULT NULL,
  `personal_vehicle` varchar(255) DEFAULT NULL,
  `personal_vehicle_ingarage` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `playerstats`
--

INSERT INTO `playerstats` (`id`, `name`, `money`, `bankmoney`, `job`, `job_rank`, `is_dienst`, `permission_level`, `personal_vehicle`, `personal_vehicle_ingarage`) VALUES
(2, 'FreddyOnline24', 2323, 121223232, 'LSPD', 'Chief', 0, 100, 'bmx', 0),
(3, 'Thesilveraction', 100, 10001000, 'LSPD', 'Captain', 0, 0, 'bmx', 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `blips`
--
ALTER TABLE `blips`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `colshapes`
--
ALTER TABLE `colshapes`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `loginregister`
--
ALTER TABLE `loginregister`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `playerclohtes`
--
ALTER TABLE `playerclohtes`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `playerlastlocation`
--
ALTER TABLE `playerlastlocation`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `playerstats`
--
ALTER TABLE `playerstats`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `blips`
--
ALTER TABLE `blips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT für Tabelle `colshapes`
--
ALTER TABLE `colshapes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT für Tabelle `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `loginregister`
--
ALTER TABLE `loginregister`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `playerclohtes`
--
ALTER TABLE `playerclohtes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `playerlastlocation`
--
ALTER TABLE `playerlastlocation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT für Tabelle `playerstats`
--
ALTER TABLE `playerstats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
