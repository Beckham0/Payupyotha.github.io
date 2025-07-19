function createNavbar() {
  const navbarHTML = `
    
<div id="navbar-container" class="navbar-expand-lg" style="z-index: 999 !important; height: 100px;">
  <nav class="navbar navbar-expand-custom bg-body" style="z-index: 999; background-color:#35373900 !important; height: 100px;">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <!-- โลโก้ -->
      <a class="navbar-brand" href="./index.html">
      <img src="LOGO1.png" style="border-radius: 0px;" width="100%" height="120px"> 
      </a>

      <!-- ปุ่มเปิดเมนูบนมือถือ -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color:#198754;">MENU</span>
      </button>

      <!-- กล่องเมนู -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a id="lang_Home" class="nav-link a" href="#">หน้าเเรก</a></li>
          <li class="nav-item"><a id="lang_about" class="nav-link b" href="#">เกี่ยวกับเรา</a></li>
          <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">รับเหมาก่อสร้าง</a>
              <ul class="dropdown-menu" style="background: #f8f9fa; opacity:0.9; max-width: 18rem;">
              <li><a id="lang_item1" class="dropdown-item c1" href="./Service1.html">● รับสร้างโรงงาน</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="./Service2.html">● รับสร้างบ้าน อาคาร</a></li>
              <li><a id="lang_item3" class="dropdown-item c3" href="./Service3.html">● ผลิตจำหน่ายคอนกรีตผสมเสร็จ</a></li>
              </ul>
          </li>
          <li class="nav-item"><a id="lang_about" class="nav-link b" href="#">โครงการเรา</a></li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="#">ข่าวสาร</a></li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="#">ติดต่อเรา</a></li>
        </ul>
      </div>

    </div>
  </nav>
</div>
    `;
  document.getElementById("navbar-container").innerHTML = navbarHTML;

  // Initialize Bootstrap JavaScript (สำคัญมาก)
  const navbar = document.querySelector('.navbar'); // เลือก element navbar
  new bootstrap.Collapse(navbar, { // สร้าง instance ของ Bootstrap Collapse
    toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
  });
}


function createfooter() {
  const footerHTML = `

    <style>
        body {
            margin: 0;
            padding: 0;
        }

        .content-end {
            /*padding: 10px 0;*/
            max-width: 100%;
            margin: 0 auto;
            background-color: #223d3c;
            margin-top: 50px;
        }

        .port-content-end {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 10px;
        }

        .image-end {
            flex: 1 1 calc(70% - 10px);
            max-width: 900px;
            width: 100%;
            background-color: rgba(255, 246, 233, 1);
            padding: 10px;
            display: grid;
        }

        .top-end img {
            width: 24%;
            height: 200px;
            display: block;
            justify-self: center;
            padding-top: 10px;
        }

        .bottom-end {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        .bottom-end img {
            width: 100%;
            height: 360px;
            object-fit: cover;
            border-radius: 90px 90px 0 0;
            margin: 5px 100px;
            padding-bottom: 20px;
        }



        .contact-form {
            flex: 1 1 calc(30% - 10px);
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 40px 40px 70px;
            text-align: center;
            color: #ffffff;
        }

        .contact-form h2 {
            font-size: 40px;
            margin-bottom: 30px;
        }

        .contact-form form {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
            background-color: transparent;
            border: none;
            border-bottom: 2px solid #ffffff66;
            padding: 10px;
            color: white;
            font-size: 16px;
            outline: none;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
            color: #ffffffaa;
        }

        .contact-form button {
            margin-top: 30px;
            background: none;
            border: none;
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s ease;
            /*background-color: #e0c402;
            padding: 10px;
            border-radius: 20px;*/
        }

        .contact-form button:hover {
            transform: scale(1.25);
        }

@media (max-width: 768px) {
        
        .top-end img {
          width: 30%;
          height: 120px;
        } 
        
        .bottom-end img {
          height: 200px;
          border-radius: 50px 50px 0 0;
          margin: 5px 20px;
          padding-bottom: 0px;
        }
        
        .contact-form {
          margin: 0 auto;
          padding: 20px 40px;
        }       
}
    </style>
</head>

<body>
    <div class="content-end">
        <div class="port-content-end">
            <div class="image-end">
                <div class="top-end">
                    <img src="LOGO1.png">
                </div>
                <div class="bottom-end">
                    <img src="imges/end.jpg">
                </div>
            </div>
            <div class="contact-form">
                <h2>ติดต่อเรา</h2>
                <form action="#" method="post">
                    <input type="text" name="name" placeholder="ชื่อ–สกุล" required>
                    <input type="text" name="company" placeholder="บริษัท">
                    <select name="service">
                        <option disabled selected>เลือกบริการ</option>
                        <option style="color: rgba(0, 0, 0, 1);">รับสร้างโรงงาน</option>
                        <option style="color: rgba(0, 0, 0, 1);">รับสร้างบ้าน อาคาร</option>
                        <option style="color: rgba(0, 0, 0, 1);">ผลิตจำหน่ายปูนซีเมนต์ผสมเสร็จ</option>
                    </select>
                    <input type="text" name="phone" placeholder="เบอร์โทร">
                    <input type="email" name="email" placeholder="E-mail">
                    <textarea name="message" rows="2" placeholder="ข้อความ"></textarea>
                    <button type="submit">ตกลง</button>
                </form>
            </div>
        </div>
    </div>
  </body>  

    `;
  document.getElementById("footerHTML1").innerHTML = footerHTML;

  // Initialize Bootstrap JavaScript (สำคัญมาก)
  const footer = document.querySelector('.FooterHTML'); // เลือก element navbar
  new bootstrap.Collapse(footer, { // สร้าง instance ของ Bootstrap Collapse
    toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
  });
}