-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 21 2023 г., 22:12
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `mysite_db_v2`
--

-- --------------------------------------------------------

--
-- Структура таблицы `audio`
--

CREATE TABLE `audio` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `artist` varchar(60) DEFAULT NULL,
  `album_id` mediumint(8) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `audio`
--

INSERT INTO `audio` (`id`, `name`, `artist`, `album_id`) VALUES
(1, 'Nothing ever matters', 'Metallica', 1),
(2, 'Enter Sandman', 'Metallica', 1),
(3, 'The Unforgiven', 'Metallica', 1),
(4, 'Fade to black', 'Metallica', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `audio_tags`
--

CREATE TABLE `audio_tags` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `audio_to_playlist`
--

CREATE TABLE `audio_to_playlist` (
  `audio_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `playlist_id` mediumint(8) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `audio_to_playlist`
--

INSERT INTO `audio_to_playlist` (`audio_id`, `playlist_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `playlists`
--

CREATE TABLE `playlists` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `artist` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `artist`) VALUES
(1, 'testPlaylist', 'Metallica');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `audio`
--
ALTER TABLE `audio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_album` (`album_id`);

--
-- Индексы таблицы `audio_tags`
--
ALTER TABLE `audio_tags`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `audio_to_playlist`
--
ALTER TABLE `audio_to_playlist`
  ADD KEY `fk_audio` (`audio_id`),
  ADD KEY `fk_playlists` (`playlist_id`);

--
-- Индексы таблицы `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `audio`
--
ALTER TABLE `audio`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `audio`
--
ALTER TABLE `audio`
  ADD CONSTRAINT `fk_album` FOREIGN KEY (`album_id`) REFERENCES `playlists` (`id`);

--
-- Ограничения внешнего ключа таблицы `audio_to_playlist`
--
ALTER TABLE `audio_to_playlist`
  ADD CONSTRAINT `fk_audio` FOREIGN KEY (`audio_id`) REFERENCES `audio` (`id`),
  ADD CONSTRAINT `fk_playlists` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
