<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Vidya Shilp School</title>
    <?php include('layouts/head.php') ?>
</head>

<body>
    <div id="page">
        <?php include('layouts/navbar.php') ?>
        <main>

            <div class="breadcrumb-section">
                <div class="head">
                    <h1 class="text-center fadeInUp">Blog </h1>
                    <p class="text-center t-color-white"><a href="index.php">Home</a> / Blogs</p>
                </div>
            </div>

            <div class="container py-5">
                <div class="row">

                    <div class="col-md-4">
                        <div class="shadow bg-white">
<div class="blog-img">
    <img src="img/slides/new/blog1.avif" alt=""/>
</div>
<div class="px-3 py-3">
    <h6 class="mb-3 t-color-red">How does project based learning enhance an academic experience?</h6>
        <p id="paragraph" class="margin-0">Project based learning is very important for the students to enhance 
        their academic experience. It helps to develop the skills of the students.</p>

<a href="blog-details.php" class="btn btn-outline-danger btn-sm mt-3">Read more</a>
    
</div>

                        </div>
                    </div>

                </div>
            </div>

        </main>

        <?php @include('layouts/footer.php') ?>
    </div>

    <script>
        function limitWords() {
  var paragraph = document.getElementById("paragraph");
  var words = paragraph.textContent.split(' ').slice(0, 10).join(' ');
  paragraph.textContent = `${words} ....`;
}
limitWords();

    </script>

    <!-- COMMON SCRIPTS -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/common_scripts.js"></script>
    <script src="js/main.js"></script>
    <script src="assets/validate.js"></script>

    <!-- SPECIFIC SCRIPTS -->
    <script src="js/video_header.js"></script>
    <script>
        HeaderVideo.init({
            container: $('.header-video'),
            header: $('.header-video--media'),
            videoTrigger: $("#video-trigger"),
            autoPlayVideo: true
        });
    </script>
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