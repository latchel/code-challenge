<!DOCTYPE html>
<html ng-app="CodeReviewApp">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">
    <meta name="robots" content="noindex, nofollow">
    <title>Latchel Code Review</title>

    <link href="https://fonts.googleapis.com/css?family=News+Cycle|Open+Sans:300,400" rel="stylesheet">
    <link rel="stylesheet" href="{{ elixir('css/'.$app.'.css') }}">

    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

</head>
<body>

<div class="header" ng-include="/header.html"></div>

<div class="content">
    <?php foreach($posts as $post){?>
        <div class="postitem" post-id="<?=$post->post_id?>" user-name="<?=$post->user->name?>"><?=$post->html?></div>
    <?php } ?>
</div>
<div class="footer" ng-include="/footer.html"></div>
<script src="{{ elixir('js/' . $app . '.js') }}"></script>
</body>
</html>
