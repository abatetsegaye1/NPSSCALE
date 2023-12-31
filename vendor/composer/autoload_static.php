<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit90521894d0dfda68656bf8fbc0a37553
{
    public static $prefixLengthsPsr4 = array (
        'H' => 
        array (
            'Hp\\Jobplace\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Hp\\Jobplace\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit90521894d0dfda68656bf8fbc0a37553::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit90521894d0dfda68656bf8fbc0a37553::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit90521894d0dfda68656bf8fbc0a37553::$classMap;

        }, null, ClassLoader::class);
    }
}
