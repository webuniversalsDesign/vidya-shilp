<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Prospectus - Vidya Shilp School</title>
    <?php include('layouts/head.php') ?>
</head>

<body>
    <div id="page">
        <?php include('layouts/navbar.php') ?>
        <main>

            <div class="breadcrumb-section">
                <div class="head">
                    <h1 class="text-center fadeInUp">E-Prospectus </h1>
                    <p class="text-center t-color-white"><a href="index.php">Home</a> / E-Prospectus</p>
                </div>
            </div>

            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-lg-12">
                      
                            <form class="center-form shadow">
                                <div class="form-group my-4">
                                    
                                    <input type="text" class="custom-input " id="name" placeholder="Enter your name">
                                </div>
                                <div class="form-group my-4">
                                    
                                    <input type="email" class="custom-input " id="email" aria-describedby="emailHelp" placeholder="Enter email">
                                </div>
                                <div class="form-group my-4">
                                    
                                    <input type="tel" class="custom-input " id="phone" placeholder="Enter phone number">
                                </div>
                                <button type="submit" class="btn btn-primary  button-e">Submit</button>
                            </form>
                        
                    </div>
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