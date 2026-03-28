$(document).ready(function() {
    const servicesHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="services__title">
                        <div class="section-title">
                            <span>Where vision meets precision</span>
                            <h2>What I Do</h2>
                        </div>
                        <p>Get a custom-crafted video built for your brand — professionally filmed, beautifully edited,
                            and delivered with precision.</p>
                        <a href="./portfolio.html" class="primary-btn">VIEW MORE</a>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="services__item">
                                <a href="./portfolio.html?filter=digital-marketing">
                                    <div class="services__item__icon">
                                        <img src="img/icons/si-4.png" alt="">
                                    </div>
                                </a>
                                <a href="./portfolio.html?filter=digital-marketing"><h4>VFX Artist</h4></a>
                                <p>I blend creativity with technology to create stunning visual effects that elevate
                                    storytelling and leave a lasting impression.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <a href="./portfolio.html?filter=web">
                                <div class="services__item">
                                    <div class="services__item__icon">
                                        <img src="img/icons/si-3.png" alt="">
                                    </div>
                            </a>
                            <a href="./portfolio.html?filter=web"><h4>Cinematographer</h4></a>
                            <p>With a keen eye for light, composition, and movement, I capture visually striking footage
                                that tells your story with power and emotion.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <a href="./portfolio.html?filter=branding">
                            <div class="services__item">
                                <div class="services__item__icon">
                                    <img src="img/icons/si-2.png" alt="">
                                </div>
                        </a>
                        <a href="./portfolio.html?filter=branding"><h4>Editor</h4></a>
                        <p>I transform raw footage into cohesive narratives, ensuring every cut, sound, and transition
                            enhances the message and experience.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    const topWorksHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title team__title">
                        <span>Creatives</span>
                        <h2>TOP WORKS</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="team__item set-bg" data-setbg="img/portfolio/paperboat.png">
                        <a href="https://www.youtube.com/watch?v=6OuHFmkiizk" class="play-btn video-popup"><i
                                class="fa fa-play"></i></a>
                        <div class="team__item__text">
                            <h4>Paper Boat AD</h4>
                            <p>VFX</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="team__item team__item--second set-bg" data-setbg="img/portfolio/phonepay.png">
                        <a href="https://www.youtube.com/watch?v=eaeWc3Zj9Wo" class="play-btn video-popup"><i
                                class="fa fa-play"></i></a>
                        <div class="team__item__text">
                            <h4>PhonePe</h4>
                            <p>VFX & Cinematography</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="team__item team__item--third set-bg" data-setbg="img/portfolio/kappiri.png">
                        <a href="https://www.youtube.com/watch?v=pr4HWSyrkzY" class="play-btn video-popup"><i
                                class="fa fa-play"></i></a>
                        <div class="team__item__text">
                            <h4>KAPPIRI - DOCUMENTARY</h4>
                            <p>FILM, VFX & Cinematography</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                    <div class="team__item team__item--four set-bg"
                        data-setbg="img/Cinematographer/Models/DSC08725.jpg">
                        <a href="./portfolio.html?folder=models" class="play-btn"><i class="fa fa-play"></i></a>
                        <div class="team__item__text">
                            <h4>Models</h4>
                            <p>FILM, VFX & CINEMATOGRAPHY</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 p-0">
                    <div class="team__btn">
                        <a href="./portfolio.html" class="primary-btn">VIEW MORE</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inject the component into placeholders
    if ($('#services-component').length > 0) {
        $('#services-component').html(servicesHTML);
    }
    
    if ($('#topworks-component').length > 0) {
        $('#topworks-component').html(topWorksHTML);
        
        // Re-initialize background images for items that were just injected
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        // Re-initialize video-popup for dynamic content
        if($.fn.magnificPopup) {
            $('.video-popup').magnificPopup({
                type: 'iframe'
            });
        }
    }
});
