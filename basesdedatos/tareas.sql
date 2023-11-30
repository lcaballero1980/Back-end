-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-11-2023 a las 09:22:39
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `salondefiesta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

DROP TABLE IF EXISTS `tareas`;
CREATE TABLE IF NOT EXISTS `tareas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(4, 'A Lionel Scaloni le pidieron que siga en la Selección y su respuesta generó conmoción en el fútbol argentino', 'El entrenador campeón del mundo, que por estas horas analiza su futuro, viajó a su pueblo, Pujato, para estar junto a su familia.', 'El futuro de Lionel Scaloni es incierto. Luego del histórico triunfo ante Brasil en el Maracaná, el entrenador campeón del mundo con la Selección argentina dejó latente la posibilidad de irse antes de tiempo. Por estas horas analiza cada detalle. ¿Cuál el el problema? Sus marcadas diferencias con Chiqui Tapia, presidente de la AFA.\r\n\r\nLeé también: El Cholo Simeone sorprendió a todos y vaticinó el futuro de Lionel Scaloni en la Selección argentina\r\n\r\n“Toca parar la pelota; tengo muchas cosas que pensar en este tiempo. Estos jugadores nos han dado un montón, pero necesito pensar mucho. Necesito pensar qué tengo que hacer, no es un adiós ni otra cosa, pero necesito pensar porque la vara está muy alta”, dijo tras el triunfo ante Brasil y, de esa manera, detonó una bomba.\r\n\r\nSon horas determinantes para definir los pasos a seguir. Y aunque su continuidad en la Selección es cada día más compleja, nada está definido.', NULL),
(5, 'El lado oscuro de TikTok: un informe de Amnistía reveló los peligros que enfrentan los jóvenes en la app', 'La investigación indaga en qué pasa cuando los jóvenes quedan atrapados horas en su celular y entran en una espiral que puede ser perjudicial para su bienestar.', 'TikTok es la plataforma online de entretenimiento, creatividad y comunidad de más crecimiento en los últimos años. Creada en China en 2016, hoy cuenta con más de 1000 millones de usuarios en todo el mundo (16,2 millones en Argentina), muchos de ellos niños y adolescentes de entre 13 y 17 años.\r\n\r\nPresentada como una app para todo público en la que los contenidos explícitos para adultos no están permitidos, TikTok esconde un modelo de negocio que absorbe información de cada usuario, incluso sin permiso y se ha convertido en un espacio tóxico y adictivo para niños, niñas y jóvenes, al punto que puede influir en la percepción de su imagen, su salud mental y su bienestar, y donde, además, corren el peligro de caer en espirales de contenidos desencadenantes de depresión y autolesiones.\r\n\r\nLeé también: Estados Unidos: demandaron a TikTok por ser “demasiado adictivo” para los chicos\r\n\r\nEstas conclusiones son parte del informe Domar el algoritmo: desafíos para la salud mental y privacidad en el uso de TikTok Argentina, elaborado y presentado hoy por Amnistía Internacional.', NULL),
(11, 'El Kun Agüero mostró su exigente entrenamiento para jugar el partido de las leyendas de Conmebol', 'El exdelantero de la Selección argentina compartió un video de su preparación para el amistoso de exhibición. ', 'Sergio Agüero será parte del partido de leyendas de Conmebol, que se jugará el martes 5 de diciembre en el estadio del Inter Miami.\r\n\r\nLeé también: El gesto de Lionel Scaloni que anticipa que seguirá al frente de la Selección argentina\r\n\r\nEl Kun compartió en sus historias de Instagram un video de su exigente entrenamiento para el amistoso de exhibición.\r\n\r\nEn pocos segundos, mostró un ejercicio que incluye aceleración, cambio de ritmo, control de la pelota y definición, todas características que lo destacaron en la élite del fútbol mundial.', NULL),
(20, '12', '12', '12', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
