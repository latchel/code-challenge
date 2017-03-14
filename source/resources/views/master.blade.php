{{-- HTML template --}}
<!DOCTYPE html>
<html>
<head>
	<title>@yield('title')</title>

	{{-- stylesheets --}}
	<link rel="stylesheet" href="{{ asset('/css/vendor/foundation.min.css') }}">
	<link rel="stylesheet" href="{{ asset('/css/app.css') }}">

	{{-- javascript --}}
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"
			integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
			crossorigin="anonymous"></script>
	<script src="{{asset('/js/vendor/highcharts.js')}}"></script>
	<script src="{{asset('/js/vendor/highcharts-more.js')}}"></script>
	<script src="{{asset('/js/vendor/solid-gauge.js')}}"></script>
	<script src="{{asset('/js/vendor/exporting.js')}}"></script>
</head>



<body>
	<header>
		<nav>
			<div id="header" class="top-bar">
				<img class="header__logo" src="/images/latchel.png" />
				<span class="header__title">Dashboard</span>
			</div>

			<div id="nav" class="top-bar">
				<ul class="menu">
					<li><a href="{{route('sprint_velocity')}}">Team Stats</a></li>
					<li><a href="{{route('engineer_capacity')}}">Engineer Stats</a></li>
				</ul>
			</div>
		</nav>
	</header>

	@yield('body')

</body>

</html>