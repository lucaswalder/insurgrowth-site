$(".s-consultoria .texto ul li .btn-conteudo").click(function() {
    $(this).parents(".tab-pane").find("ul li").removeClass("active");
    $(this).parents("li").addClass("active");
    return false;
})

$("[mask=phone]").mask("(00)0 0000-0000");

$("#btn-aquisicao").on("click", function() {
    $(this).parents(".tab-pane").find(".ballons-icon li").removeClass("active");
    $("#icone-aquisicao").addClass("active");
})

$("#btn-ativacao").on("click", function() {
    $(this).parents(".tab-pane").find(".ballons-icon li").removeClass("active");
    $("#icone-ativacao").addClass("active");
})

$("#btn-retencao").on("click", function() {
    $(this).parents(".tab-pane").find(".ballons-icon li").removeClass("active");
    $("#icone-retencao").addClass("active");
})

$("#btn-receita").on("click", function() {
    $(this).parents(".tab-pane").find(".ballons-icon li").removeClass("active");
    $("#icone-receita").addClass("active");
})

$("#btn-recomendacao").on("click", function() {
    $(this).parents(".tab-pane").find(".ballons-icon li").removeClass("active");
    $("#icone-recomendacao").addClass("active");
})

var slide_plataforma = new Swiper('.slide-plataforma', {
    slidesPerView: 4,
    spaceBetween: 29,
    speed: 700,
    pagination: {
      el: '.slide-plataforma .swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.slide-plataforma .btn-next',
        prevEl: '.slide-plataforma .btn-prev',
    },
    breakpoints: {
        1050: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1.4,
            spaceBetween: 21,
        },
        350: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
  });

  var slide_freela = new Swiper('.slide-freela', {
    slidesPerView: 4,
    spaceBetween: 29,
    speed: 700,
    pagination: {
      el: '.slide-freela .swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.slide-freela .btn-next',
        prevEl: '.slide-freela .btn-prev',
    },
    breakpoints: {
        1050: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1.4,
            spaceBetween: 21,
        },
        350: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
  });

  $(".s-ecossistema .nav-tabs li a").on("click", function() {
    reinitSwiper(slide_freela);
    reinitSwiper(slide_plataforma);
  })

  function reinitSwiper(swiper) {
    setTimeout(function() {
        swiper.update();
    }, 200);
}

  var slide_depoimentos = new Swiper('.slide-depoimentos', {
    speed: 700,
    pagination: {
      el: '.area-depo .ctrl-slide .swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.s-depoimentos .ctrl-slide .btn-next',
        prevEl: '.s-depoimentos .ctrl-slide .btn-prev',
    },
  });

  var slide_clientes = new Swiper('.slide-clientes', {
    slidesPerView: 5,
    speed: 700,
    pagination: {
      el: '.slide-clientes .swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.slide-clientes .ctrl-slide .btn-next',
        prevEl: '.slide-clientes .ctrl-slide .btn-prev',
    },
    breakpoints: {
        1050: {
            slidesPerView: 4,
        },
        480: {
            slidesPerView: 2,
        }
    }
  });

  $(".s-metodo .texto ul li .title").on("click", function() {
    $(".s-metodo .texto ul li").removeClass("active");
    $(this).parents("li").addClass("active");
  })

  $("#btn-proposito").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
      $("#icone-proposito").addClass("active");
  })

  $("#btn-negocio").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-negocio").addClass("active");
})

$("#btn-diagnostico").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-diagnostico").addClass("active");
})

$("#btn-metodo").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-metodo").addClass("active");
})

$("#btn-execucao").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-execucao").addClass("active");
})

$("#btn-resultados").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-resultados").addClass("active");
})

$(".s-metodo .circle-icons ul li").click(function() {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $(this).addClass("active");
})

$("#icone-proposito").click(function() {
    $(".s-metodo .texto ul li").removeClass("active");
    $("#btn-proposito").addClass("active");
})

$("#icone-negocio").click(function() {
    $(".s-metodo .texto ul li").removeClass("active");
    $("#btn-negocio").addClass("active");
})

