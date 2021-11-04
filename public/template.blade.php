<!-- file should be in  View stored in resources/views/ -->

<!DOCTYPE html>
<!-- // ng-app placement should be place inside your body tag as contanter to host the angular app -->
<html ng-app="CodeReviewApp">

<head>
    <meta charset="utf-8">
    <!-- take off disable scale for 508 compliance -->

    <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">

    <!-- if you want to stop google robots from index the pages this is it  I say let them index-->
    <meta name="robots" content="noindex, nofollow">
    <title>Latchel Code Review</title>

    <!-- I like @import for scss dev. And always use Roboto and I say copy the whole link and put fonts on separate call lines-->
    <link href="https://fonts.googleapis.com/css?family=News+Cycle|Open+Sans:300,400" rel="stylesheet">

    <!-- I say you don't need $app unless you define it first and I say it easy to just write the like like 'css/app.css' but I would use a webpack task to mix all my sass in one file to call from -->
    <link rel="stylesheet" href="{{ elixir('css/'.$app.'.css') }}">

    <!-- head needs angular.min.js -->


</head>


<!-- // ng-app placement should be place inside your body tag as contanter to host the angular app  <body ng-app=""> -->

<body>

    <!-- should be inside a ng-controller wrap -->

    <!-- no / need if on the same root -->
    <div class="header" ng-include="/header.html"></div>

    <div class="content">
        <? foreach ($posts as $post) { ?>
            <!-- on User->name maybe wrong I would try  $post->user_name and post had those Elements in it -->
            <!-- elements should have _ insted of -  -->
            <post post-id="<?= $post->post_id ?>" user-name="<?= $post->user->name ?>">
                <?= $post->html ?>
            </post>
        <? } ?>
    </div>

    <!-- I don't see footer in the poject please add-->
    <!-- no / need if on the same root -->
    <div class="footer" ng-include="/footer.html"></div>
    <!-- I say you don't need $app unless you define it first and I say it easy to just write the like like 'js/app.js' -->
    <script src="{{ elixir('js/' . $app . '.js') }}"></script>
</body>

</html>