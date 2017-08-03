import React from 'react';

var array = ['print_001.jpg', 'print_002.jpg', 'print_003.jpg', 'print_004.jpg', 'print_005.jpg', 'print_006.jpg', 'print_007.jpg', 'print_008.jpg', 'print_009.jpg', 'print_010.jpg', 'print_011.jpg', 'print_012.jpg', 'print_013.jpg', 'print_014.jpg', 'print_015.jpg', 'print_016.jpg', 'print_017.jpg', 'print_018.jpg', 'print_019.jpg', 'print_020.jpg', 'print_021.jpg', 'print_022.jpg', 'print_023.jpg', 'print_024.jpg', 'print_025.jpg', 'print_026.jpg', 'print_027.jpg', 'print_028.jpg', 'print_029.jpg', 'print_030.jpg', 'print_031.jpg', 'print_032.jpg', 'print_033.jpg', 'print_034.jpg', 'print_035.jpg', 'print_036.jpg', 'print_037.jpg', 'print_038.jpg', 'print_039.jpg', 'print_040.jpg' ]

array.reverse()

const Graphic = () => (
 <div className='graphic'>
  {array.map((pic, idx) => <div key={idx} className ='square'><img alt='graphic' src={`images/prints/${pic}`}></img></div>)}
 </div>
);

export default Graphic;
