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
    <title>Contato - Insurgrowth</title>
</head>

<body class="bg-contato">
    <section class="s-contato">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="topo">
                        <a href="index.html" class="logo">
                            <img src="img/logo.svg" alt="">
                        </a>
                        <a href="index.html" class="btn-voltar">Voltar para o site</a>
                    </div>
                    <div class="formulario">
                        <div class="etapas">
                            <ul>
                                <li class="active">
                                    <span>01</span>
                                </li>
                                <li>
                                    <span>02</span>
                                </li>
                                <li>
                                    <span>03</span>
                                </li>
                            </ul>
                            <div class="progresso">
                                <div class="bar"></div>
                            </div>
                        </div>
                        <form action="">
                            <div class="dados-pessoais">
                                <h2>Olá, vamos conversar?</h2>
                                <p>
                                    São apenas alguns passos, basta preencher os campos abaixo e aguardar nosso contato.
                                </p>
                                <div class="whats">
                                    <span>Dúvidas?</span>
                                    <a href="https://api.whatsapp.com/send?phone=5511960609186&text=Olá, gostaria de saber mais sobre a Insurgrowth." target="_blank"><img src="img/icone-whats.svg" alt=""> Também estamos no whatsapp</a>
                                </div>
                                <div class="line"></div>
                                <h3>1. Dados pessoais</h3>
                                <div class="form-group">
                                    <label for="">Nome completo</label>
                                    <input type="text" name="nome" id="inputNome">
                                </div>
                                <div class="form-group">
                                    <label for="">Email Corporativo</label>
                                    <input type="email" id="inputEmailCorporativo" name="email" placeholder="@suaempresa.com.br">
                                </div>
                                <div class="form-group">
                                    <label for="">Telefone</label>
                                    <input type="text" id="inputTelefone" name="telefone" placeholder="DDD + Número">
                                </div>
                                <div class="form-group d-flex justify-content-end">
                                    <button type="button" id="btn-next-empresa">Próximo <img
                                            src="img/arrow-form-next.svg" alt=""></button>
                                </div>
                            </div>
                            <div class="dados-empresa">
                                <h3>2. Sobre a empresa</h3>
                                <div class="form-group">
                                    <label for="">Empresa</label>
                                    <input type="text" id="inputEmpresa" name="empresa" placeholder="Digite o nome da empresa">
                                </div>
                                <div class="form-group">
                                    <label for="">Segmento de atuação da empresa</label>
                                    <div class="select-custom">
                                        <input type="hidden" id="inputSegmento" name="segmento_empresa" value="">
                                        <div class="item-selected">
                                            <span>Selecione</span>
                                            <div class="arrow"></div>
                                        </div>
                                        <ul class="drop-select">
                                            <li>
                                                <a href="">Corretora de Seguros</a>
                                            </li>
                                            <li>
                                                <a href="">Assessoria de Seguros</a>
                                            </li>
                                            <li>
                                                <a href="">Seguradora</a>
                                            </li>
                                            <li>
                                                <a href="">Insurtech</a>
                                            </li>
                                            <li>
                                                <a href="">Planos de Saúde e Odontológicos</a>
                                            </li>
                                            <li>
                                                <a href="">Software e Tecnologia em Seguros</a>
                                            </li>
                                            <li>
                                                <a href="">Educação / Ensino / Pesquisa</a>
                                            </li>
                                            <li>
                                                <a href="">Capacitação / Treinamento / Desenvolvimento</a>
                                            </li>
                                            <li>
                                                <a href="">Agências de Marketing / Publicidade</a>
                                            </li>
                                            <li>
                                                <a href="">Mídia Especializada em Seguros</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Quantidade de colaboradores</label>
                                    <div class="select-custom">
                                        <input type="hidden" id="inputQtdColaborador" name="qtd_colaboradores" value="">
                                        <div class="item-selected">
                                            <span>Selecione</span>
                                            <div class="arrow"></div>
                                        </div>
                                        <ul class="drop-select">
                                            <li>
                                                <a href="">Somente eu</a>
                                            </li>
                                            <li>
                                                <a href="">1 a 3</a>
                                            </li>
                                            <li>
                                                <a href="">4 a 10</a>
                                            </li>
                                            <li>
                                                <a href="">11 a 50</a>
                                            </li>
                                            <li>
                                                <a href="">51 a 200</a>
                                            </li>
                                            <li>
                                                <a href="">mais de 200</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Qual a sua função?</label>
                                    <div class="select-custom">
                                        <input type="hidden" id="inputFuncao" name="funcao" value="">
                                        <div class="item-selected">
                                            <span>Selecione</span>
                                            <div class="arrow"></div>
                                        </div>
                                        <ul class="drop-select">
                                            <li>
                                                <a href="">Sócio / CEO / Proprietário1</a>
                                            </li>
                                            <li>
                                                <a href="">Diretor</a>
                                            </li>
                                            <li>
                                                <a href="">Superintendente</a>
                                            </li>
                                            <li>
                                                <a href="">Gerente</a>
                                            </li>
                                            <li>
                                                <a href="">Coordenador</a>
                                            </li>
                                            <li>
                                                <a href="">Supervisor</a>
                                            </li>
                                            <li>
                                                <a href="">Analista / Assistente</a>
                                            </li>
                                            <li>
                                                <a href="">Vendedor / Executivo de Contas</a>
                                            </li>
                                            <li>
                                                <a href="">Profissional Autônomo</a>
                                            </li>
                                            <li>
                                                <a href="">Estudante</a>
                                            </li>
                                            <li>
                                                <a href="">Outros</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Qual a sua área de atuação?</label>
                                    <div class="select-custom">
                                        <input type="hidden" id="inputAtuacao" name="area_atuacao" value="">
                                        <div class="item-selected">
                                            <span>Selecione</span>
                                            <div class="arrow"></div>
                                        </div>
                                        <ul class="drop-select">
                                            <li>
                                                <a href="">Marketing</a>
                                            </li>
                                            <li>
                                                <a href="">Comercial / Vendas</a>
                                            </li>
                                            <li>
                                                <a href="">Recursos Humanos</a>
                                            </li>
                                            <li>
                                                <a href="">Treinamento e Desenvolvimento</a>
                                            </li>
                                            <li>
                                                <a href="">Outras</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="form-group d-flex justify-content-between">
                                    <button type="button" class="btn-voltar btn-prev-dados-pessoais">
                                        <img src="img/arrow-form-next.svg" alt="">
                                        Anterior
                                    </button>
                                    <button type="button" id="btn-next-info-geral">Próximo <img
                                            src="img/arrow-form-next.svg" alt=""></button>
                                </div>
                            </div>
                            <div class="info-geral">
                                <h3>3. Informações gerais</h3>
                                <div class="form-group">
                                    <label for="">Site da empresa</label>
                                    <input type="text" id="inputSiteEmpresa" name="site_empresa" placeholder="www.empresa.com.br">
                                </div>
                                <div class="form-group">
                                    <label for="">Como podemos ajudar sua empresa?</label>
                                    <div class="select-custom">
                                        <input type="hidden" id="inputAjudarEmpresa" name="ajudar_empresa"  value="">
                                        <div class="item-selected">
                                            <span>Selecione</span>
                                            <div class="arrow"></div>
                                        </div>
                                        <ul class="drop-select">
                                            <li>
                                                <a href="">Máquina de vendas</a>
                                            </li>
                                            <li>
                                                <a href="">Growth hacking</a>
                                            </li>
                                            <li>
                                                <a href="">Freelancer</a>
                                            </li>
                                            <li>
                                                <a href="">Plataformas</a>
                                            </li>
                                            <li>
                                                <a href="">Consultoria</a>
                                            </li>s
                                        </ul>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Qual sua necessidade?</label>
                                    <input type="text" id="inputNecessidade" name="necessidade" placeholder="Descreva seus anseios"/>
                                </div>
                                <div class="form-group d-flex justify-content-between">
                                    <button type="button" class="btn-voltar btn-prev-dados-empresa">
                                        <img src="img/arrow-form-next.svg" alt="">
                                        Anterior
                                    </button>
                                    <button type="submit" id="btn-enviar-dados">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <script src="js/plugins.js"></script>
    <script src="js/all.min.js"></script>
</body>

</html>