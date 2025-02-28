<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>MERIAM - أحبك بكل لغات العالم</title>
  <style>
    body {
      background: linear-gradient(135deg, #f7f7f7, #e0e0e0);
      font-family: Arial, sans-serif;
      direction: rtl;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    /* تصميم القلب اللامع */
    .heart {
      width: 100px;
      height: 90px;
      background: red;
      position: relative;
      display: inline-block;
      margin-top: 100px;
      cursor: pointer;
      animation: glow 1.5s ease-in-out infinite alternate;
    }
    .heart:before,
    .heart:after {
      content: "";
      background: red;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      position: absolute;
      top: -50px;
    }
    .heart:before {
      left: 0;
    }
    .heart:after {
      left: 50px;
    }
    @keyframes glow {
      from {
        box-shadow: 0 0 10px 5px rgba(255, 0, 0, 0.5);
      }
      to {
        box-shadow: 0 0 20px 10px rgba(255, 0, 0, 1);
      }
    }
    /* منطقة عرض الترجمات */
    #output {
      margin-top: 50px;
      font-size: 20px;
      line-height: 1.5;
      color: #333;
      display: none;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .meriam-title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .translation {
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <!-- قلب لامع يظهر في الصفحة -->
  <div class="heart" onclick="showLove()"></div>
  
  <!-- عند الضغط على القلب، تظهر الترجمات -->
  <div id="output">
    <div class="meriam-title">MERIAM</div>
    <!-- أول 6 ترجمات تشكل اسم MERIAM -->
    <div class="translation">M: I love you (English)</div>
    <div class="translation">E: Eu te amo (Portuguese)</div>
    <div class="translation">R: Я тебя люблю (Russian)</div>
    <div class="translation">I: Ich liebe dich (German)</div>
    <div class="translation">A: 我爱你 (Chinese)</div>
    <div class="translation">M: أحبك (Arabic)</div>
    <br>
    <!-- إضافات أخرى من الترجمات -->
    <div class="translation">Te amo (Spanish)</div>
    <div class="translation">Je t'aime (French)</div>
    <div class="translation">Ti amo (Italian)</div>
    <div class="translation">Seni seviyorum (Turkish)</div>
    <div class="translation">愛してる (Japanese)</div>
    <div class="translation">사랑해 (Korean)</div>
    <div class="translation">मैं तुमसे प्यार करता हूँ (Hindi)</div>
  </div>

  <script>
    function showLove() {
      var output = document.getElementById("output");
      if(output.style.display === "none") {
        output.style.display = "block";
      } else {
        output.style.display = "none";
      }
    }
  </script>
</body>
</html>

