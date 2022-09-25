

$(document).ready(function(){
  
  scrollFade();
  asideFade();
  switchToPort();
  switchToSkill();
  switchToAbout();

  function scrollFade(){ 
    const $scrollIcon = $('#scrollIcon') 

    $(window).scroll(function(){
    if($(window).scrollTop()){
      $scrollIcon.fadeOut("slow")
    }else{
      $scrollIcon.fadeIn("slow")
    }
    })
  }

  function asideFade(){
    const $aside = $('aside')
    $(window).scroll(function(){
      if($(window).scrollTop()){
        $aside.fadeIn("slow")    
      }else{
        $aside.fadeOut("slow")
      }
    })
    
    $aside.click(function(){
      $("html, body").animate({scrollTop: 0}, 800)
    })
  }
  
  function switchToPort(){
  const $portfolio = $('#worksBtn')
  const $portMoreBtn = $('#portMore')

  $portfolio.click(function(){
    $('main').html(
      `
      <section class="portfolio" id="portfolio">
      <div class="portTitleContanier" id="portTitleContanier">
        <div class="portTitle" id="portTitle">
          <h2>作品</h2>
          <h2 class="subTitle">Portfolio</h2>
        </div>
        <div class="portBtnContanier" id="portBtnContanier">
          <button class="portMore" class="portMore">More</button>
        </div>
      </div>
      <ul class="cardContainer" id="cardContainer">
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
      </ul>
    </section>
      `
    )
    })
  $portMoreBtn.click(function(){
    $('main').html(
      `
      <section class="portfolio" id="portfolio">
      <div class="portTitleContanier" id="portTitleContanier">
        <div class="portTitle" id="portTitle">
          <h2>作品</h2>
          <h2 class="subTitle">Portfolio</h2>
        </div>
        <div class="portBtnContanier" id="portBtnContanier">
          <button class="portMore" class="portMore">More</button>
        </div>
      </div>
      <ul class="cardContainer" id="cardContainer">
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
        <li class="projectCard" id="projectCard">
          <img class="cardImg" id="cardImg" src="https://media.istockphoto.com/vectors/loading-icon-load-load-icon-white-background-loading-vector-icon-vector-id1171583283?k=20&m=1171583283&s=170667a&w=0&h=2e3Y52z_Ja0vNb-TcwsmE4vwcGPeItUkLO76PA61n1w=" alt="project1">
        </li>
      </ul>
    </section>
      `
    )
    })
  }

  function switchToSkill(){
  const $skill = $('#skillsBtn')
  $skill.click(function(){
    $('main').html(
      `
      <section class="skill">
      <h2 class="skillTitle">技能<span></span></h2>
      <h2 class="skillTitle subTitle">Skill</h2>
      <article class="skillcontent" id="skillcontent">
        <div class="skillContainer">
          <ul>
            <li>
              <p class="skillItem">PhotoShop</p>
              <p class="skillDesc">修煉中</p>
            </li>
            <li>
              <p class="skillItem">Illustrator</p>
              <p class="skillDesc">修煉中</p>
            </li>
            <li>
              <p class="skillItem">AfterEffect</p>
              <p class="skillDesc">修煉中</p>
            </li>
            <li>
              <p class="skillItem">Blender</p>
              <p class="skillDesc">修煉中</p>
            </li>
          </ul>
        </div>
        <div class="skillContainer">
          <ul>
            <li>
              <p class="skillItem">HTML</p>
              <p class="skillDesc">修煉中</p>
            </li>
            <li>
              <p class="skillItem">CSS</p>
              <p class="skillDesc">修煉中</p>
            </li>
            <li>
              <p class="skillItem">JavaScript</p>
              <p class="skillDesc">修煉中</p>
            </li>
          </ul>
        </div>
        <div class="skillContainer">
          <ul>
            <li>
              <p class="skillItem">SQL</p>
              <p class="skillDesc">修煉中</p>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>     
      </article>
      <div class="cardContainer skillCard" id="skillCardP"></div>
    </section>
      `
    )
    })
  }

  function switchToAbout(){
  const $about = $('#aboutMeBtn')
  $about.click(function(){
    $('main').html(
      `
      <section class="aboutMe">
      <div>
        <h2 class="aboutTitle">關於我</h2>
        <h2 class="aboutTitle subTitle">About Me</h2>
        <article>
          設計系畢業，在往成為工程師的路上掙扎中。<br>
          Struggling on the way to become a programmer.
        </article>
      </div>
        <div class="cardContainer aboutCard" id="aboutCard">
          <img src="" alt="me">
        </div>
    </section>
    <section class="formSec">
      <form action="" method="post">
        <legend class="formTitle" for="name">聯絡我</legend>
        <legend class="formSubTitle">Contact me</legend>
        <input class="inputEle name" type="text" placeholder="Name">
        <input class="inputEle email" type="email" placeholder="Email">
        <input class="inputEle title" type="text" placeholder="Title">
        <label for="">
          <textarea class="inputEle" id="msg" name="msg" cols="30" rows="10" placeholder="Message"></textarea>
        </label>
        <button class="sendBtn" id="sendBtn" type="submit">Send</button>
      </form>
    </section>
      `
    )
    })

  }

})


