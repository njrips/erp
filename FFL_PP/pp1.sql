-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 29, 2015 at 03:25 PM
-- Server version: 5.5.46-0ubuntu0.14.04.2
-- PHP Version: 5.5.9-1ubuntu4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `pp`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE IF NOT EXISTS `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Brand A', '2015-10-01 11:59:50', '2015-10-01 11:59:50'),
(2, 'blend', '2015-10-24 08:19:52', '2015-10-24 08:19:52'),
(3, 'JF', '2015-10-25 07:06:59', '2015-10-25 07:06:59');

-- --------------------------------------------------------

--
-- Table structure for table `break_down`
--

CREATE TABLE IF NOT EXISTS `break_down` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code_color` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `ratio` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `zipper_length` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `code_color` (`code_color`),
  KEY `size` (`size`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

CREATE TABLE IF NOT EXISTS `buyer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Buyer 1', '2015-09-15 05:31:10', '2015-09-15 05:31:10'),
(2, 'AUCHAN', '2015-09-16 07:07:47', '2015-09-16 07:07:47'),
(3, 'D. K company ', '2015-10-24 08:20:16', '2015-10-24 08:20:16'),
(4, 'DPAM', '2015-10-24 08:32:35', '2015-10-24 08:32:35'),
(5, 'Jeans Fritz', '2015-10-25 07:02:27', '2015-10-25 07:02:27');

-- --------------------------------------------------------

--
-- Table structure for table `code_color`
--

CREATE TABLE IF NOT EXISTS `code_color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `po_code` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `po_code` (`po_code`),
  KEY `color` (`color`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE IF NOT EXISTS `color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE IF NOT EXISTS `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `name`, `created_at`, `updated_at`) VALUES
(2, 'FRANCE', '2015-09-16 07:14:44', '2015-09-16 07:14:44'),
(3, 'RUSSIA', '2015-09-16 07:48:44', '2015-09-16 07:48:44'),
(4, 'UKRAINE', '2015-09-17 06:28:29', '2015-09-17 06:28:29'),
(5, 'MOROCCO', '2015-09-17 06:40:37', '2015-09-17 06:40:37'),
(6, 'Germany', '2015-10-25 07:06:18', '2015-10-25 07:06:18');

-- --------------------------------------------------------

--
-- Table structure for table `currency`
--

CREATE TABLE IF NOT EXISTS `currency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`, `created_at`, `updated_at`) VALUES
(2, 'ABM', '2015-09-16 07:09:35', '2015-09-16 07:09:35'),
(3, 'MENS AFT', '2015-09-16 07:10:03', '2015-09-16 07:10:03'),
(4, 'MENS CIH', '2015-09-16 07:10:15', '2015-09-16 07:10:15'),
(5, 'LADIES AFT', '2015-09-16 07:10:25', '2015-09-16 07:10:25'),
(6, 'LADIES CIH', '2015-09-16 07:10:35', '2015-09-16 07:10:35'),
(7, 'CHILDREN AFT', '2015-09-16 07:10:51', '2015-09-16 07:10:51'),
(8, 'CHILDREN CIH', '2015-09-16 07:11:10', '2015-09-16 07:11:10'),
(9, 'Ladies Trouser', '2015-10-25 07:04:03', '2015-10-25 07:04:03'),
(10, 'Ladies', '2015-10-25 07:05:46', '2015-10-25 07:05:46');

-- --------------------------------------------------------

--
-- Table structure for table `embroidery`
--

CREATE TABLE IF NOT EXISTS `embroidery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `embroidery`
--

INSERT INTO `embroidery` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, '4 star embroydairy', '2015-10-24 08:18:45', '2015-10-24 08:18:45'),
(2, 'master design', '2015-10-24 08:19:03', '2015-10-24 08:19:03');

-- --------------------------------------------------------

--
-- Table structure for table `fabric`
--

CREATE TABLE IF NOT EXISTS `fabric` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `factory`
--

CREATE TABLE IF NOT EXISTS `factory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `factory`
--

