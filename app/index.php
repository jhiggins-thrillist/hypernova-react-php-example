<?

// Get hypernova-php
require __DIR__ . '/vendor/autoload.php';
use \WF\Hypernova\Renderer;

// Create renderer (points to local node host)
$renderer = new Renderer('http://localhost:3030/batch');

// Let's render some page content
// @see ./templates/VideoPage.js
$renderer->addJob('page_content', array(

    // Template name
    'name' => 'VideoPage',

    // Props
    'data' => array(
        'header' => 'Video Playlist',
        'videos' => array(
            array('title' => 'This is a fancy title!', 'id' => 1),
            array('title' => 'You won\'t believe what this monkey will do!', 'id' => 2),
            array('title' => 'Stinky kitty brushes his teeth', 'id' => 3)
        ),
        'count' => 1
    )
));

echo '<!DOCTYPE html>';
echo '<html>';
echo '<head>';
echo '</head>';
echo '<body>';

// Renders template and gets response
$response = $renderer->render();

// Echo out html content
echo $response->results['page_content']->html;

echo '<script src="/bundle.js"></script>';
echo '</body>';
echo '</html>';
