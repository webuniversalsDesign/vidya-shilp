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
					<h1 class="text-center fadeInUp">Gallery </h1>
					<p class="text-center t-color-white"><a href="index.php">Home</a> / Gallery</p>
				</div>
			</div>
			<!--/hero_in-->

			<div class="container margin_60_35">
				<div class="main_title_2">
					<span><em></em></span>
					<h2>Here some pictures ...</h2>

				</div>
				<div class="grid">
					<ul class="magnific-gallery">
						<li>
							<figure>
								<img src="img/gallery/gallery-1.jpg" alt="">
								<figcaption>
									<div class="caption-content">
										<a href="img/gallery/large/gallery-lg-1.jpg" title="Photo title" data-effect="mfp-zoom-in">
											<i class="pe-7s-albums"></i>
											<p>View Image</p>
										</a>
									</div>
								</figcaption>
							</figure>
						</li>
						<li>
							<figure>
								<img src="img/gallery/gallery-2.jpg" alt="">
								<figcaption>
									<div class="caption-content">
										<a href="img/gallery/large/gallery-lg-2.jpg" title="Photo title" data-effect="mfp-zoom-in">
											<i class="pe-7s-albums"></i>
											<p>View Image</p>
										</a>
									</div>

								</figcaption>
							</figure>
						</li>
						<li>
							<figure>
								<img src="img/gallery/gallery-3.jpg" alt="">
								<figcaption>
									<div class="caption-content">
										<a href="img/gallery/large/gallery-lg-3.jpg" title="Photo title" data-effect="mfp-zoom-in">
											<i class="pe-7s-albums"></i>
											<p>View Image</p>
										</a>
									</div>
								</figcaption>
							</figure>
						</li>
						<li>
							<figure>
								<img src="img/gallery/gallery-4.jpg" alt="">
								<figcaption>
									<div class="caption-content">
										<a href="img/gallery/large/gallery-lg-4.jpg" title="Photo title" data-effect="mfp-zoom-in">
											<i class="pe-7s-albums"></i>
											<p>View Image</p>
										</a>
									</div>
								</figcaption>
							</figure>
						</li>
						<li>
							<figure>
								<img src="img/gallery/gallery-5.jpg" alt="">
								<figcaption>
									<div class="caption-content">
										<a href="img/gallery/large/gallery-lg-5.jpg" title="Photo title" data-effect="mfp-zoom-in">
											<i class="pe-7s-albums"></i>
											<p>View Image</p>
										</a>
									</div>
								</figcaption>
							</figure>
						</li>
						<li>
							<figure>
								<img src="img/gallery/gallery-6.jpg" alt="">
								<figcaption>
									<div class="caption-content">
										<a href="img/gallery/large/gallery-lg-6.jpg" title="Photo title" data-effect="mfp-zoom-in">
											<i class="pe-7s-albums"></i>
											<p>View Image</p>
										</a>
									</div>
								</figcaption>
							</figure>
						</li>


					</ul>
				</div>
				<!-- /grid gallery -->
			</div>
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
	<script src="assets/validate.js"></script>
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