-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 31 2023 г., 07:53
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
(1, 'Ноутбуки и мониторы', 'netbook'),
(2, 'Системные блоки', 'block'),
(5, 'Видеокарты', 'videocard'),
(6, 'Блоки питания', 'powersupply'),
(7, 'Чехлы для ноутбуков', 'cover'),
(8, 'Системы охлаждения', 'coolingsystem'),
(9, 'Мышки и клавиатуры', 'keyboardandmouse'),
(10, 'Веб-камеры', 'webcamera'),
(11, 'Жесткие диски', 'hardware'),
(12, 'Оперативные памяти', 'RAM'),
(13, 'Флешки', 'flash'),
(14, 'Принтеры', 'printer'),
(15, 'Программы', 'programm'),
(16, 'Процессоры', 'processor');

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
(2, 'admin', '$2y$10$FVKbOtjaq.HXosvx0CHQGujxFswqEmYj/KAG7J3cD6kDM3jUEEjOy', 'admin@mail.ru', '+7 (233) 454-53-45');

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `number_order` int(11) NOT NULL,
  `title_product` varchar(255) NOT NULL,
  `name_client` varchar(255) NOT NULL,
  `sum_order` int(11) NOT NULL,
  `state_order` text NOT NULL,
  `type_delivery` text NOT NULL,
  `type_pay` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `number_order`, `title_product`, `name_client`, `sum_order`, `state_order`, `type_delivery`, `type_pay`) VALUES
(1, 3799, 'Монитор LG', 'Tim', 1500, 'В ожидании', 'Курьер', 'Наличными'),
(2, 96, 'Корпус AirTone F-ZE04A Black', 'Tim', 10000, 'В ожидании', 'Самовызов', 'Наличными');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title_product` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `category` varchar(25) NOT NULL,
  `brand` text NOT NULL,
  `cost_product` varchar(25) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title_product`, `descr`, `category`, `brand`, `cost_product`, `img`) VALUES
(2, 'Корпус AirTone F-ZE04A Black', 'компьютерный корпус Midi-Tower, без блока питания, для плат форм-фактора ATX, mATX, разъемы спереди: USBx2, наушники, микрофон, материал: сталь, габариты: 241x520x525 мм, вес 4.75 кг', 'block', 'AirTone', '5000', 'airtone'),
(4, 'Наушники Acer', '', 'earphone', 'Acer', '5000', 'acer'),
(5, 'Видеокарта GTX 1070 Asus', '', 'videocard', 'Asus', '20000', 'asusVideo'),
(6, 'Блок питания Chieftec', '', 'powersupply', 'Chieftec', '2000', 'Chieftec'),
(7, 'Чехол для ноутбка Anki', '', 'cover', 'Anki', '1000', 'anki'),
(8, 'Система охлаждения Coolingse', '', 'coolingsystem', 'Coolingse', '6500', 'coolingse'),
(9, 'Компьютерная мышка Defender', '', 'keyboardandmouse', 'Defender', '500', 'defender'),
(10, 'Веб-камера Genius', '', 'webcamera', 'Genius', '320', 'geinus'),
(11, 'Жесткий диск Seagate Kakaramba', '', 'hardware', 'Kakaramba', '11000', 'seagate'),
(12, 'Оперативная память Kingston HyperX', '', 'RAM', 'Kingston', '17000', 'Kingston'),
(14, 'Клавиатура Logitech', '', 'keyboardandmouse', 'Logitech', '700', 'logitech'),
(15, 'Колонки Msi', '', 'earphone', 'MSI', '3450', 'msi'),
(16, 'Материнская плата MSI', '', 'motherboard', 'MSI', '3000', 'msiplat'),
(17, 'Флешка Iteco HP', '', 'flash', 'HP', '200', 'iteco'),
(18, 'Принтер HP', '', 'printer', 'HP', '12000', 'hp'),
(19, 'Лицензия ОС Windows 7', '', 'programm', 'Windows', '20000', 'windows7'),
(20, 'Процессор Intel Xeon', '', 'processor', 'Intel', '6700', 'IntelXeon'),
(22, 'Монитор Asus', 'fghgh', 'Asus', 'asus', '13500', 'netbook'),
(24, 'Монитор LG', 'Классный монитор', 'netbook', 'LG', '1500', 'LG');

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
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
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
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
