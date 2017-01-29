@extends('master')

@section('title', 'Engineer Stats')

@section('body')
	<div class="row column">
		<h1>Engineer Stats</h1>
		<hr />
	</div>

	<div class="row">
		<div class="small-12 large-12 columns">
			<p>
			The chart below shows the current available capacity by engineer.  Higher capacities indicate the
			engineer may have more bandwidth.
			</p>
			<div id="js-engineer-capacity"></div>
		</div>

		<hr />

		<div class="small-12 large-12 columns">
			<p>
			The pie chart below shows the contributions by engineer in the last 4 weeks.
			</p>
			<div id="js-pie-contributions"></div>
		</div>
	</div>



	<script type="text/javascript">
		$(function () {


	// Pie chart
	Highcharts.chart('js-pie-contributions', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'Aggregate Contribution by Engineer'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		series: [{
			name: 'Brands',
			colorByPoint: true,
			data: {!! json_encode($pie_chart_stats) !!}
		}]
	});


	// Bar chart
	Highcharts.chart('js-engineer-capacity', {
		chart: {
			type: 'column'
		},
		title: {
			text: 'Current available capacity ( by engineer)'
		},
		xAxis: {
			categories: {!! json_encode($bar_chart_stats['username']) !!}
		},
		yAxis: {
			type: 'logarithmic',
			title: {
				text: 'Available capacity'
			}
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [{
			data: {!! json_encode($bar_chart_stats['capacity']) !!}
		}]
	});
		});
	</script>
@endsection