import svgxhr from 'webpack-svgstore-plugin/src/helpers/svgxhr';

const __svg__ = {
    name: 'logo.[hash].svg',
    path: '*.svg',
};

svgxhr(__svg__);

