function createNavbar() {
  const navbarHTML = `
    
<div id="navbar-container" class="navbar-expand-lg" style="z-index: 999 !important; height: 95px;">
  <nav class="navbar navbar-expand-custom bg-body" style="z-index: 999; background-color:#f8f9fa !important; !important; height: 95px;">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <a class="navbar-brand" href="./index.html">
      <img src="LOGO1.png" width="80" height="80" alt="logo" style="display:block; margin:auto;" />
      </a>

      <!-- "Contact Us" buttons on mobile -->
      <a class="navbar-brand2 d-lg-none" href="https://line.me/R/ti/p/mai4263mai" style="width: 55px; height: 40px; display: flex; align-items: center; margin-left: 0px;">
      <img src="line.png" alt="" style="width: 50px;border-radius: 50px;">
      </a>
      <a class="navbar-brand2 d-lg-none" href="tel:086 5662639" style=" height: 40px;  display: flex; align-items: center; justify-content: center; margin-left: 0px;">
      <img src="mobile.png" alt="" style="width: 50px; border-radius: 50px;">
      </a>

      <!-- Mobile menu button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color:#52643a;">MENU</span>
      </button>

      <!-- Navbar menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a id="lang_Home" class="nav-link a" href="./index Eng.html">HOME</a></li>
          <li class="nav-item"><a id="lang_about" class="nav-link b" href="./เกี่ยวกับเรา Eng.html">ABOUT US</a></li>
          <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">CONSTRUCTION SERVICES</a>
              <ul class="dropdown-menu" style="background: #f8f9fa; opacity:0.9; max-width: 18rem;">
              <li><a id="lang_item1" class="dropdown-item c1" href="./รับสร้างโรงงาน Eng.html">● Factory Construction</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="./รับสร้างบ้าน อาคาร Eng.html">● House & Building Construction</a></li>
              <li><a id="lang_item3" class="dropdown-item c3" href="./รับผลิตจำหน่ายคอนกรีตผสมเสร็จ Eng.html">● Ready-Mix Concrete Supply</a></li>
              </ul>
          </li>
           <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">OUR PROJECTS</a>
              <ul class="dropdown-menu" style="background: #f8f9fa; opacity:0.9; max-width: 18rem;">
              <li><a id="lang_item1" class="dropdown-item c1" href="./โครงการเรา ก่อสร้างโรงงานอุตสาหกรรม Eng.html">● Industrial Factory Construction</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="./โครงการเรา ก่อสร้างโกดัง Eng.html">● Warehouse Construction</a></li>
              <li><a id="lang_item1" class="dropdown-item c1" href="./โครงการเรา ก่อสร้างถนนคอนกรีต Eng.html">● Concrete Road Construction</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="./โครงการเรา งานคอนกรีตผสมเสร็จ Eng.html">● Ready-Mix Concrete Works</a></li>
              <li><a id="lang_item1" class="dropdown-item c1" href="./โครงการเรา ก่อสร้างอาคาร Eng.html">● Building Construction</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="./โครงการเรา ก่อสร้างบ้าน ทีพักอาศัย Eng.html">● Residential Construction</a></li>
              </ul>
          </li>
          <!--<li class="nav-item"><a id="lang_about" class="nav-link b" href="./โครงการเรา Eng.html">OUR PROJECTS</a></li> -->
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="./ข่าวสาร Eng.html">NEWS</a></li> 
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="./ติดต่อเรา Eng.html">CONTACT US</a></li>
        </ul>
      </div>

 <!-- "Contact Us" buttons on desktop -->
      <a class="navbar-brand2 d-none d-lg-flex" href="" style="width: 50px; display: flex; align-items: center; ">
        <img src="line.png" alt="" style="width: 50px;margin: 10px; border-radius: 50px;">
      </a>
      <a class="navbar-brand2 d-none d-lg-flex" href="tel:" style="width: 50px;  margin: 0 30px; display: flex; align-items: center; justify-content: center;">
        <img src="mobile.png" alt="" style="width: 50px;margin: 10px; border-radius: 50px;">
      </a>

    </div>
  </nav>
</div>
    `;
  document.getElementById("navbar-container").innerHTML = navbarHTML;

  // Initialize Bootstrap JavaScript
  const navbar = document.querySelector('.navbar'); 
  new bootstrap.Collapse(navbar, { 
    toggle: false 
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
            flex: 1 1 calc(60% - 10px);
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
                <h2>Contact Us</h2>
                <form action="#" method="post">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="text" name="company" placeholder="Company">
                    <select name="service">
                        <option disabled selected>Select a Service</option>
                        <option style="color: rgba(0, 0, 0, 1);">Factory Construction</option>
                        <option style="color: rgba(0, 0, 0, 1);">House & Building Construction</option>
                        <option style="color: rgba(0, 0, 0, 1);">Ready-Mix Concrete Supply</option>
                    </select>
                    <input type="text" name="phone" placeholder="Phone Number">
                    <input type="email" name="email" placeholder="E-mail">
                    <textarea name="message" rows="2" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  </body>  

    `;
  document.getElementById("footerHTML1").innerHTML = footerHTML;

  // Initialize Bootstrap JavaScript
  const footer = document.querySelector('.FooterHTML'); 
  new bootstrap.Collapse(footer, { 
    toggle: false 
  });
}
