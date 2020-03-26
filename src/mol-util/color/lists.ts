/**
 * Copyright (c) 2018-2019 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Alexander Rose <alexander.rose@weirdbyte.de>
 */

import { ColorList } from './color';
import { capitalize } from '../string';

export const ColorLists = {
    /**
     * Brewer Color Lists
     *
     * Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The Pennsylvania State University.
     * Licensed under the Apache License, Version 2.0 (the "License");
     */
    'orange-red': ColorList('Orange-Red', 'sequential',
        'Orange-Red, sequential color scheme from ColorBrewer 2.0',
        [0xfff7ec, 0xfee8c8, 0xfdd49e, 0xfdbb84, 0xfc8d59, 0xef6548, 0xd7301f, 0xb30000, 0x7f0000]
    ),
    'purple-blue': ColorList('Purple-Blue', 'sequential',
        'Purple-Blue, sequential color scheme from ColorBrewer 2.0',
        [0xfff7fb, 0xece7f2, 0xd0d1e6, 0xa6bddb, 0x74a9cf, 0x3690c0, 0x0570b0, 0x045a8d, 0x023858]
    ),
    'blue-purple': ColorList('Blue-Purple', 'sequential',
        'Blue-Purple, sequential color scheme from ColorBrewer 2.0',
        [0xf7fcfd, 0xe0ecf4, 0xbfd3e6, 0x9ebcda, 0x8c96c6, 0x8c6bb1, 0x88419d, 0x810f7c, 0x4d004b]
    ),
    'oranges': ColorList('Oranges', 'sequential',
        '',
        [0xfff5eb, 0xfee6ce, 0xfdd0a2, 0xfdae6b, 0xfd8d3c, 0xf16913, 0xd94801, 0xa63603, 0x7f2704]
    ),
    'blue-green': ColorList('Blue-Green', 'sequential',
        '',
        [0xf7fcfd, 0xe5f5f9, 0xccece6, 0x99d8c9, 0x66c2a4, 0x41ae76, 0x238b45, 0x006d2c, 0x00441b]
    ),
    'yellow-orange-brown': ColorList('Yellow-Orange-Brown', 'sequential',
        '',
        [0xffffe5, 0xfff7bc, 0xfee391, 0xfec44f, 0xfe9929, 0xec7014, 0xcc4c02, 0x993404, 0x662506]
    ),
    'yellow-green': ColorList('Yellow-Green', 'sequential',
        '',
        [0xffffe5, 0xf7fcb9, 0xd9f0a3, 0xaddd8e, 0x78c679, 0x41ab5d, 0x238443, 0x006837, 0x004529]
    ),
    'reds': ColorList('Reds', 'sequential',
        '',
        [0xfff5f0, 0xfee0d2, 0xfcbba1, 0xfc9272, 0xfb6a4a, 0xef3b2c, 0xcb181d, 0xa50f15, 0x67000d]
    ),
    'red-purple': ColorList('Red-Purple', 'sequential',
        '',
        [0xfff7f3, 0xfde0dd, 0xfcc5c0, 0xfa9fb5, 0xf768a1, 0xdd3497, 0xae017e, 0x7a0177, 0x49006a]
    ),
    'greens': ColorList('Greens', 'sequential',
        '',
        [0xf7fcf5, 0xe5f5e0, 0xc7e9c0, 0xa1d99b, 0x74c476, 0x41ab5d, 0x238b45, 0x006d2c, 0x00441b]
    ),
    'yellow-green-blue': ColorList('Yellow-Green-Blue', 'sequential',
        '',
        [0xffffd9, 0xedf8b1, 0xc7e9b4, 0x7fcdbb, 0x41b6c4, 0x1d91c0, 0x225ea8, 0x253494, 0x081d58]
    ),
    'purples': ColorList('Purples', 'sequential',
        '',
        [0xfcfbfd, 0xefedf5, 0xdadaeb, 0xbcbddc, 0x9e9ac8, 0x807dba, 0x6a51a3, 0x54278f, 0x3f007d]
    ),
    'green-blue': ColorList('Green-Blue', 'sequential',
        '',
        [0xf7fcf0, 0xe0f3db, 0xccebc5, 0xa8ddb5, 0x7bccc4, 0x4eb3d3, 0x2b8cbe, 0x0868ac, 0x084081]
    ),
    'greys': ColorList('Greys', 'sequential',
        '',
        [0xffffff, 0xf0f0f0, 0xd9d9d9, 0xbdbdbd, 0x969696, 0x737373, 0x525252, 0x252525, 0x000000]
    ),
    'yellow-orange-red': ColorList('Yellow-Orange-Red', 'sequential',
        '',
        [0xffffcc, 0xffeda0, 0xfed976, 0xfeb24c, 0xfd8d3c, 0xfc4e2a, 0xe31a1c, 0xbd0026, 0x800026]
    ),
    'purple-red': ColorList('Purple-Red', 'sequential',
        '',
        [0xf7f4f9, 0xe7e1ef, 0xd4b9da, 0xc994c7, 0xdf65b0, 0xe7298a, 0xce1256, 0x980043, 0x67001f]
    ),
    'blues': ColorList('Blues', 'sequential',
        '',
        [0xf7fbff, 0xdeebf7, 0xc6dbef, 0x9ecae1, 0x6baed6, 0x4292c6, 0x2171b5, 0x08519c, 0x08306b]
    ),
    'purple-blue-green': ColorList('Purple-Blue-Green', 'sequential',
        '',
        [0xfff7fb, 0xece2f0, 0xd0d1e6, 0xa6bddb, 0x67a9cf, 0x3690c0, 0x02818a, 0x016c59, 0x014636]
    ),
    'spectral': ColorList('Spectral', 'diverging',
        '',
        [0x9e0142, 0xd53e4f, 0xf46d43, 0xfdae61, 0xfee08b, 0xffffbf, 0xe6f598, 0xabdda4, 0x66c2a5, 0x3288bd, 0x5e4fa2]
    ),
    'red-yellow-green': ColorList('Red-Yellow-Green', 'diverging',
        '',
        [0xa50026, 0xd73027, 0xf46d43, 0xfdae61, 0xfee08b, 0xffffbf, 0xd9ef8b, 0xa6d96a, 0x66bd63, 0x1a9850, 0x006837]
    ),
    'red-blue': ColorList('Red-Blue', 'diverging',
        '',
        [0x67001f, 0xb2182b, 0xd6604d, 0xf4a582, 0xfddbc7, 0xf7f7f7, 0xd1e5f0, 0x92c5de, 0x4393c3, 0x2166ac, 0x053061]
    ),
    'pink-yellow-green': ColorList('Pink-Yellow-Green', 'diverging',
        '',
        [0x8e0152, 0xc51b7d, 0xde77ae, 0xf1b6da, 0xfde0ef, 0xf7f7f7, 0xe6f5d0, 0xb8e186, 0x7fbc41, 0x4d9221, 0x276419]
    ),
    'purple-green': ColorList('Purple-Green', 'diverging',
        '',
        [0x40004b, 0x762a83, 0x9970ab, 0xc2a5cf, 0xe7d4e8, 0xf7f7f7, 0xd9f0d3, 0xa6dba0, 0x5aae61, 0x1b7837, 0x00441b]
    ),
    'red-yellow-blue': ColorList('Red-Yellow-Blue', 'diverging',
        'Red-Yellow-Blue, diverging color scheme from ColorBrewer 2.0',
        [0xa50026, 0xd73027, 0xf46d43, 0xfdae61, 0xfee090, 0xffffbf, 0xe0f3f8, 0xabd9e9, 0x74add1, 0x4575b4, 0x313695]
    ),
    'brown-white-green': ColorList('Brown-White-Green', 'diverging',
        '',
        [0x543005, 0x8c510a, 0xbf812d, 0xdfc27d, 0xf6e8c3, 0xf5f5f5, 0xc7eae5, 0x80cdc1, 0x35978f, 0x01665e, 0x003c30]
    ),
    'red-grey': ColorList('Red-Grey', 'diverging',
        '',
        [0x67001f, 0xb2182b, 0xd6604d, 0xf4a582, 0xfddbc7, 0xffffff, 0xe0e0e0, 0xbababa, 0x878787, 0x4d4d4d, 0x1a1a1a]
    ),
    'orange-purple': ColorList('Orange-Purple', 'diverging',
        '',
        [0x7f3b08, 0xb35806, 0xe08214, 0xfdb863, 0xfee0b6, 0xf7f7f7, 0xd8daeb, 0xb2abd2, 0x8073ac, 0x542788, 0x2d004b]
    ),
    'set-2': ColorList('Set-2', 'qualitative',
        '',
        [0x66c2a5, 0xfc8d62, 0x8da0cb, 0xe78ac3, 0xa6d854, 0xffd92f, 0xe5c494, 0xb3b3b3]
    ),
    'accent': ColorList('Accent', 'qualitative',
        '',
        [0x7fc97f, 0xbeaed4, 0xfdc086, 0xffff99, 0x386cb0, 0xf0027f, 0xbf5b17, 0x666666]
    ),
    'set-1': ColorList('Set-1', 'qualitative',
        '',
        [0xe41a1c, 0x377eb8, 0x4daf4a, 0x984ea3, 0xff7f00, 0xffff33, 0xa65628, 0xf781bf, 0x999999]
    ),
    'set-3': ColorList('Set-3', 'qualitative',
        '',
        [0x8dd3c7, 0xffffb3, 0xbebada, 0xfb8072, 0x80b1d3, 0xfdb462, 0xb3de69, 0xfccde5, 0xd9d9d9, 0xbc80bd, 0xccebc5, 0xffed6f]
    ),
    'dark-2': ColorList('Dark-2', 'qualitative',
        '',
        [0x1b9e77, 0xd95f02, 0x7570b3, 0xe7298a, 0x66a61e, 0xe6ab02, 0xa6761d, 0x666666]
    ),
    'paired': ColorList('Paired', 'qualitative',
        '',
        [0xa6cee3, 0x1f78b4, 0xb2df8a, 0x33a02c, 0xfb9a99, 0xe31a1c, 0xfdbf6f, 0xff7f00, 0xcab2d6, 0x6a3d9a, 0xffff99, 0xb15928]
    ),
    'pastel-2': ColorList('Pastel-2', 'qualitative',
        '',
        [0xb3e2cd, 0xfdcdac, 0xcbd5e8, 0xf4cae4, 0xe6f5c9, 0xfff2ae, 0xf1e2cc, 0xcccccc]
    ),
    'pastel-1': ColorList('Pastel-1', 'qualitative',
        '',
        [0xfbb4ae, 0xb3cde3, 0xccebc5, 0xdecbe4, 0xfed9a6, 0xffffcc, 0xe5d8bd, 0xfddaec, 0xf2f2f2]
    ),

    /**
     * Matplotlib colormaps, including various perceptually uniform shades, see https://bids.github.io/colormap/
     */
    'magma': ColorList('Magma', 'sequential',
        'Perceptually uniform shades of black-red-white',
        [0x420f74, 0x4a1079, 0x52127c, 0x5a157e, 0x61187f, 0x691c80, 0x711f81, 0x792281, 0x812581, 0x892881, 0x912a80, 0x992d7f, 0xa12f7e, 0xa9327c, 0xb1357a, 0xb93778, 0xc23a75, 0xca3e72, 0xd1426e, 0xd9466a, 0xe04b66, 0xe65162, 0xec585f, 0xf0605d, 0xf4685b, 0xf7715b, 0xf97b5d, 0xfb8460, 0xfc8e63, 0xfd9768, 0xfda16e, 0xfeaa74, 0xfeb37b, 0xfebc82, 0xfec689, 0xfdcf92, 0xfdd89a, 0xfde1a3, 0xfceaac, 0xfcf3b5, 0xfbfcbf]
    ),
    'inferno': ColorList('Inferno', 'sequential',
        'Perceptually uniform shades of black-red-yellow',
        [0x480b6a, 0x500d6c, 0x58106d, 0x60136e, 0x68166e, 0x70196e, 0x781c6d, 0x801f6b, 0x88216a, 0x902468, 0x982765, 0xa02a62, 0xa72d5f, 0xaf315b, 0xb73456, 0xbe3852, 0xc53d4d, 0xcc4148, 0xd24742, 0xd94d3d, 0xde5337, 0xe45a31, 0xe8612b, 0xed6825, 0xf0701e, 0xf37918, 0xf68111, 0xf88a0b, 0xfa9306, 0xfb9d06, 0xfba60b, 0xfbb014, 0xfbb91e, 0xf9c32a, 0xf8cd37, 0xf5d745, 0xf3e056, 0xf1e968, 0xf1f27d, 0xf5f891, 0xfcfea4],
    ),
    'plasma': ColorList('Plasma', 'sequential',
        'Perceptually uniform shades of blue-red-yellow',
        [0x1b068c, 0x250591, 0x2f0495, 0x380499, 0x40039c, 0x49029f, 0x5101a2, 0x5901a4, 0x6100a6, 0x6800a7, 0x7000a8, 0x7801a8, 0x7f03a7, 0x8607a6, 0x8e0ca4, 0x9511a1, 0x9b179e, 0xa21c9a, 0xa82296, 0xae2791, 0xb42d8d, 0xb93388, 0xbe3883, 0xc33e7f, 0xc8447a, 0xcd4975, 0xd14f71, 0xd6556d, 0xda5a68, 0xde6064, 0xe26660, 0xe56c5b, 0xe97257, 0xec7853, 0xef7e4e, 0xf2854a, 0xf58b46, 0xf79241, 0xf9993d, 0xfaa039, 0xfca735, 0xfdaf31, 0xfdb62d, 0xfdbe29, 0xfdc626, 0xfcce25, 0xfad624, 0xf8df24, 0xf5e726, 0xf2f026, 0xeff821]
    ),
    'viridis': ColorList('Viridis', 'sequential',
        'Perceptually uniform shades of blue-green-yellow',
        [0x45085b, 0x470f62, 0x471669, 0x481d6f, 0x482374, 0x472a79, 0x46307d, 0x453681, 0x433c84, 0x414286, 0x3e4888, 0x3c4d8a, 0x3a538b, 0x37588c, 0x355d8c, 0x32628d, 0x30678d, 0x2e6c8e, 0x2c718e, 0x2a768e, 0x287a8e, 0x267f8e, 0x24848d, 0x23898d, 0x218d8c, 0x1f928c, 0x1e978a, 0x1e9b89, 0x1ea087, 0x20a585, 0x23a982, 0x28ae7f, 0x2eb27c, 0x35b778, 0x3dbb74, 0x45bf6f, 0x4fc369, 0x59c764, 0x64cb5d, 0x70ce56, 0x7cd24f, 0x88d547, 0x95d73f, 0xa2da37, 0xafdc2e, 0xbdde26, 0xcae01e, 0xd7e219, 0xe4e318, 0xf1e51c, 0xfde724]
    ),
    'cividis': ColorList('Cividis', 'sequential',
        'Perceptually uniform shades of blue-green-yellow, should look effectively identical to colorblind and non-colorblind users',
        [0x002c67, 0x003070, 0x083370, 0x16366f, 0x1f3a6e, 0x273d6d, 0x2e416c, 0x34446c, 0x39486c, 0x3f4b6b, 0x444f6b, 0x49526b, 0x4e566c, 0x52596c, 0x575d6d, 0x5b606e, 0x60646e, 0x64676f, 0x686b71, 0x6d6e72, 0x717273, 0x757575, 0x797977, 0x7e7d78, 0x838078, 0x878478, 0x8c8878, 0x918c77, 0x968f77, 0x9b9376, 0xa09775, 0xa59b73, 0xaa9f72, 0xafa370, 0xb4a76f, 0xb9ab6d, 0xbeb06a, 0xc4b468, 0xc9b865, 0xcebc62, 0xd4c15e, 0xd9c55a, 0xdfca56, 0xe4ce51, 0xead34c, 0xefd846, 0xf5dc3f, 0xfbe136, 0xfde737]
    ),
    'twilight': ColorList('Twilight', 'sequential',
        'Perceptually uniform shades of white-blue-black-red-white, cyclic',
        [0xdfd9e1, 0xd8d7dd, 0xced3d8, 0xc2cdd3, 0xb4c7ce, 0xa7c0ca, 0x9ab8c7, 0x8eb0c5, 0x83a8c3, 0x7a9fc2, 0x7297c0, 0x6b8ebf, 0x6684bd, 0x637bbb, 0x6171b9, 0x5f67b6, 0x5e5cb2, 0x5e51ad, 0x5d46a7, 0x5c3c9f, 0x5b3196, 0x58278b, 0x531e7d, 0x4d176e, 0x46135f, 0x3e1151, 0x381045, 0x32113b, 0x301336, 0x361138, 0x3e113c, 0x471240, 0x521445, 0x5e1749, 0x6a1a4d, 0x761e4f, 0x812350, 0x8b2a50, 0x95324f, 0x9d3a4f, 0xa5434f, 0xac4d50, 0xb25752, 0xb86155, 0xbc6c59, 0xc0775f, 0xc48267, 0xc78d70, 0xc9987b, 0xcca389, 0xceae97, 0xd2b8a6, 0xd6c1b5, 0xdacac4, 0xddd1d1, 0xe0d6db, 0xe1d8e1]
    ),

    /**
     * https://ai.googleblog.com/2019/08/turbo-improved-rainbow-colormap-for.html
     */
    'turbo': ColorList('Turbo', 'sequential',
        'Improved (smooth) rainbow colormap for visualization',
        [0x4a41b5, 0x4a58dd, 0x426ff2, 0x3987f9, 0x2f9df5, 0x28b2e9, 0x25c6d8, 0x27d7c4, 0x2ee5ae, 0x3bf098, 0x4df884, 0x62fd70, 0x7bfe5f, 0x95fb51, 0xaff444, 0xc8ea3a, 0xdedd32, 0xf0cc2c, 0xfeb927, 0xffa423, 0xff8e1f, 0xff761c, 0xf65f18, 0xe54813, 0xd0330e, 0xba2208, 0xa51403, 0x960d00]
    ),

    /**
     * Other
     */
    'rainbow': ColorList('Rainbow', 'sequential',
        '',
        [ 0x3361E1, 0x35A845, 0xF9FF00, 0xEC8711, 0xBF2222 ]
    ),
    'red-white-blue': ColorList('Red-White-Blue', 'diverging',
        '',
        [ 0xBF2222, 0xFFFFFF, 0x3361E1 ]
    ),
}

export type ColorListName = keyof typeof ColorLists
export const ColorListNames = Object.keys(ColorLists)
export const ColorListOptions = ColorListNames.map(n => [n, ColorLists[n as ColorListName].label, capitalize(ColorLists[n as ColorListName].type)] as [ColorListName, string, string])

export const ColorListOptionsScale = ColorListOptions.filter(v => ColorLists[v[0]].type === 'diverging' || ColorLists[v[0]].type === 'sequential')
export const ColorListOptionsSet = ColorListOptions.filter(v => ColorLists[v[0]].type === 'qualitative')

export function getColorListFromName(name: ColorListName) {
    if (name in ColorLists) return ColorLists[name as ColorListName]
    console.warn(`unknown color list named '${name}'`)
    return ColorLists['red-yellow-blue']
}
