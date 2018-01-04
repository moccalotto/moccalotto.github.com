<?php

use Sami\Sami;
use Sami\RemoteRepository\GitHubRemoteRepository;
use Sami\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

$valitDir = realpath(__DIR__ . '/../../valit');
$sourceDir = "$valitDir/src";

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in($sourceDir)
;

$versions = GitVersionCollection::create($valitDir)
    ->addFromTags('1.*')
    ->addFromTags('0.8.*')
    ->add('1.0.0', '1.0.0 dev branch')
    ->add('master', 'master dev branch')
;

return new Sami($iterator, array(
    // 'theme'                => 'symfony',
    'versions'             => $versions,
    'title'                => 'Valit API',
    'build_dir'            => 'docs/valit/api/%version%',
    'cache_dir'            => '/tmp/valit/cache/%version%',
    'remote_repository'    => new GitHubRemoteRepository('moccalotto/valit', '/src'),
    'default_opened_level' => 2,
));
