# Kalplerin-Krali-esi
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>meriam - أحبك بكل لغات العالم</title>
  <style>
    body {
      /* إضافة صورة خلفية معبرة عن الحب */
      background-image: url('https://www.pexels.com/tr-tr/fotograf/kalp-seklindeki-kirmizi-neon-tabela-887349/'); /* استبدل الرابط بالصورة المناسبة */
      background-size: cover; /* لتغطية كامل الشاشة */
      background-position: center; /* لتمركز الصورة */
      background-repeat: no-repeat; /* لمنع تكرار الصورة */
      font-family: Arial, sans-serif;
      direction: rtl;
      text-align: center;
      margin: 0;
      padding: 0;
      color: #fff; /* تغيير لون النص إلى أبيض ليكون واضحًا على الخلفية */
    }
    /* زر القلب */
    .heart-button {
      background: red;
      border: none;
      width: 100px;
      height: 90px;
      position: relative;
      cursor: pointer;
      outline: none;
      margin-top: 100px;
    }
    .heart-button:before,
    .heart-button:after {
      content: "";
      background: red;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      position: absolute;
      top: -50px;
    }
    .heart-button:before {
      left: 0;
    }
    .heart-button:after {
      left: 50px;
    }
    /* مظهر منطقة العرض */
    #output {
      margin-top: 30px;
      font-size: 20px;
      line-height: 1.6;
      color: #fff; /* تغيير لون النص إلى أبيض */
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.5); /* خلفية شبه شفافة للنص */
      border-radius: 10px; /* إضافة حدود مستديرة */
    }
  </style>
</head>
<body>
  <button class="heart-button" onclick="showLove()"></button>
  <div id="output"></div>
  <script>
    function showLove() {
      // قائمة ترجمات عبارة "أحبك" بلغات متعددة
      var translations = [
        "I love you",               // English
        "Te amo",                   // Spanish
        "Je t'aime",                // French
        "Ti amo",                   // Italian
        "Ich liebe dich",           // German
        "Eu te amo",                // Portuguese
        "Я тебя люблю",             // Russian
        "我爱你",                   // Chinese (Simplified)
        "愛してる",                 // Japanese
        "사랑해",                  // Korean
        "मैं तुमसे प्यार करता हूँ",   // Hindi (masculine)
        "أحبك",                    // Arabic
        "Seni seviyorum",           // Turkish
        "Te iubesc",                // Romanian
        "Kocham cię",               // Polish
        "Ani ohev otach",           // Hebrew (male to female)
        "Aš tave myliu"             // Lithuanian
      ];
      
      // دمج كل عبارة مع الاسم "meriam"
      var result = "";
      for (var i = 0; i < translations.length; i++) {
        result += "meriam: " + translations[i] + "<br>";
      }
      
      // عرض النتيجة في عنصر #output
      document.getElementById("output").innerHTML = result;
    }
  </script>
</body>
</html>
