<?php
$url = 'https://github.com/nodejs/node/pulse_committer_data/monthly';

header('Content-Type: application/json');

echo file_get_contents($url, false, stream_context_create([
    'http' => [
        'header' => 'accept: application/json'
    ]
]));
