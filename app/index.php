<?

// Get hypernova-php
require __DIR__ . '/vendor/autoload.php';
use \WF\Hypernova\Renderer;

// Create renderer (points to local node host)
$renderer = new Renderer('http://localhost:3030/batch');

// Let's render some page content
// @see ./templates/VideoPage.js
$renderer->addJob('page_content', [

    // Template name
    'name' => 'VideoPage',

    // Props
    'data' => [
        'header' => 'Video Playlist',
        'videos' => [
            ['title' => 'This is a fancy title!', 'id' => 1],
            ['title' => 'You won\'t believe what this monkey will do!', 'id' => 2],
            ['title' => 'Stinky kitty brushes his teeth', 'id' => 3]
        ]
    ]

]);

// Renders template and gets response
$response = $renderer->render();

// Echo out html content
echo $response->results['page_content']->html;
