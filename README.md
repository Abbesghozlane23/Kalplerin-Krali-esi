<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>عيد الحب</title>
  <style>
    /* ألوان عيد الحب */
    body {
      background-color: #ffe6e6; /* خلفية رقيقة بألوان عيد الحب */
      color: #fff;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    /* نصوص الحب */
    .love-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 1;
    }

    .love-text h1 {
      font-size: 36px;
      color: #ff4d4d; /* أحمر عيد الحب */
      margin: 0;
    }

    .love-text p {
      font-size: 20px;
      color: #fff;
      margin-top: 10px;
    }

    /* القلب العائم */
    .floating-heart {
      width: 100px;
      height: 90px;
      position: absolute;
      z-index: 2;
      animation: pulse 1s infinite;
    }

    /* الجزء الأول من القلب (دائرة اليسار) */
    .floating-heart::before {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: red;
      border-radius: 50%;
      top: 0;
      left: 0;
    }

    /* الجزء الثاني من القلب (دائرة اليمين) */
    .floating-heart::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: red;
      border-radius: 50%;
      top: 0;
      right: 0;
    }

    /* القاعدة السفلية للقلب */
    .floating-heart {
      background-color: red;
      clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    }

    /* تأثير نبض القلب */
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  </style>
</head>
<body>
  <!-- نصوص الحب -->
  <div class="love-text">
    <h1>Happy Valentine's Day!</h1>
    <p>Je t'aime ❤️ I love you</p>
  </div>

  <!-- القلب العائم -->
  <div class="floating-heart" id="floatingHeart"></div>

  <script>
    // جعل القلب يتحرك بشكل عشوائي
    const heart = document.getElementById('floatingHeart');
    let x = window.innerWidth / 2; // مركز الصفحة أفقيًا
    let y = window.innerHeight / 2; // مركز الصفحة عموديًا

    function moveHeart() {
      // تحريك القلب بشكل عشوائي
      x += Math.random() * 10 - 5; // تحريك أفقي
      y += Math.random() * 10 - 5; // تحريك عمودي

      // منع القلب من الخروج عن حدود الصفحة
      if (x < 0) x = 0;
      if (x > window.innerWidth - 100) x = window.innerWidth - 100;
      if (y < 0) y = 0;
      if (y > window.innerHeight - 90) y = window.innerHeight - 90;

      // تحديث موقع القلب
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';

      // استدعاء الدالة مرة أخرى بعد 50 ميلي ثانية
      requestAnimationFrame(moveHeart);
    }

    // بدء حركة القلب
    moveHeart();
  </script>
</body>
</html>
