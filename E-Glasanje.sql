-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: t2
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
-- Table structure for table `clan`
--

DROP TABLE IF EXISTS `clan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clan` (
  `idCla` int NOT NULL,
  `imeCla` varchar(45) NOT NULL,
  `prezimeCla` varchar(45) NOT NULL,
  `korIme` varchar(45) NOT NULL,
  `sifra` varchar(45) NOT NULL,
  `tip` int NOT NULL,
  `jeGlasao` int NOT NULL,
  `jeKandidovao` int NOT NULL,
  `idMatSek` int NOT NULL,
  `idRegCen` int NOT NULL,
  PRIMARY KEY (`idCla`,`idMatSek`,`idRegCen`),
  KEY `fk_Clan_matSekcija1_idx` (`idMatSek`,`idRegCen`),
  CONSTRAINT `fk_Clan_matSekcija1` FOREIGN KEY (`idMatSek`, `idRegCen`) REFERENCES `matsekcija` (`idMatSek`, `idRegCen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clan`
--

LOCK TABLES `clan` WRITE;
/*!40000 ALTER TABLE `clan` DISABLE KEYS */;
INSERT INTO `clan` VALUES (100,'Admin','Admin','Admin','Admin',0,0,0,11,1),(111,'Filip','Kostic','FilipKostic','FilipK',1,1,1,11,1),(112,'Ana','VItas','AnaVItas','AnaV',1,1,1,11,1),(113,'Pera','Zec','PeraZec','PeraZ',1,1,0,11,1),(114,'Sneza','Despotovic','SnezaDespotovic','SnezaD',1,0,0,11,1),(115,'Milica','Skopljak','MilicaSkopljak','MilicaS',1,0,0,11,1),(116,'Goran','Planincic','GoranPlanincic','GoranP',1,0,0,11,1),(117,'Stefan','Kostic','StefanKostic','StefanK',1,0,0,11,1),(118,'Stefan','Tubic','StefanTubic','StefanT',1,0,0,11,1),(121,'Igor','Maric','IgorMaric','IgorM',1,0,0,12,1),(122,'Petar','Mitic','PetarMitic','PetarM',1,0,0,12,1),(123,'Ema','Eric','EmaEric','EmaE',1,1,1,12,1),(131,'Iva','Peric','IvaPeric','IvaP',1,1,0,13,1),(132,'Leon','Kitic','LeonKitic','LeonK',1,1,0,13,1),(133,'Mile','Ilic','MileIlic','MileI',1,1,1,13,1),(211,'Slavko','Bolic','SlavkoBolic','SlavkoB',1,1,0,21,2),(212,'Bosko','Zoric','BoskoZoric','BoskoZ',1,0,0,21,2),(213,'Mila','Zilic','MilaZilic','MilaZ',1,1,0,21,2),(221,'Goran','Zigic','GoranZigic','GoranZ',1,0,0,22,2),(222,'Vlada','Mihic','VladaMihic','VladaM',1,0,0,22,2),(223,'Petar','Peric','PetarPeric','PetarP',1,0,0,22,2),(231,'Zana','Jovic','ZanaJovic','ZanaJ',1,0,0,23,2),(232,'Mara','Kozic','MaraKozic','MaraK',1,0,0,23,2),(233,'Ana','Polic','AnaPolic','AnaP',1,0,0,23,2),(311,'Mihajlo','Mitic','MihajloMitic','MihajloM',1,0,0,31,3),(312,'Zvonko','Zec','ZvonkoZec','ZvonkoZ',1,0,0,31,3),(313,'Vesna','Jeftic','VesnaJeftic','VesnaJ',1,0,0,31,3),(321,'Milenko','Tepavac','MilenkoTepavac','MilenkoT',1,0,0,32,3),(322,'Nikola','Batalo','NikolaBatalo','NikolaB',1,0,0,32,3),(323,'Petar','Kralj','PetarKralj','PetarK',1,0,0,32,3),(331,'Vanja','Antic','VanjaAntic','VanjaA',1,0,0,33,3),(332,'Sara','Matic','SaraMatic','SaraM',1,0,0,33,3),(333,'Milos','Aleksic','MilosAleksic','MilosA',1,0,0,33,3),(341,'Ivan','Strugar','IvanStrugar','IvanS',1,0,0,34,3),(342,'Jakov','Miletic','JakovMiletic','JakovM',1,0,0,34,3),(343,'Nada','Vasic','NadaVasic','NadaV',1,0,0,34,3);
/*!40000 ALTER TABLE `clan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matsekcija`
--

DROP TABLE IF EXISTS `matsekcija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matsekcija` (
  `idMatSek` int NOT NULL,
  `nazivMatSek` varchar(45) NOT NULL,
  `idRegCen` int NOT NULL,
  PRIMARY KEY (`idMatSek`,`idRegCen`),
  KEY `fk_matSekcija_regCentar_idx` (`idRegCen`),
  CONSTRAINT `fk_matSekcija_regCentar` FOREIGN KEY (`idRegCen`) REFERENCES `regcentar` (`idRegCen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matsekcija`
--

LOCK TABLES `matsekcija` WRITE;
/*!40000 ALTER TABLE `matsekcija` DISABLE KEYS */;
INSERT INTO `matsekcija` VALUES (11,'Novi Sad',1),(12,'Subotica',1),(13,'Sombor',1),(21,'Valjevo',2),(22,'Kraljevo',2),(23,'Pirot',2),(31,'Palilula',3),(32,'Stari Grad',3),(33,'Vozdovac',3),(34,'Rakovica',3);
/*!40000 ALTER TABLE `matsekcija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regcentar`
--

DROP TABLE IF EXISTS `regcentar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regcentar` (
  `idRegCen` int NOT NULL,
  `nazivRegCen` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idRegCen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regcentar`
--

LOCK TABLES `regcentar` WRITE;
/*!40000 ALTER TABLE `regcentar` DISABLE KEYS */;
INSERT INTO `regcentar` VALUES (1,'Vojvodina'),(2,'Sumadija'),(3,'Beograd');
/*!40000 ALTER TABLE `regcentar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rezultatiglasanja`
--

DROP TABLE IF EXISTS `rezultatiglasanja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rezultatiglasanja` (
  `idCla` int NOT NULL,
  `brojGlasova` int NOT NULL,
  PRIMARY KEY (`idCla`),
  CONSTRAINT `fk_rezultatiIzbora_Clan1` FOREIGN KEY (`idCla`) REFERENCES `clan` (`idCla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rezultatiglasanja`
--

LOCK TABLES `rezultatiglasanja` WRITE;
/*!40000 ALTER TABLE `rezultatiglasanja` DISABLE KEYS */;
INSERT INTO `rezultatiglasanja` VALUES (111,0),(112,8),(113,6),(114,8),(115,4),(116,6),(117,5),(118,7),(121,0),(122,0),(123,0),(131,2),(132,0),(133,0),(211,2),(212,3),(213,0),(221,0),(222,4),(223,3),(231,0),(232,0),(233,0),(311,0),(312,0),(313,0),(321,0),(322,0),(323,0),(331,0),(332,0),(333,0),(341,0),(342,0),(343,0);
/*!40000 ALTER TABLE `rezultatiglasanja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rezultatikandidovanja`
--

DROP TABLE IF EXISTS `rezultatikandidovanja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rezultatikandidovanja` (
  `idCla` int NOT NULL,
  `brojPutaKandidovan` int NOT NULL,
  PRIMARY KEY (`idCla`),
  CONSTRAINT `fk_table4_Clan1` FOREIGN KEY (`idCla`) REFERENCES `clan` (`idCla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rezultatikandidovanja`
--

LOCK TABLES `rezultatikandidovanja` WRITE;
/*!40000 ALTER TABLE `rezultatikandidovanja` DISABLE KEYS */;
INSERT INTO `rezultatikandidovanja` VALUES (111,1),(112,1),(113,0),(114,0),(115,0),(116,0),(117,0),(118,0),(121,0),(122,0),(123,0),(131,1),(132,0),(133,0),(211,0),(212,0),(213,0),(221,0),(222,0),(223,0),(231,0),(232,0),(233,0),(311,0),(312,0),(313,0),(321,0),(322,0),(323,0),(331,0),(332,0),(333,0),(341,0),(342,0),(343,0);
/*!40000 ALTER TABLE `rezultatikandidovanja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statusizbora`
--

DROP TABLE IF EXISTS `statusizbora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statusizbora` (
  `statusIzbora` varchar(100) NOT NULL,
  `Id` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statusizbora`
--

LOCK TABLES `statusizbora` WRITE;
/*!40000 ALTER TABLE `statusizbora` DISABLE KEYS */;
INSERT INTO `statusizbora` VALUES ('1','1');
/*!40000 ALTER TABLE `statusizbora` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-23 18:10:46