$("#icone-diagnostico").click(function() {
    $(".s-metodo .texto ul li").removeClass("active");
    $("#btn-diagnostico").addClass("active");
})

$("#icone-metodo").click(function() {
    $(".s-metodo .texto ul li").removeClass("active");
    $("#btn-metodo").addClass("active");
})

$("#icone-execucao").click(function() {
    $(".s-metodo .texto ul li").removeClass("active");
    $("#btn-execucao").addClass("active");
})

$("#icone-resultados").click(function() {
    $(".s-metodo .texto ul li").removeClass("active");
    $("#btn-resultados").addClass("active");
})





$("#btn-prospectar").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
      $("#icone-prospectar").addClass("active");
  })

  $("#btn-qualificar").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-qualificar").addClass("active");
})

$("#btn-relacionar").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-relacionar").addClass("active");
})

$("#btn-fechar").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-fechar").addClass("active");
})

$("#btn-implementar").on("click", () => {
    $(".s-metodo .circle-icons ul li").removeClass("active");
    $("#icone-implementar").addClass("active");
})

$('.s-banner .texto a')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 75
                }, 1000);
            }
        }
    });

$(".menu-button").on("click", function() {
    $("html").toggleClass("menu-opened");
    return false;
})

$(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $("header").addClass("fixed-menu");
      } else {
        $("header").removeClass("fixed-menu");
      }
    });
  });

AOS.init({disable: 'mobile'});

$("#form_agenda").validate({
    rules: {
        nome: "required",
        email: {
            required: true,
            email: true
        },
        telefone: "required",
        mensagem: "required"
    },
    messages: {
        nome: "Nome é obrigatório.",
        email: {
            required: "E-mail é obrigatório."
        },
        telefone: "Telefone é obrigatório.",
        mensagem: {
            required: "Mensagem é obrigatório."
        }
    }
});

var $formAgenda = $('#form_agenda');

$(".btn-prev-dados-pessoais").on("click", function() {
    $(".s-contato .formulario .etapas ul li:nth-child(2)").removeClass("active");
    $(".s-contato .formulario .etapas .progresso .bar").css("height", "33%");
    $(".dados-pessoais").fadeIn();
    $(".dados-empresa").hide();
})

$(".s-consultoria .conteudo-mobile .items ul li .title").click(function() {
    $(this).parents(".tab-pane").find(".items ul li").removeClass("active");
    $(this).parents("li").addClass("active");
})

$(".s-metodo .metodo-mobile .item .top").on("click", function() {
    $(".s-metodo .metodo-mobile .item").removeClass("active");
    $(this).parents(".item").addClass('active');
})

const btnNextEmpresa = document.getElementById("btn-next-empresa");
const btnNextInfoGeral = document.getElementById('btn-next-info-geral');
const btnEnviarDados = document.getElementById('btn-enviar-dados');

btnNextEmpresa.addEventListener('click', () => {
    const inputs = document.querySelectorAll(".s-contato .dados-pessoais input");
    let inputsError = document.querySelectorAll(".s-contato .dados-pessoais .error");
    inputsError = [null, null, null];
    inputs.forEach((item, index) => {
        item.addEventListener('keydown', ()=> {
            item.classList.remove('error');
        })
        if(item.value === "") {
            item.classList.add('error');
            return false;
        } else {
            inputsError.pop();
        }
    })

    if(inputsError.length == 0) {
        $(".s-contato .formulario .etapas ul li:nth-child(2)").addClass("active");
        $(".s-contato .formulario .etapas .progresso .bar").css("height", "66%");
        $(".dados-pessoais").hide();
        $(".dados-empresa").fadeIn();
    }
})