INSERT INTO `factory` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Factory 1', '2015-09-15 05:43:54', '2015-09-15 05:43:54'),
(2, 'Factory 2', '2015-09-17 05:22:38', '2015-09-17 05:22:38'),
(3, 'Factory 3', '2015-09-17 05:22:45', '2015-09-17 05:22:45'),
(4, 'Factory 4', '2015-09-17 10:21:08', '2015-09-17 10:21:08'),
(5, 'Factory 5', '2015-09-17 10:21:15', '2015-09-17 10:21:15'),
(6, 'Factory 6', '2015-09-17 10:21:24', '2015-09-17 10:21:24'),
(7, 'FFL', '2015-10-17 05:37:55', '2015-10-17 05:37:55'),
(8, 'Fashion Flash Ltd ', '2015-10-24 08:21:03', '2015-10-24 08:21:03');

-- --------------------------------------------------------

--
-- Table structure for table `finishing`
--

CREATE TABLE IF NOT EXISTS `finishing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `garments_type`
--

CREATE TABLE IF NOT EXISTS `garments_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `garments_type`
--

INSERT INTO `garments_type` (`id`, `name`, `created_at`, `updated_at`) VALUES
(2, 'DENIM', '2015-09-16 07:08:42', '2015-09-16 07:08:42'),
(3, 'NON DENIM', '2015-09-16 07:08:54', '2015-09-16 07:08:54');

-- --------------------------------------------------------

--
-- Table structure for table `hanger`
--

