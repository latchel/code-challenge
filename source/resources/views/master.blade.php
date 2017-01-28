{{-- HTML template --}}
<!DOCTYPE html>
<html>
<head>
	<title>@yield('title')</title>

	{{-- stylesheets --}}
	<link rel="stylesheet" href="{{ asset('/css/vendor/foundation.min.css') }}">
	<link rel="stylesheet" href="{{ asset('/css/app.css') }}">
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
					<li><a href="{{route('sprint_velocity')}}">Sprint Velocity</a></li>
					<li><a href="{{route('engineer_capacity')}}">Engineer Capacity</a></li>
				</ul>
			</div>
		</nav>
	</header>

	@yield('body')

</body>

</html>