btnNextInfoGeral.addEventListener('click', () => {
    const inputs = document.querySelectorAll(".s-contato .dados-empresa input");
    const select = document.querySelectorAll('.s-contato .dados-empresa .select-custom');
    let inputsError = [];
    inputsError = [null, null, null, null, null];
    inputs.forEach(item => {
        item.addEventListener('keydown', ()=> {
            item.classList.remove('error');
        })
        if(item.value === "") {
            item.classList.add('error');
            return false;
        } else {
            inputsError.pop();
        }
    })

    select.forEach(select => {
        let valueSelect = select.children[0].value;

        if(valueSelect === "") {
            select.classList.add('error');
        }
    })

    if(inputsError.length == 0) {
        $(".s-contato .formulario .etapas ul li:nth-child(3)").addClass("active");
        $(".s-contato .formulario .etapas .progresso .bar").css("height", "100%");
        $(".dados-empresa").hide();
        $(".info-geral").fadeIn();
    }
})

btnEnviarDados.addEventListener('click', (e) => {
    e.preventDefault();
    const todosInputs = document.querySelectorAll('.s-contato .formulario form .form-group input');
    const inputs = document.querySelectorAll(".s-contato .info-geral input");
    const select = document.querySelectorAll('.s-contato .info-geral .select-custom');
    let inputsError = [];
    inputsError = [null, null, null];
    inputs.forEach(item => {
        item.addEventListener('keydown', ()=> {
            item.classList.remove('error');
        })
        if(item.value === "") {
            item.classList.add('error');
            return false;
        } else {
            inputsError.pop();
        }
    })

    select.forEach(select => {
        let valueSelect = select.children[0].value;

        if(valueSelect === "") {
            select.classList.add('error');
        }
    })

    if(inputsError.length === 0) {
        let input_nome = $("#inputNome").val();
        let input_email = $("#inputEmailCorporativo").val();
        let input_telefone = $("#inputTelefone").val();
        let input_empresa = $("#inputEmpresa").val();
        let input_segmento_empresa = $("#inputSegmento").val();
        let input_qtd_colaboradores = $("#inputQtdColaborador").val();
        let input_funcao = $("#inputFuncao").val();
        let input_area_atuacao = $("#inputAtuacao").val();
        let input_site_empresa = $("#inputSiteEmpresa").val();
        let input_ajudar_empresa = $("#inputAjudarEmpresa").val();
        let input_necessidade = $("#inputNecessidade").val();

        let url_json = "./contato.php";

        let dados = {
            nome: input_nome,
            email: input_email,
            telefone: input_telefone,
            empresa: input_empresa,
            segmento_empresa: input_segmento_empresa,
            qtd_colaboradores: input_qtd_colaboradores,
            funcao: input_funcao,
            area_atuacao: input_area_atuacao,
            site_empresa: input_site_empresa,
            ajudar_empresa: input_ajudar_empresa,
            necessidade: input_necessidade
        };

        $.ajax({
            url: url_json,
            data: dados,
            method: 'post',
            beforeSend: function() {
                $("#btn-enviar-dados").text("Enviando...");
                $("#btn-enviar-dados").prop("disabled", true);  
            },
            error: function(x, t, m) {
                alert("Erro ao enviar o e-mail! Favor entrar em contato com o Desenvolvedor do site.");
                $("#btn-enviar-dados").text("Enviar");
                $("#btn-enviar-dados").prop("disabled", false);  
            }
        }).complete(function() {
            window.location.href = "./obrigado.html";
            });;
    }
})

$(".btn-prev-dados-empresa").on("click", function() {
    $(".s-contato .formulario .etapas ul li:nth-child(3)").removeClass("active");
    $(".s-contato .formulario .etapas .progresso .bar").css("height", "66%");
    $(".dados-empresa").fadeIn();
    $(".info-geral").hide();
})

$(".select-custom .item-selected").on("click", function() {
    $(this).parents(".select-custom").toggleClass('active-select');
})

$(".select-custom .drop-select li a").on("click", function() {
    let itemSelecionado = $(this).text();
    $(this).parents(".select-custom").find("input[type=hidden]").val(itemSelecionado);
    $(this).parents(".select-custom").find(".item-selected span").text(itemSelecionado);
    $(this).parents(".select-custom").removeClass('active-select');
    $(this).parents(".select-custom").removeClass("error");
    return false;
})