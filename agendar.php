<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/plugins.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Agende uma apresentação - Insurgrowth</title>
</head>

<body>
    <section class="s-agenda">
        <div class="s-esq">
            <div class="cont">
                <a href="index.html">
                    <img src="img/logo.svg" class="logo" alt="">
                </a>
                <div class="texto">
                    <img src="img/balao-chat.svg" class="icone" alt="">
                    <h1>Agende uma apresentação</h1>
                    <p>Nossos consultores estão prontos para te atender. Nos envie uma mensagem para agendar uma
                        apresentação. </p>
                    <div class="social">
                        <img src="./img/line.png" class="line" alt="">
                        <ul>
                            <li><a href="" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa fa-youtube"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="s-dir">
            <div class="cont">
                <a href="index.html" class="btn-voltar">Voltar para o site</a>
                <form action="" id="form_agenda" action="./enviar-agenda.php">
                    <div class="form-group">
                        <label for="">Nome Completo</label>
                        <input type="text" class="form-control" name="nome">
                    </div>
                    <div class="form-group">
                        <label for="">E-mail</label>
                        <input type="email" class="form-control" name="email">
                    </div>
                    <div class="form-group">
                        <label for="">Telefone</label>
                        <input type="text" class="form-control" mask="phone" name="telefone">
                    </div>
                    <div class="form-group">
                        <label for="">Mensagem</label>
                        <textarea class="form-control" name="mensagem"></textarea>
                    </div>
                    <div class="form-group d-flex justify-content-end">
                        <input type="submit" value="Enviar">
                    </div>
                </form>
            </div>
        </div>
    </section>


    <script src="js/plugins.js"></script>
    <script src="js/all.min.js"></script>
</body>

</html>