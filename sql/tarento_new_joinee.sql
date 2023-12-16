-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: tarento
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `new_joinee`
--

DROP TABLE IF EXISTS `new_joinee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_joinee` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `emp_address` varchar(255) DEFAULT NULL,
  `emp_core_skills` varchar(255) DEFAULT NULL,
  `emp_email` varchar(255) DEFAULT NULL,
  `emp_experience` int NOT NULL,
  `emp_hobbies` varchar(255) DEFAULT NULL,
  `emp_ibu` int NOT NULL,
  `emp_name` varchar(255) DEFAULT NULL,
  `emp_phone` decimal(38,0) DEFAULT NULL,
  `emp_quote` varchar(255) DEFAULT NULL,
  `emp_role` int NOT NULL,
  `emp_wwib` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `fk_new_joinee_ibu_idx` (`emp_ibu`),
  KEY `fk_new_joinee_role_idx` (`emp_role`),
  CONSTRAINT `fk_new_joinee_ibu` FOREIGN KEY (`emp_ibu`) REFERENCES `ibu` (`ibu_id`),
  CONSTRAINT `fk_new_joinee_role` FOREIGN KEY (`emp_role`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_joinee`
--

LOCK TABLES `new_joinee` WRITE;
/*!40000 ALTER TABLE `new_joinee` DISABLE KEYS */;
INSERT INTO `new_joinee` VALUES (1,'market road usless street','DevOps','suman@tarento.com',1,'eating',1,'Suman',9562050446,'useless life',3,'nothing'),(101,'house 128, somewhere, unknown, Banglore','Java spring boot, react,','arakrsh@tarento.com',4,'Reading books',2,'Akarsh',8921458809,'Nothing for life',3,'Killer');
/*!40000 ALTER TABLE `new_joinee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-16 14:43:16
