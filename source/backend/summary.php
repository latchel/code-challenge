<?php
$url = 'https://github.com/nodejs/node/pulse_diffstat_summary?period=monthly';

// Display sentences on their own line
echo preg_replace('/\.\s/i', ".\n<br>", file_get_contents($url) );
