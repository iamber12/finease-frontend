// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Slider from '@mui/material/Slider';


// const AmountSlider = () => {
//   const [value, setValue] = React.useState<number>(30);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number);
//   };
//   return (
//     <Box sx={{ width: 200 }}>
//       <Slider size="sm" valueLabelDisplay="auto" defaultValue={30} aria-label="slider" min={0} max={1000} color="secondary"/>
//     </Box>
//   );
// };

// export default AmountSlider;

import * as React from 'react';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

// function ValueLabelComponent(props: SliderValueLabelProps) {
//   const { children, value } = props;

//   return (
//     <Tooltip enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 4,
  width: "1000px",
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 6,
    background: 'unset',
    padding: 2,
    width: 50,
    height: 50,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export default function CustomizedSlider() {
  return (
    <Box sx={{ width: 320 }}>
      <Box sx={{ m: 3 }} />
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
        min={0}
        max={35000}
        size="small"
      />
    </Box>
  );
}