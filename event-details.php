<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Details - Vidya Shilp School</title>
    <?php include('layouts/head.php') ?>
</head>

<body>
	
	<div id="page" class="theia-exception">
		
	<?php include('layouts/navbar.php') ?>
	<!-- /header -->
	
	<main>
	<div class="breadcrumb-section">
                <div class="head">
                    <h1 class="text-center fadeInUp">Event Details </h1>
                    <p class="text-center t-color-white"><a href="index.php">Home</a> / Event Details</p>
                </div>
            </div>
		<!--/hero_in-->
		<div class="container margin_60_35">
			<div class="row">
				<aside class="col-lg-3" id="sidebar">
					<div class="profile">
						<div class="d-flex justify-content-center">
							<div class="profile-img">
						<img src="img/gallery/teacher-1.avif" alt=""/>
						</div>
						</div>
						
						<ul class="social_teacher">
							<li><a href="#"><i class="icon-facebook"></i></a></li>
							<li><a href="#"><i class="icon-twitter"></i></a></li>
							<li><a href="#"><i class="icon-linkedin"></i></a></li>
							<li><a href="#"><i class="icon-email"></i></a></li>
						</ul>
						<ul>
							<li>Name : <span class="float-right">Ms. Smita Pradhan</span> </li>
							<li>Date : <span class="float-right">17 Aug 22</span></li>
							<li>Fee : <span class="float-right">05.00pm to 06.00pm</span></li>
							<li>Location : <span class="float-right">--</span></li>
						</ul>
					</div>
				</aside>
				<!--/aside -->

				<div class="col-lg-9">
					<div class="box_teacher">
						<div class="indent_title_in">
							<i class="pe-7s-user"></i>
							<h3>Profile</h3>
							<p>Vidyashilp School presents Evoke: A Webinar Series</p>
						</div>
						<div class="wrapper_indent">
							<p>Ms. Smitha Pradhan, Accredited Counselor for Emotional Wellbeing and Mental Health, Certified Facilitator for W.H.O and a Passionate Educationist</p>
							
							<!-- End row-->
						</div>
					
						<!--wrapper_indent -->
					</div>
				</div>
				<!-- /col -->
			</div>
			<!-- /row -->
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
	<script src="assets/validate.js"></script>
	
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