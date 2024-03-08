<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Details - Vidya Shilp School</title>
    <?php include('layouts/head.php') ?>
    <link href="css/blog.css" rel="stylesheet">

</head>

<body>
	
	<div id="page">
		
    <?php include('layouts/navbar.php') ?>
	<!-- /header -->
	
	<main>
    <div class="breadcrumb-section">
                <div class="head">
                    <h1 class="text-center fadeInUp">Blog Details</h1>
                    <p class="text-center t-color-white"><a href="index.php">Home</a> / Blog Details</p>
                </div>
            </div>
		<!--/hero_in-->

		<div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-9">
					<div class="bloglist singlepost">
						<p><img alt="" class="img-fluid" src="img/slides/new/blog1.avif"></p>
						<h1>How does project based learning enhance an academic experience?</h1>
						<div class="postmeta">
							<ul>
								<li><a href="#"><i class="icon_clock_alt"></i> 23/12/2015</a></li>
								<li><a href="#"><i class="icon_pencil-edit"></i> Admin</a></li>
							</ul>
						</div>
						<!-- /post meta -->
						<div class="post-content">
							<div class="dropcaps">
								<p>The progress of elementary education over the past few decades has been remarkable. From the archaic practices of memorizing through writing on slates, to contemporary applications of theories to solve real-world problems, education has evolved by leaps and bounds. However, even today, teachers struggle to draw and retain the attention of students in a classroom.
<br/>
In a world where advanced technologies, such as artificial intelligence and blockchain, are addressing complex real-world challenges, why has all-inclusive classroom learning flown under the problem-solving radar for centuries? It’s simply because most schools follow a curriculum that is primed to shape a student. While few students are suited to this system of education, others need a more fluid curriculum to grasp concepts. It is for this very reason that some of the best schools in Bengaluru shape education to suit the student, rather than the other way around. Moreover, the true joy of learning is lost in the defunct practice of training students to memorize concepts and give exams. New-age pedagogies delve deep into the application of academic learning, which drives the switch from theoretical learning to practical application.
<br/>
One of the best examples of modern pedagogy is project based learning . Irrespective of our occupation, most tasks in the real world are treated as projects. Eg. Arya, an employee of a leading pharmaceutical company, was tasked with concocting a new, sustainable medicine for skin care. She was given a budget, timeframe, and quality requisite. She, immediately, set out to organize and manage a team that researched options and created products to address the challenge. Through reviews and feedback from beta tests, Arya encouraged her team to improve the product. Within half a dozen fortnights, Arya had brought one of the most effective and earth-friendly skin care products to the market.</p>
							</div>

						</div>
						<!-- /post -->
					</div>
					<!-- /single-post -->

					
				</div>
				<!-- /col -->

				<aside class="col-lg-3">
					
					<div class="widget bg-white p-2 shadow b-radius-10">
						<div class="widget-title">
							<h4>Recent Posts</h4>
						</div>
						<ul class="comments-list">
							<li>
								<div class="alignleft">
									<a href="#0"><img src="img/slides/new/blog1.avif" alt=""></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>

                            <li>
								<div class="alignleft">
									<a href="#0"><img src="img/slides/new/blog1.avif" alt=""></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>

                            <li>
								<div class="alignleft">
									<a href="#0"><img src="img/slides/new/blog1.avif" alt=""></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>

                            <li>
								<div class="alignleft">
									<a href="#0"><img src="img/slides/new/blog1.avif" alt=""></a>
								</div>
                                
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>

                            <li>
								<div class="alignleft">
									<a href="#0"><img src="img/slides/new/blog1.avif" alt=""></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
						
						</ul>
					</div>-
					<!-- /widget -->
					
				</aside>
				<!-- /aside -->
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