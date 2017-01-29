@extends('master')

@section('title', 'Sprint Velocity')

@section('body')
	<div class="row column">
		<h1>Team Stats</h1>
		<hr />
		<p>
		"Contributions" are calculated as lines of code added + lines of code removed.
		</p>
	</div>

	<div class="row">
		<div class="small-12 large-8 columns">
			<div id="js-velocity-chart"></div>
		</div>
		<div class="small-12 large-4 columns">
			<div>
				<p>Average Velocity (per week):</p>
				<div class="stat">{{$gauge_stats['avg_velocity']}}</div>
			</div>
			<div id="js-capacity-gauge" style="width: 300px; height: 200px; float: left"></div>
		</div>
	</div>


	<script type="text/javascript">
		$(function () {


		Highcharts.chart('js-velocity-chart', {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Sprint Velocity'
			},
			subtitle: {
				text: 'Source: GitHub.com'
			},
			legend: {
				enabled: false
			},
			xAxis: {
				categories: [
					'{!!implode('\',\'', $velocity_chart_stats['dates'])!!}'
				],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Contributions (lines of code)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y} lines</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: [{
				data: [{{implode(',', $velocity_chart_stats['contributions'])}}]

			}]
		});



			var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
						[0.1, '#55BF3B'], // green
						[0.5, '#DDDF0D'], // yellow
						[0.9, '#DF5353'] // red
					],
					lineWidth: 0,
					minorTickInterval: null,
					tickAmount: 2,
					title: {
						y: -70
					},
					labels: {
						y: 16
					}
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
			};


			Highcharts.chart('js-capacity-gauge', Highcharts.merge(gaugeOptions, {
				yAxis: {
					min: 0,
					max: {{$gauge_stats['avg_velocity']}},
					title: {
						text: 'Current Load'
					}
				},

				credits: {
					enabled: false
				},
				legend: {
					enabled: false
				},
				series: [{
					name: 'Speed',
					data: [{{$gauge_stats['capacity']}}],
					dataLabels: {
						format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						'<span style="font-size:12px;color:silver">(lines)</span></div>'
					},
					tooltip: {
						valueSuffix: ' lines of code'
					}
				}]

			}));

	});
	</script>
@endsection