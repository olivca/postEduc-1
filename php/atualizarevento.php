<?php

  require_once('./conexao.php');
  
  $nome_imagem = $_FILES['imagem']['name'];
  $temp_file = $_FILES['imagem']['tmp_name'];
  $destino = "../img/$nome_imagem";
  move_uploaded_file($temp_file,$destino);


  $id             = $_POST['id_evento'];
  $criador_evento = $_POST['criador_evento'];
  $data_edicao    = $_POST['data_edicao'];
  $hora_edicao    = $_POST['hora_edicao'];
  $verificado     = $_POST['verificado'];
  $data_postagem  = $_POST['data_postagem'];
  $hora_postagem  = $_POST['hora_postagem'];
  $presencial     = $_POST['modalidade'];

  $nome_evento    = $_POST['nome_evento'];
  $categoria      = $_POST['categoria'];
  $data_evento    = $_POST['data_evento'];
  $hora_evento    = $_POST['hora_evento'];
  $organizadores  = $_POST['organizadores']; ;
  $link           = $_POST['lin'];
  $cep            = $_POST['ceps'];
  $estado         = $_POST['estado']; ;
  $cidade         = $_POST['cidade'];
  $bairro         = $_POST['bairro'];
  $logradouro     = $_POST['logradouro'];
  $numero         = $_POST['num'];
  $complemento    = $_POST['comple'];
  $descricao      = $_POST['descricao'];
  $cargahoraria   = $_POST['carga_horaria'];
  $telefone       = $_POST['telefone'];

  $update = "update evento set 
   modalidade = '$presencial',
   nome_evento = '$nome_evento', 
   categoria = '$categoria', 
   data_postagem = '$data_postagem', 
   hora_postagem = '$hora_postagem', 
   data_evento = '$data_evento', 
   hora_evento = '$hora_evento', 
   criador_evento = '$criador_evento',
   organizadores = '$organizadores', 
   descricao = '$descricao', 
   link = '$link', 
   estado = '$estado', 
   cidade = '$cidade', 
   bairro = '$bairro', 
   logradouro = '$logradouro',
   numero = '$numero', 
   complemento = '$complemento', 
   cep = '$cep', 
   carga_horaria = '$cargahoraria', 
   imagem = '$destino', 
   verificado = '$verificado',
   data_edicao = '$data_edicao',
   hora_edicao = '$hora_edicao',
   telefone = '$telefone' where id_evento = '$id';";
  



  $resultado = mysqli_query($conexao,$update);

  if(!$resultado){
    echo 'nao deu pra atualizar';
  } else {
    echo 'evento atualizado';
  }

  mysqli_close($conexao);

  
  // $update = "update evento set modalidade = 'online',
  //  nome_evento = 'teste', categoria = 'reggae', 
  //  data_postagem = '2020-05-25', 
  //  hora_postagem = '22:22', 
  //  data_evento = '2021-05-08', 
  //  hora_evento = '15:15', 
  //  criador_evento = '2',
  //  organizadores = 'lembranças', 
  //  descricao = 'agora vai mane rs', 
  //  link = 'link bom', 
  //  estado = 'mt', 
  //  cidade = 'mt', 
  //  bairro = 'mt', 
  //  logradouro = 'mt',
  //  numero = 15, 
  //  complemento = 'mt', 
  //  cep = 125, 
  //  carga_horaria = 15, 
  //  imagem = '', 
  //  verificado = 0,
  //  telefone = 8888 where id_evento = 5;";
?>