-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: study-five
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `cauhoi`
--

DROP TABLE IF EXISTS `cauhoi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cauhoi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `noidung` varchar(255) DEFAULT NULL,
  `dapandung` varchar(45) NOT NULL,
  `id_nhomcauhoi` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `frk_nhomcauhoi_cauhoi_idx` (`id_nhomcauhoi`),
  CONSTRAINT `frk_nhomcauhoi_cauhoi` FOREIGN KEY (`id_nhomcauhoi`) REFERENCES `nhomcauhoi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cauhoi`
--

LOCK TABLES `cauhoi` WRITE;
/*!40000 ALTER TABLE `cauhoi` DISABLE KEYS */;
INSERT INTO `cauhoi` VALUES (1,'What a they','A',1);
/*!40000 ALTER TABLE `cauhoi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dapan`
--

DROP TABLE IF EXISTS `dapan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dapan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `noidung` varchar(45) DEFAULT NULL,
  `loaidapan` int NOT NULL,
  `dapanthu` varchar(45) DEFAULT NULL,
  `id_cauhoi` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `frk_id_cauhoi_dapan_idx` (`id_cauhoi`),
  CONSTRAINT `frk_id_cauhoi_dapan` FOREIGN KEY (`id_cauhoi`) REFERENCES `cauhoi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dapan`
--

LOCK TABLES `dapan` WRITE;
/*!40000 ALTER TABLE `dapan` DISABLE KEYS */;
INSERT INTO `dapan` VALUES (1,'Dog',0,'A',1);
/*!40000 ALTER TABLE `dapan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoidung` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tennguoidung` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `sodienthoai` varchar(45) DEFAULT NULL,
  `ngaytao` datetime DEFAULT CURRENT_TIMESTAMP,
  `gioitinh` varchar(45) DEFAULT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoidung`
--

LOCK TABLES `nguoidung` WRITE;
/*!40000 ALTER TABLE `nguoidung` DISABLE KEYS */;
INSERT INTO `nguoidung` VALUES (1,'HoangLong','Long@gmail.com','0367056454','2023-03-23 21:03:44','Nam','HCM'),(2,'HuuTho','Tho@gmail.com','0976553788','2023-03-23 21:03:44','Nu','HCM'),(11,'Thọ bê đê','a@gmail.com','09878728627','2023-03-26 22:52:55','Nam','123 HCM');
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhomcauhoi`
--

DROP TABLE IF EXISTS `nhomcauhoi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhomcauhoi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `noidungcauhoi` longtext NOT NULL,
  `hinhanh` varchar(255) DEFAULT NULL,
  `amthanh` varchar(255) DEFAULT NULL,
  `ngaytao` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_nguoitao` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `frk_nguoitao_idx` (`id_nguoitao`),
  CONSTRAINT `frk_nguoitao` FOREIGN KEY (`id_nguoitao`) REFERENCES `taikhoan` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhomcauhoi`
--

LOCK TABLES `nhomcauhoi` WRITE;
/*!40000 ALTER TABLE `nhomcauhoi` DISABLE KEYS */;
INSERT INTO `nhomcauhoi` VALUES (1,'What is this',NULL,NULL,'2023-04-03 22:14:31',1),(2,'What is this',NULL,NULL,'2023-04-03 22:14:54',1);
/*!40000 ALTER TABLE `nhomcauhoi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tentaikhoan` varchar(45) NOT NULL,
  `matkhau` varchar(100) NOT NULL,
  `quyen` varchar(45) NOT NULL,
  `trangthai` int NOT NULL,
  `id_nguoidung` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `frk_taikhoan_idx` (`id_nguoidung`),
  CONSTRAINT `fk_id_nguoidung` FOREIGN KEY (`id_nguoidung`) REFERENCES `nguoidung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (1,'tho','$2a$10$bKuhAkjjzQ8okRLztpASmeQRVZ332xT8BbAVTg8Yy3HbPVsEzxAD6','STUDENT',1,0),(2,'admin','$2a$10$bKuhAkjjzQ8okRLztpASmeQRVZ332xT8BbAVTg8Yy3HbPVsEzxAD6','ADMIN',1,1),(18,'a@gmail.com','$2a$10$b..Xcnq9JmQp.l7sauK7HOxOEjQKLSM0G6gmoOK/cHnrLYLGe4Zpi','STUDENT',0,11);
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03 23:12:25
