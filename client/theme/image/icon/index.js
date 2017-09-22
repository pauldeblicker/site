import svgxhr from 'webpack-svgstore-plugin/src/helpers/svgxhr';

const __svg__ = {
    name: 'icons.[hash].svg',
    path: '*.svg',
};

svgxhr(__svg__);

