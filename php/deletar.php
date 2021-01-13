<?php
  require_once('./conexao.php');

  $deletar = "delete from evento where id_evento = 16;";

  $resposta = mysqli_query($conexao,$deletar);

  if(!$resposta){
    echo 'não foi possivel deletar o evento.';
  };

  mysqli_close($conexao);
?>