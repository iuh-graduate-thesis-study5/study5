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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoidung`
--

LOCK TABLES `nguoidung` WRITE;
/*!40000 ALTER TABLE `nguoidung` DISABLE KEYS */;
INSERT INTO `nguoidung` VALUES (1,'TuanKhang','Khang@gmail.com','0976553787','2023-03-23 21:03:44','Nam','HCM'),(2,'HuuTho','Tho@gmail.com','0976553788','2023-03-23 21:03:44','Nu','HCM'),(3,'ThanhHoai','hoai@gmail.com','0978654123','2023-03-23 21:10:55','Nam','HCM'),(4,'ThoBede','thobede@gmail.com','0976553787','2023-03-23 21:30:07','Nữ','HCM'),(5,'ThoBede','thobede@gmail.com','0976553787','2023-03-23 21:30:55','Nữ','HCM'),(6,'ThoBede','thobede@gmail.com','0976553787','2023-03-23 21:31:21','Nữ','HCM'),(7,'ThoBede','thobede@gmail.com','0976553787','2023-03-23 21:31:33','Nữ','HCM'),(8,'ThoBede1','thobede@gmail.com','0976553787','2023-03-23 21:31:45','Nữ','HCM');
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
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
  `trangthai` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_nguoidung` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `frk_taikhoan_idx` (`id_nguoidung`),
  CONSTRAINT `fk_id_nguoidung` FOREIGN KEY (`id_nguoidung`) REFERENCES `nguoidung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (1,'thobede1','$2a$10$bKuhAkjjzQ8okRLztpASmeQRVZ332xT8BbAVTg8Yy3HbPVsEzxAD6','STUDENT','1',0),(2,'admin','$2a$10$bKuhAkjjzQ8okRLztpASmeQRVZ332xT8BbAVTg8Yy3HbPVsEzxAD6','ADMIN','1',1);
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

-- Dump completed on 2023-03-24 23:00:07
