<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event- Vidya Shilp School</title>
    <?php include('layouts/head.php') ?>
</head>

<body>
	
	<div id="page">
	<?php include('layouts/navbar.php') ?>
	
	<!-- /header -->
	
	<main>
	<div class="breadcrumb-section">
                <div class="head">
                    <h1 class="text-center fadeInUp">Event</h1>
                    <p class="text-center t-color-white"><a href="index.php">Home</a> / Event</p>
                </div>
            </div>

		<!--/hero_in-->
	

		<div class="container margin_60_35">
			<div class="row">
				<div class="col-xl-4 col-lg-6 col-md-6">
					<div class="box_grid wow">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							
							<a href="event-details.php"><img src="img/gallery/teacher-1.avif" class="img-fluid" alt=""></a>
							<div class="price">17 Aug 22</div>
							<div class="preview"><span>More info</span></div>
						</figure>
						<div class="wrapper">
							<!-- <small>Category</small> -->
							<h3>Ms. Smita Pradhan</h3>
							<p class="margin-0">The Power of positive parenting</p>
							<!-- <div class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></div> -->
						</div>
						<!-- <ul>
							<li><i class="icon_clock_alt"></i> 1h 30min</li>
							<li><i class="icon_like"></i> 890</li>
							<li><a href="course-detail.html">Enroll now</a></li>
						</ul> -->
					</div>
				</div>

				<div class="col-xl-4 col-lg-6 col-md-6">
					<div class="box_grid wow">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							
							<a href="event-details.php"><img src="img/gallery/teacher-2.avif" class="img-fluid" alt=""></a>
							<div class="price">02 Oct 2022</div>
							<div class="preview"><span>More info</span></div>
						</figure>
						<div class="wrapper">
							<!-- <small>Category</small> -->
							<h3>Ms. Gayatri Vamsi</h3>
							<p class="margin-0">Playful Parenting to nurture close connections</p>
							<!-- <div class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></div> -->
						</div>
						<!-- <ul>
							<li><i class="icon_clock_alt"></i> 1h 30min</li>
							<li><i class="icon_like"></i> 890</li>
							<li><a href="course-detail.html">Enroll now</a></li>
						</ul> -->
					</div>
				</div>
			
				<div class="col-xl-4 col-lg-6 col-md-6">
					<div class="box_grid wow">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							
							<a href="event-details.php"><img src="img/gallery/teacher-3.avif" class="img-fluid" alt=""></a>
							<div class="price">30 Mar 21</div>
							<div class="preview"><span>More info</span></div>
						</figure>
						<div class="wrapper">
							<!-- <small>Category</small> -->
							<h3>Ms. Ishwarya Kumar Ahmed</h3>
							<p class="margin-0">Digital Detox – why, what and how</p>
							<!-- <div class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></div> -->
						</div>
						<!-- <ul>
							<li><i class="icon_clock_alt"></i> 1h 30min</li>
							<li><i class="icon_like"></i> 890</li>
							<li><a href="course-detail.html">Enroll now</a></li>
						</ul> -->
					</div>
				</div>

			</div>
		
		</div>
		<!-- /container -->
		
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