<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact us - Vidya Shilp School</title>
    <?php include('layouts/head.php') ?>
</head>

<body>
    <div id="page">
        <?php include('layouts/navbar.php') ?>
        <main>

            <div class="breadcrumb-section">
                <div class="head">
                    <h1 class="text-center fadeInUp">Contact Us </h1>
                    <p class="text-center t-color-white"><a href="index.php">Home</a> / Contact Us</p>
                </div>
            </div>

            <div class="container mt-5 mb-5">
                <div class="row ">
                    <div class="col-md-1"></div>
                    <div class="col-md-5 col-sm-12 mb-2">

                        <form class="contact-form shadow">
                            <h2 class="text-center">Leave a Message</h2>
                            <div class="form-group my-4">

                                <input type="text" class="custom-input " id="name" placeholder="Enter your name">
                            </div>
                            <div class="row">       
                                <div class="col-6">
                                    <div class="form-group my-4">

                                        <input type="email" class="custom-input " id="email" aria-describedby="emailHelp" placeholder="Enter email">
                                    </div>

                                </div>
                                <div class="col-6">
                                    <div class="form-group my-4">

                                        <input type="tel" class="custom-input" id="phone" placeholder="Enter phone number">
                                    </div>
                                </div>
                            </div>


                            <div class="form-group">
                               
                                <textarea class="custom-input" id="message" rows="3" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary  button-e">Submit</button>
                        </form>

                    </div>
                    <div class=" col-md-5 mb-2">
                        <div class="shadow">
                            <div class="card p-4">
                                <h2 class="">Vidhyashilp School Bagalure</h2>
                                <p class="mt-3"><span class="red-text">Address</span><br> 90/1, Chagalatti, Off Hennur-Bagalur Road, <br>Bangalore – 562149</p>
                                <p><span class="red-text">Phone</span><br> <a href="tel:+91-6366636624">+91-6366636624</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>

                </div>
            </div>

        </main>

        <?php @include('layouts/footer.php') ?>
    </div>



    <!-- COMMON SCRIPTS -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/common_scripts.js"></script>
    <script src="js/main.js"></script>

    <script>
        window.addEventListener('scroll', function() {
            var logoContainer = document.getElementById('logo-container');
            var navItems = document.querySelectorAll('.main-menu ul li span a');

            if (window.scrollY > 100) {
                logoContainer.innerHTML = '<a href="index.html"><img src="img/footer_logo.png" class="site-logo" alt=""></a>';
                navItems.forEach(function(item) {
                    item.style.color = 'white';
                });
            } else {
                logoContainer.innerHTML = '<a href="index.html"><img src="img/logo.png" class="site-logo" alt=""></a>';
                navItems.forEach(function(item) {
                    item.style.color = ''; // Reset to default color
                });
            }
        });
    </script>

</body>

</html>