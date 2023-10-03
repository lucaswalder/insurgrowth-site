<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
		$nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
		$mensagem = $_POST['mensagem'];
		
        require './vendor/autoload.php';

        $from = new SendGrid\Email(null, "willmoreiradev@gmail.com");
        $subject = "Contato do Site : Insurgrowth";
        $to = new SendGrid\Email(null, "william_areado@hotmail.com");
        $content = new SendGrid\Content("text/html", 
            "<h2>Contato site:</h2>, <br><br>
            Nova mensagem de contato<br><br>
            Nome: $nome<br>
            Email: $email <br>
            Telefone: $telefone <br>
            Mensagem: $mensagem");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = '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';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso!";
		
        ?>
    </body>
</html>
