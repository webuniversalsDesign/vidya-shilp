<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Gallery - Vidya Shilp School</title>
	<?php include('layouts/head.php') ?>
</head>

<body>

	<div id="page">

		<?php include('layouts/navbar.php') ?>

		<!-- /header -->

		<main>
			<div class="breadcrumb-section">
				<div class="head">
					<h1 class="text-center fadeInUp">Testimonials </h1>
					<p class="text-center t-color-white"><a href="index.php">Home</a> / Testimonials</p>
				</div>
			</div>
			<!--/hero_in-->

            <section class="footer-above">
				<div class="container margin_30_95">
					<div class="main_title_2">
						<span><em></em></span>
						<h2>TESTIMONIALS</h2>
					</div>
					<div class="row">
						<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
							<div class="position-relative hover-overlay">
								<a href="#0" class="grid_item mb-0">
									<figure class="block-reveal mb-0">
										<div class="block-horizzontal"></div>
										<img src="img/aparna.png" class="img-fluid" alt="">


									</figure>
									<div class="overlay-white" style="width:80%;border:1px solid white;">
										<a href="#" class="read-more">View More</a>
									</div>
									<div class="d-flex align-items-center justify-content-between mt-0 mb-0 you-tube">
										<span>- Ms. Aparna, Parent at Vidyashilp<br> School</span>
										<a href="#"><i class="fas fa-play round-play"></i></a>
									</div>
								</a>

							</div>

						</div>
						<!-- /grid_item -->
						<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
							<div class="position-relative hover-overlay">
								<a href="#0" class="grid_item mb-0">
									<figure class="block-reveal mb-0">
										<div class="block-horizzontal"></div>
										<img src="img/MsSnehapriya.png" class="img-fluid" alt="">


									</figure>
									<div class="overlay-white" style="width:80%;border:1px solid white;">
										<a href="#" class="read-more">View More</a>
									</div>
									<div class="d-flex align-items-center justify-content-between mt-0 mb-0 you-tube">
										<span>- Ms. Snehapriya, Parent at Vidyashilp <br> School</span>
										<a href="#"><i class="fas fa-play round-play"></i></a>
									</div>
								</a>

							</div>

						</div>

						<!-- /grid_item -->
						<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
							<div class="position-relative hover-overlay">
								<a href="#0" class="grid_item mb-0">
									<figure class="block-reveal mb-0">
										<div class="block-horizzontal"></div>
										<img src="img/MsKuldeep.png" class="img-fluid" alt="">


									</figure>
									<div class="overlay-white" style="width:80%;border:1px solid white;">
										<a href="#" class="read-more">View More</a>
									</div>
									<div class="d-flex align-items-center justify-content-between mt-0 mb-0 you-tube">
										<span>- Mr. Kuldeep and Ms. Jyothi, Parents <br> at Vidyashilp School</span>
										<a href="#"><i class="fas fa-play round-play"></i></a>
									</div>
								</a>

							</div>

						</div>





					</div>
					<!-- /row -->
				</div>
				<!-- /container -->
			</section>
			<!-- /container -->


			<!-- /bg_color_1 -->

		</main>
		<!--/main-->

		<?php @include('layouts/footer.php') ?>

		<!--/footer-->
	</div>
	<!-- page -->

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