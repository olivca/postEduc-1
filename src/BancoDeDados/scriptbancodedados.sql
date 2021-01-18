create database if not exists posteduc;
use posteduc;

-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `sobrenome` varchar(150) DEFAULT NULL,
  `nome_usuario` varchar(30) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `nascimento` varchar(10) DEFAULT NULL,
  `genero` varchar(15) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `escola` varchar(100) DEFAULT NULL,
  `ano_letivo` varchar(45) DEFAULT NULL,
  `tipo_escola` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


create table if not exists evento (
	id_evento 	     int           not null auto_increment,
	modalidade       varchar(30)   default null, 
	nome_evento      varchar(200)  default null, 
	categoria        varchar(100)  default null, 
	data_postagem    date          default null, 
	hora_postagem    time          default null, 
	data_evento      date          default null,  
	hora_evento      time          default null, 
	criador_evento   int           default null, 
	organizadores    varchar(100)  default null, 
	descricao        text          default null, 
	link             varchar(300)  default null, 
	estado           varchar(100)  default null, 
	cidade           varchar(100)  default null,  
	bairro           varchar(100)  default null, 
	logradouro       varchar(100)  default null, 
	numero           varchar(50)   default null, 
	complemento      varchar(50)   default null, 
	cep              varchar(50)   default null, 
	carga_horaria    varchar(50)   default null, 
	imagem           varchar(1000) default null, 
  verificado       boolean       default null,
  telefone         int           default null, 
	
     
  primary key (id_evento),
  foreign key (criador_evento) references usuario (id_usuario) 
);

create table if not exists denuncia (
	id_denuncia        int 				 not null auto_increment,
	id_user_denuncia   int				 not null,
	id_evento_denuncia int				 not null,
	tipo_denuncia      varchar(50) not null,
	data_denuncia      date        not null,
	denuncia	         text				 default null,
    
 	primary key (id_denuncia),
  foreign key (id_user_denuncia)   references usuario (id_usuario),
  foreign key (id_evento_denuncia) references evento (id_evento)
);

create table if not exists comentarios(
	id_comentario    int           not null auto_increment,
  id_usuario_fk    int           not null,
  id_evento_fk     int		   not null,
  data_comentario  date          not null,
  tipo_comentario  varchar(100)  not null,
  comentario       varchar(300)  not null,
    
  primary key (id_comentario),
  foreign key (id_usuario_fk) references usuario (id_usuario),
  foreign key (id_evento_fk)  references evento (id_evento)
);

create view organizador as
	select nome_evento, id_evento, nome, id_usuario from evento inner join usuario where evento.criador_evento = usuario.id_usuario ;
    
    

create view mostrar_denuncias as
	select id_denuncia,tipo_denuncia,data_denuncia,denuncia, nome_evento,id_evento,nome,id_usuario 
  from denuncia inner join evento inner join usuario where id_evento_denuncia = id_evento and id_user_denuncia = id_usuario;

