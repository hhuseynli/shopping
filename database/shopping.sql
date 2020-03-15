CREATE DATABASE  IF NOT EXISTS `spring_ng_huseyn_shopping` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `spring_ng_huseyn_shopping`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: localhost    Database: spring_ng_huseyn_shopping
-- ------------------------------------------------------
-- Server version	5.5.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authorities`
--

DROP TABLE IF EXISTS `authorities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authorities` (
  `username` varchar(50) NOT NULL,
  `authority` varchar(45) NOT NULL,
  UNIQUE KEY `authorities_idx_1` (`username`,`authority`),
  CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authorities`
--

LOCK TABLES `authorities` WRITE;
/*!40000 ALTER TABLE `authorities` DISABLE KEYS */;
INSERT INTO `authorities` VALUES ('HH','ROLE_ADMIN'),('UserA','ROLE_USER');
/*!40000 ALTER TABLE `authorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Memory drives'),(2,'Other'),(3,'Electronic devices'),(4,'Sport '),(5,'Test'),(6,'Accessories'),(7,'Book'),(8,'Furniture'),(9,'Food');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Huseyn','+994505555555','Nasimi','Baku','huseyn00h1843@gmail.com'),(5,'Huseyn','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com'),(6,'Huseyn','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com'),(7,'Huseyn','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com'),(8,'Huseyn','+994505555555','Yasamal 3400','Baku','huseyn00h1843@gmail.com'),(9,'Huseyn','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com'),(10,'Husey','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com'),(11,'Huseyn','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com'),(12,'Huseyn','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com'),(13,'Huseyn','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com'),(14,'Huseyn','+994505555555','Nizami gencevi 12','Baku','huseyn00h1843@gmail.com'),(15,'Huseyn','+994505555555','Yasamal','Baku','huseyn00h1843@gmail.com');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhnfgqyjx3i80qoymrssls3kno` (`product_id`),
  KEY `FKl5mnj9n0di7k1v90yxnthkc73` (`order_id`),
  CONSTRAINT `FKhnfgqyjx3i80qoymrssls3kno` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `FKl5mnj9n0di7k1v90yxnthkc73` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (1,81,3,12),(2,82,3,1),(3,81,8,1),(4,82,8,1),(5,81,10,1),(6,81,9,1),(7,82,10,2),(8,82,9,2),(9,91,10,2),(10,91,9,2),(11,81,11,1),(12,82,11,1),(13,81,12,1),(14,82,12,1),(15,81,13,5),(16,82,13,1),(17,91,14,2),(18,82,14,1),(19,81,15,1),(20,82,15,1),(21,82,16,1),(22,81,16,1),(23,82,30,1),(24,101,31,1);
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` double DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK624gtjin3po807j3vix093tlf` (`customer_id`),
  CONSTRAINT `FK624gtjin3po807j3vix093tlf` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (3,14400,1,'qeyd 1','HH'),(8,3400,5,'Zehmet olmasa tezlikle mene catdirin.','HH'),(9,8000,7,'Zehmet olmasa tezlikle mene catdirin.','HH'),(10,8000,6,'Zehmet olmasa tezlikle mene catdirin.','HH'),(11,3400,8,'Zehmet olmasa tezlikle mene catdirin.','HH'),(12,3400,9,'note','HH'),(13,8200,10,'Zehmet olmasa tezlikle mene catdirin.','HH'),(14,4600,11,'Zehmet olmasa tezlikle mene catdirin.','HH'),(15,3400,12,'Zehmet olmasa tezlikle mene catdirin.','HH'),(16,3400,13,'note','HH'),(17,14400,1,'qeyd 1','HH'),(18,14400,1,'qeyd 1','HH'),(19,14400,1,'qeyd 1','HH'),(20,14400,1,'qeyd 1','HH'),(21,14400,1,'qeyd 1','HH'),(22,14400,1,'qeyd 1','HH'),(23,14400,1,'qeyd 1','HH'),(24,14400,1,'qeyd 1','HH'),(25,14400,1,'qeyd 1','HH'),(26,14400,1,'qeyd 1','HH'),(27,14400,1,'qeyd 1','HH'),(28,14400,1,'qeyd 1','HH'),(29,14400,1,'qeyd 1','HH'),(30,2200,14,'Zehmet olmasa tezlikle mene catdirin.','u2'),(31,900,15,'Zehmet olmasa tezlikle mene catdirin.','UserA');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `description` text,
  `price` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`),
  CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (81,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(82,'iMac','28825199-9a41-40ae-b5db-4981a524afb6.jpg','1TB',2200,2,'HH'),(91,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(92,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(93,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(94,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(95,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(96,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(97,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(98,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(100,'iPhone 11 Pro','6e63e61f-511d-487a-b12d-17176d8a2dfd.jpg','512GB',1200,3,'HH'),(101,'iPhone 11','5736c5fa-7138-4f2b-a0b7-b0f36b0b68f3.png','Lite version',900,3,'u2'),(102,'product',NULL,'121',12,2,'u2');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `full_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('HH','{noop}H123',1,'Huseyn H'),('UserA','{noop}user1',1,'Full ad');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-15 17:45:25