CREATE TABLE IF NOT EXISTS `hanger` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `po_no` int(11) DEFAULT NULL,
  `item` int(11) DEFAULT NULL,
  `supplier` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `po_no` (`po_no`),
  KEY `item` (`item`),
  KEY `supplier` (`supplier`),
  KEY `color` (`color`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `line`
--

CREATE TABLE IF NOT EXISTS `line` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `factory` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `factory` (`factory`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `line`
--

INSERT INTO `line` (`id`, `name`, `factory`, `created_at`, `updated_at`) VALUES
(1, 'Line 1', 1, '2015-09-17 00:00:00', '2015-09-17 00:00:00'),
(2, 'Line 2', 1, '2015-09-17 00:00:00', '2015-09-17 00:00:00'),
(3, 'Line 1', 2, '2015-09-17 00:00:00', '2015-09-17 00:00:00'),
(4, 'Line 2', 2, '2015-09-17 00:00:00', '2015-09-17 00:00:00'),
(5, 'Line 3', 2, '2015-09-17 00:00:00', '2015-09-17 00:00:00'),
(6, 'Line 4', 2, '2015-09-17 00:00:00', '2015-09-17 00:00:00'),
(7, 'Line 1', 3, '2015-09-17 00:00:00', '2015-09-17 00:00:00'),
(8, 'Line 2', 3, '2015-09-17 00:00:00', '2015-09-17 00:00:00'),
(9, 'Line 3', 1, '2015-09-17 08:09:28', '2015-09-17 08:09:28'),
(10, 'LINE A', 7, '2015-10-17 05:38:22', '2015-10-17 05:38:22');

-- --------------------------------------------------------

--
-- Table structure for table `line_efficiency`
--

CREATE TABLE IF NOT EXISTS `line_efficiency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `line` int(11) DEFAULT NULL,
  `garments_type` int(11) DEFAULT NULL,
  `daily_capacity` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `line` (`line`),
  KEY `garments_type` (`garments_type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `line_job`
--

CREATE TABLE IF NOT EXISTS `line_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `line` int(11) DEFAULT NULL,
  `input_date` datetime DEFAULT NULL,
  `output_date` datetime DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `tpd` int(11) DEFAULT NULL,
  `completed_quantity` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `line` (`line`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `line_job`
--

INSERT INTO `line_job` (`id`, `line`, `input_date`, `output_date`, `quantity`, `duration`, `tpd`, `completed_quantity`, `created_at`, `updated_at`) VALUES
(21, 2, '2015-10-16 18:00:00', '2015-10-29 18:00:00', 4530, 13, 349, NULL, '2015-10-17 03:46:24', '2015-10-17 03:46:24'),
(22, 4, '2015-10-16 18:00:00', '2015-10-28 18:00:00', 7332, 12, 611, NULL, '2015-10-17 03:46:38', '2015-10-17 03:46:38'),
(23, 1, '2015-10-16 18:00:00', '2015-10-28 18:00:00', 7250, 12, 605, NULL, '2015-10-17 05:28:13', '2015-10-17 05:28:13'),
(24, 1, '2015-10-16 18:00:00', '2015-10-26 18:00:00', 8302, 10, 831, NULL, '2015-10-17 05:42:04', '2015-10-17 05:42:04'),
(25, 10, '2015-10-25 18:00:00', '2015-11-05 18:00:00', 7416, 11, 675, NULL, '2015-10-17 05:45:32', '2015-10-17 05:45:32');

-- --------------------------------------------------------

--
-- Table structure for table `line_job_po`
--

CREATE TABLE IF NOT EXISTS `line_job_po` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `line_job` int(11) DEFAULT NULL,
  `po_no` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `line_job` (`line_job`),
  KEY `po_no` (`po_no`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `line_job_po`
--

INSERT INTO `line_job_po` (`id`, `line_job`, `po_no`, `created_at`, `updated_at`) VALUES
(25, 21, 30, '2015-10-17 03:46:24', '2015-10-17 03:46:24'),
(26, 22, 31, '2015-10-17 03:46:38', '2015-10-17 03:46:38'),
(27, 22, 32, '2015-10-17 03:46:38', '2015-10-17 03:46:38'),
(28, 22, 33, '2015-10-17 03:46:38', '2015-10-17 03:46:38'),
(29, 23, 25, '2015-10-17 05:28:13', '2015-10-17 05:28:13'),
(30, 24, 26, '2015-10-17 05:42:04', '2015-10-17 05:42:04'),
(31, 24, 27, '2015-10-17 05:42:04', '2015-10-17 05:42:04'),
(32, 24, 28, '2015-10-17 05:42:04', '2015-10-17 05:42:04'),
(33, 24, 29, '2015-10-17 05:42:04', '2015-10-17 05:42:04'),
(34, 25, 20, '2015-10-17 05:45:32', '2015-10-17 05:45:32'),
(35, 25, 21, '2015-10-17 05:45:32', '2015-10-17 05:45:32'),
(36, 25, 22, '2015-10-17 05:45:32', '2015-10-17 05:45:32'),
(37, 25, 23, '2015-10-17 05:45:32', '2015-10-17 05:45:32'),
(38, 25, 24, '2015-10-17 05:45:32', '2015-10-17 05:45:32');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buyer` int(11) DEFAULT NULL,
  `style` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `buyer` (`buyer`),
  KEY `style` (`style`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10000011 ;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `buyer`, `style`, `status`, `created_at`, `updated_at`) VALUES
(10000002, 2, 2, 0, '2015-09-16 07:07:54', '2015-10-08 04:17:46'),
(10000003, 2, 3, 0, '2015-09-17 06:36:17', '2015-10-08 04:17:38'),
(10000004, 2, 4, 0, '2015-09-19 06:30:58', '2015-10-08 04:17:32'),
(10000005, 2, 5, 1, '2015-09-19 06:38:45', '2015-10-17 05:27:04'),
(10000006, 2, 6, 1, '2015-09-19 06:44:49', '2015-10-11 03:31:01'),
(10000007, 2, 7, 1, '2015-09-19 06:54:13', '2015-10-10 07:09:41'),
(10000008, 2, 8, 0, '2015-09-19 07:00:12', '2015-10-10 06:35:27'),
(10000009, 4, 12, 1, '2015-10-24 08:34:58', '2015-10-24 08:37:44'),
(10000010, 5, 14, 0, '2015-10-25 07:02:56', '2015-10-25 07:02:56');

-- --------------------------------------------------------

--
-- Table structure for table `po_code`
--

CREATE TABLE IF NOT EXISTS `po_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `po_no` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `po_no` (`po_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order_no`
--

CREATE TABLE IF NOT EXISTS `purchase_order_no` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order` int(11) DEFAULT NULL,
  `po_no` varchar(255) DEFAULT NULL,
  `reference` int(11) DEFAULT NULL,
  `garments_type` int(11) DEFAULT NULL,
  `department` int(11) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `season` int(11) DEFAULT NULL,
  `hanger` int(11) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `fabric` int(11) DEFAULT NULL,
  `wash` int(11) DEFAULT NULL,
  `embroidery` int(11) DEFAULT NULL,
  `finishing` int(11) DEFAULT NULL,
  `order_quantity` int(11) DEFAULT NULL,
  `inspection` datetime DEFAULT NULL,
  `fob` float DEFAULT NULL,
  `cnf` float DEFAULT NULL,
  `shipment_date` datetime DEFAULT NULL,
  `mode_of_shipment` tinyint(1) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_po` (`order`,`po_no`),
  KEY `reference` (`reference`),
  KEY `garments_type` (`garments_type`),
  KEY `department` (`department`),
  KEY `country` (`country`),
  KEY `season` (`season`),
  KEY `hanger` (`hanger`),
  KEY `brand` (`brand`),
  KEY `fabric` (`fabric`),
  KEY `wash` (`wash`),
  KEY `embroidery` (`embroidery`),
  KEY `finishing` (`finishing`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

--
-- Dumping data for table `purchase_order_no`
--

INSERT INTO `purchase_order_no` (`id`, `order`, `po_no`, `reference`, `garments_type`, `department`, `country`, `season`, `hanger`, `brand`, `fabric`, `wash`, `embroidery`, `finishing`, `order_quantity`, `inspection`, `fob`, `cnf`, `shipment_date`, `mode_of_shipment`, `status`, `created_at`, `updated_at`) VALUES
(4, 10000002, '261667', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7790, '2015-10-15 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-16 07:16:15', '2015-09-16 07:16:15'),
(5, 10000002, '261584', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3970, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-16 07:47:58', '2015-10-01 11:14:54'),
(7, 10000002, '424225', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 396, '2015-09-29 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-17 06:29:59', '2015-09-17 06:29:59'),
(8, 10000002, '261585', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1880, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-17 06:31:01', '2015-09-17 06:31:01'),
(9, 10000003, '261380', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2680, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-17 06:37:41', '2015-10-01 11:14:51'),
(10, 10000003, '261382', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1440, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-17 06:38:17', '2015-09-17 06:38:17'),
(11, 10000003, '424001', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1998, '2015-09-07 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-17 06:40:04', '2015-10-01 11:14:58'),
(12, 10000003, '424107', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 396, '2015-09-07 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-17 06:41:09', '2015-10-01 11:14:48'),
(13, 10000004, '261384', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9552, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-19 06:32:57', '2015-09-19 06:32:57'),
(14, 10000004, '261385', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2240, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-19 06:33:25', '2015-09-19 06:33:25'),
(15, 10000004, '261386', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1480, '2015-11-19 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-19 06:34:10', '2015-10-01 11:14:43'),
(16, 10000004, '261698', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 792, '2015-11-19 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-19 06:34:49', '2015-09-19 06:34:49'),
(17, 10000004, '424000', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3852, '2015-09-07 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-19 06:35:31', '2015-09-19 06:35:31'),
(18, 10000004, '424095', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 396, '2015-09-07 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-19 06:36:06', '2015-09-19 06:36:06'),
(19, 10000002, '424148', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4068, '2015-09-24 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 0, '2015-09-19 06:38:16', '2015-10-01 11:14:36'),
(20, 10000005, '261447', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3204, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:41:15', '2015-10-17 05:45:32'),
(21, 10000005, '261671', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 792, '2015-11-19 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:42:07', '2015-10-17 05:45:32'),
(22, 10000005, '424005', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2412, '2015-09-07 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:42:54', '2015-10-17 05:45:32'),
(23, 10000005, '424107', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 648, '2015-09-07 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:43:47', '2015-10-17 05:45:32'),
(24, 10000005, '424095', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 360, '2015-09-07 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:44:26', '2015-10-17 05:45:32'),
(25, 10000006, '261668', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7250, '2015-10-15 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:48:21', '2015-10-17 05:28:13'),
(26, 10000006, '261557', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1560, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:49:08', '2015-10-17 05:42:04'),
(27, 10000006, '261555', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2800, '2015-09-04 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:49:37', '2015-10-17 05:42:04'),
(28, 10000006, '424148', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2826, '2015-09-24 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:51:05', '2015-10-17 05:42:04'),
(29, 10000006, '424225', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1116, '2015-09-29 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:51:54', '2015-10-17 05:42:04'),
(30, 10000007, '261472', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4530, '2015-09-14 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:57:13', '2015-10-17 03:46:24'),
(31, 10000007, '261473', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1680, '2015-09-14 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:57:54', '2015-10-17 03:46:38'),
(32, 10000007, '424148', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4860, '2015-09-24 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:58:41', '2015-10-17 03:46:38'),
(33, 10000007, '424225', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 792, '2015-09-29 18:00:00', NULL, NULL, '2015-11-23 18:00:00', NULL, 1, '2015-09-19 06:59:33', '2015-10-17 03:46:38'),
(34, 10000004, '1234', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2000, '2015-10-22 18:00:00', NULL, NULL, '2015-10-26 18:00:00', NULL, 0, '2015-10-17 05:33:33', '2015-10-17 05:33:33'),
(35, 10000009, '00032M', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 10000, '2015-12-13 18:00:00', NULL, NULL, '2015-12-16 18:00:00', NULL, 0, '2015-10-24 08:36:42', '2015-10-24 08:36:42');

-- --------------------------------------------------------

--
-- Table structure for table `season`
--

CREATE TABLE IF NOT EXISTS `season` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `season`
--

INSERT INTO `season` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'SUMMER''16', '2015-09-19 06:32:17', '2015-09-19 06:32:17');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE IF NOT EXISTS `size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `style`
--

CREATE TABLE IF NOT EXISTS `style` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `style`
--

INSERT INTO `style` (`id`, `name`, `created_at`, `updated_at`) VALUES
(2, 'BOY-0007', '2015-09-16 06:57:05', '2015-09-16 06:57:05'),
(3, 'BOY-0012', '2015-09-17 06:35:15', '2015-09-17 06:35:15'),
(4, 'BOY-0013', '2015-09-17 06:35:27', '2015-09-17 06:35:27'),
(5, 'BOY-0018', '2015-09-17 06:35:34', '2015-09-17 06:35:34'),
(6, 'BOY-0025', '2015-09-17 06:35:40', '2015-09-17 06:35:40'),
(7, 'GIR-0042', '2015-09-19 06:53:08', '2015-09-19 06:53:08'),
(8, 'GIR-0040', '2015-09-19 06:53:23', '2015-09-19 06:53:23'),
(9, 'BOY-0057', '2015-09-19 06:53:37', '2015-09-19 06:53:37'),
(10, 'BOY-0109', '2015-09-19 06:53:45', '2015-09-19 06:53:45'),
(11, 'BOY-0051', '2015-09-19 06:54:00', '2015-09-19 06:54:00'),
(12, 'RIGITA', '2015-10-24 08:33:20', '2015-10-24 08:33:20'),
(13, '57561', '2015-10-25 07:00:35', '2015-10-25 07:00:35'),
(14, '80068', '2015-10-25 07:01:18', '2015-10-25 07:01:18');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE IF NOT EXISTS `supplier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE IF NOT EXISTS `unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` text,
  `last_name` text,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `access_level` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `access_level`, `created_at`, `updated_at`) VALUES
(1, 'MAK', 'Ripon', 'abc@abc.abc', '1234', '1', '2015-09-15 05:44:47', '2015-09-15 05:44:47');

-- --------------------------------------------------------

--
-- Table structure for table `wash`
--

CREATE TABLE IF NOT EXISTS `wash` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `wash`
--

INSERT INTO `wash` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, NULL, '2015-10-04 07:58:52', '2015-10-04 07:58:52');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `break_down`
--
ALTER TABLE `break_down`
  ADD CONSTRAINT `break_down_ibfk_1` FOREIGN KEY (`code_color`) REFERENCES `code_color` (`id`),
  ADD CONSTRAINT `break_down_ibfk_2` FOREIGN KEY (`size`) REFERENCES `size` (`id`);

--
-- Constraints for table `code_color`
--
ALTER TABLE `code_color`
  ADD CONSTRAINT `code_color_ibfk_1` FOREIGN KEY (`po_code`) REFERENCES `po_code` (`id`),
  ADD CONSTRAINT `code_color_ibfk_2` FOREIGN KEY (`color`) REFERENCES `color` (`id`);

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`po_no`) REFERENCES `purchase_order_no` (`id`),
  ADD CONSTRAINT `item_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`),
  ADD CONSTRAINT `item_ibfk_3` FOREIGN KEY (`supplier`) REFERENCES `supplier` (`id`),
  ADD CONSTRAINT `item_ibfk_4` FOREIGN KEY (`color`) REFERENCES `color` (`id`);

--
-- Constraints for table `line`
--
ALTER TABLE `line`
  ADD CONSTRAINT `line_ibfk_1` FOREIGN KEY (`factory`) REFERENCES `factory` (`id`);

--
-- Constraints for table `line_efficiency`
--
ALTER TABLE `line_efficiency`
  ADD CONSTRAINT `line_efficiency_ibfk_1` FOREIGN KEY (`line`) REFERENCES `line` (`id`),
  ADD CONSTRAINT `line_efficiency_ibfk_2` FOREIGN KEY (`garments_type`) REFERENCES `garments_type` (`id`);

--
-- Constraints for table `line_job`
--
ALTER TABLE `line_job`
  ADD CONSTRAINT `line_job_ibfk_1` FOREIGN KEY (`line`) REFERENCES `line` (`id`);

--
-- Constraints for table `line_job_po`
--
ALTER TABLE `line_job_po`
  ADD CONSTRAINT `line_job_po_ibfk_1` FOREIGN KEY (`line_job`) REFERENCES `line_job` (`id`),
  ADD CONSTRAINT `line_job_po_ibfk_2` FOREIGN KEY (`po_no`) REFERENCES `purchase_order_no` (`id`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`buyer`) REFERENCES `buyer` (`id`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`style`) REFERENCES `style` (`id`);

--
-- Constraints for table `po_code`
--
ALTER TABLE `po_code`
  ADD CONSTRAINT `po_code_ibfk_1` FOREIGN KEY (`po_no`) REFERENCES `purchase_order_no` (`id`);

--
-- Constraints for table `purchase_order_no`
--
ALTER TABLE `purchase_order_no`
  ADD CONSTRAINT `purchase_order_no_ibfk_1` FOREIGN KEY (`order`) REFERENCES `order` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_10` FOREIGN KEY (`wash`) REFERENCES `wash` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_11` FOREIGN KEY (`embroidery`) REFERENCES `embroidery` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_12` FOREIGN KEY (`finishing`) REFERENCES `finishing` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_2` FOREIGN KEY (`reference`) REFERENCES `purchase_order_no` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_3` FOREIGN KEY (`garments_type`) REFERENCES `garments_type` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_4` FOREIGN KEY (`department`) REFERENCES `department` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_5` FOREIGN KEY (`country`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_6` FOREIGN KEY (`season`) REFERENCES `season` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_7` FOREIGN KEY (`hanger`) REFERENCES `hanger` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_8` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `purchase_order_no_ibfk_9` FOREIGN KEY (`fabric`) REFERENCES `fabric` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
