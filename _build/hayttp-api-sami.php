<?php

use Sami\Sami;
use Sami\RemoteRepository\GitHubRemoteRepository;
use Sami\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

$valitDir = realpath(__DIR__ . '/../../hayttp');
$sourceDir = "$valitDir/src";

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in($sourceDir)
;

$versions = GitVersionCollection::create($valitDir)
    ->addFromTags('1.*')
    ->add('master', 'master dev branch')
;

return new Sami($iterator, array(
    // 'theme'                => 'symfony',
    'versions'             => $versions,
    'title'                => 'Hayttp API',
    'build_dir'            => 'docs/hayttp/api/%version%',
    'cache_dir'            => '/tmp/hayttp/cache/%version%',
    'remote_repository'    => new GitHubRemoteRepository('moccalotto/hayttp', '/src'),
    'default_opened_level' => 2,
));
