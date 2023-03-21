-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 21 2023 г., 19:41
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `users`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `title_product` varchar(255) NOT NULL,
  `nameImg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `title_product`, `nameImg`) VALUES
(1, 'Системные блоки', 'block'),
(2, 'Ноутбуки и мониторы', 'netbook'),
(3, 'Мышки и клавиатуры', 'keyboardandmouse'),
(4, 'Веб-камеры', 'webcamera'),
(5, 'Колонки и наушники', 'earphone'),
(6, 'Жесткие диски и SSD', 'hardware'),
(7, 'Оперативная память', 'RAM'),
(8, 'Процессоры', 'processor'),
(9, 'Видеокарты', 'videocard'),
(10, 'Блоки питания', 'powersupply'),
(11, 'Принтеры', 'printer'),
(12, 'Программное обеспечение', 'programm'),
(13, 'Чехлы и сумки для ноутбуков', 'cover'),
(14, 'Флешки', 'flash'),
(15, 'Системы охлаждения', 'coolingsystem'),
(16, 'Материнские платы', 'motherboard');

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name_client` text NOT NULL,
  `pass_client` varchar(255) NOT NULL,
  `email_client` varchar(255) NOT NULL,
  `phone_client` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Дамп данных таблицы `clients`
--

INSERT INTO `clients` (`id`, `name_client`, `pass_client`, `email_client`, `phone_client`) VALUES
(1, 'Tim', '$2y$10$Ce.vEvHbowmsdXHcErP9SuYdY9D8ou0s0NUwGhZtFkGoeo6I7uMlS', 'frwerer@mail.ru', '+7 (231) 231-23-21'),
(2, 'admin', '$2y$10$Sqt6C2W5FYHi1MHj6qInEOYvLSjWFOzov5Al1LhKpuzxNpcTf7Mgy', 'admin@mail.ru', '+7 (243) 432-42-34');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title_product` varchar(255) NOT NULL,
  `category` varchar(25) NOT NULL,
  `cost_product` varchar(25) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title_product`, `category`, `cost_product`, `img`) VALUES
(2, 'Корпус AirTone', 'block', '5000', 'airtone'),
(3, 'Ноутбук Asus', 'netbook', '13000', 'asus'),
(4, 'Наушники Acer', 'earphone', '5000', 'acer'),
(5, 'Видеокарта GTX 1070 Asus', 'videocard', '20000', 'asusVideo'),
(6, 'Блок питания Chieftec', 'powersupply', '2000', 'Chieftec'),
(7, 'Чехол для ноутбка Anki', 'cover', '1000', 'anki'),
(8, 'Система охлаждения Coolingse', 'coolingsystem', '6500', 'coolingse'),
(9, 'Компьютерная мышка Defender', 'keyboardandmouse', '500', 'defender'),
(10, 'Веб-камера Genius', 'webcamera', '320', 'geinus'),
(11, 'Жесткий диск Seagate Kakaramba', 'hardware', '11000', 'seagate'),
(12, 'Оперативная память Kingston HyperX', 'RAM', '17000', 'Kingston'),
(13, 'Монитор LG', 'netbook', '1500', 'LG'),
(14, 'Клавиатура Logitech', 'keyboardandmouse', '700', 'logitech'),
(15, 'Колонки Msi', 'earphone', '3450', 'msi'),
(16, 'Материнская плата MSI', 'motherboard', '3000', 'msiplat'),
(17, 'Флешка Iteco HP', 'flash', '200', 'iteco'),
(18, 'Принтер HP', 'printer', '12000', 'hp'),
(19, 'Лицензия ОС Windows 7', 'programm', '20000', 'windows7'),
(20, 'Процессор Intel Xeon', 'processor', '6700', 'IntelXeon');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
