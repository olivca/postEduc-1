<?php

    $servidor = 'localhost';
    $usuario  = 'root';
    $senha    = 'root';
    $banco    = 'posteduc';

    $conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

    if(!$conexao){
        die("a conexão falhou erro: " .mysqli_connect_error());
    }

    header("Access-Control-Allow-Origin:*");

?>

<?php
/*
    
    $servidor = '52.67.245.155';
    $usuario  = 'squad8';
    $senha    = 'Squad8123!';
    $banco    = 'postEduc';

    $conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

    if(!$conexao){
        die("<b><br />Erro de conexão ao banco de dados!<br /></b>" .mysqli_connect_error());
    }

    $a  =  "insert into cadastro_usuario (nome,sobrenome,nome_usuario,nascimento,genero,telefone,email,senha) values ('lucas','damasceno','lucas','1993-09-28','m',999,'email@email.com','123')";

    $res = mysqli_query($conexao,$a);

    if($res){
        echo 'foi';
    } else {
        echo 'azedou o caldo';
    }
    
*/
?>
