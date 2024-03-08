<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enquire Now - Vidya Shilp School</title>
    <?php include('layouts/head.php') ?>
</head>

<body>
    <div id="page">
        <?php include('layouts/navbar.php') ?>
        <main>

            <div class="breadcrumb-section">
                <div class="head">
                    <h1 class="text-center fadeInUp">Enquire Now</h1>
                    <p class="text-center t-color-white"><a href="index.php">Home</a> / Enquire Now</p>
                </div>
            </div>

            <div class="container mt-5 mb-5">
                <div class="row ">

                    <div class="col-md-12 col-sm-12 mb-2">

                        <form class="contact-form shadow">

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group my-4">

                                        <select class="custom-select custom-input" id="academicYear">
                                            <option selected>Select Academic Year</option>
                                            <option value="AY 2024-2025">AY 2023-2024</option>
                                            <option value="AY 2025-2026">AY 2025-2026</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group my-4">

                                        <select class="custom-select custom-input" id="academicYear">
                                            <option selected>Select Campus</option>
                                            <option value="2024-2025">Vidhyashilp Bagalure</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group my-4">

                                        <input type="text" class="custom-input " id="name" placeholder="Child's Name">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                <div class="form-group my-4">

                                    <select class="custom-select custom-input" id="academicYear">
                                        <option selected>Select Grade</option>
                                        <option value="Grade 1">Grade 1</option>
                                        <option value="Grade 2">Grade 2</option>
                                        <option value="Grade 3">Grade 3</option>
                                        <option value="Grade 4">Grade 4</option>
                                        <option value="Grade 5">Grade 5</option>
                                        <option value="Grade 6">Grade 6</option>
                                        <option value="Grade 7">Grade 7</option>
                                        <option value="Grade 8">Grade 8</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-md-3">
                                <div class="form-group my-4">

                                    <input type="text" class="custom-input " id="name" placeholder="Parent's Name">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group my-4">

                                    <input type="mail" class="custom-input" id="phone" placeholder="Parent's Email Id">
                                </div>
                            </div>


                            <div class="col-md-3">
                                <div class="form-group my-4">

                                    <input type="tel" class="custom-input" id="phone" placeholder="Parent's mobile number">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">

                                    <textarea class="custom-input" id="message" rows="3" placeholder="Enter your message"></textarea>
                                </div>
                            </div>

                            </div>


                            

                            <div class="row">
                                <div class="form-check mx-2">
                                    <input class="form-check-input" type="checkbox" id="callCheckbox" value="call">
                                    <label class="form-check-label" for="callCheckbox">
                                        I authorize Vidyashilp representatives to get in touch with me via Call, SMS, E-mail, Whatsapp
                                    </label>
                                </div>

                                <div class="d-flex justify-content-center">
                                <button type="submit" class="btn btn-danger mt-4" style="width: 200px;">Submit</button>
                                </div>
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