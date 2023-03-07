import { Box, BoxProps, createStyles } from '@mantine/core';

export function Logo({ ...props }: LogoProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} {...props}>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 700"
        width="60"
        height="30"
      >
        <title>shantsai</title>
        <defs>
          <linearGradient
            id="g1"
            x1="301.6"
            y1="245.2"
            x2="412.2"
            y2="399.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fecb52" />
            <stop offset="1" stop-color="#ee4669" />
          </linearGradient>
          <linearGradient
            id="g2"
            x1="271.3"
            y1="198.8"
            x2="399.1"
            y2="389.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".5" stop-color="#fecb52" stop-opacity="0" />
            <stop offset=".9" stop-color="#9a3764" />
          </linearGradient>
          <linearGradient
            id="g3"
            x1="388.8"
            y1="478.7"
            x2="346.8"
            y2="297.9"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fecb52" />
            <stop offset="1" stop-color="#ee4669" />
          </linearGradient>
          <linearGradient
            id="g4"
            x1="446"
            y1="545.3"
            x2="301.7"
            y2="313.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".5" stop-color="#fecb52" stop-opacity="0" />
            <stop offset=".9" stop-color="#9a3764" />
          </linearGradient>
          <linearGradient
            id="g5"
            x1="703.9"
            y1="311.6"
            x2="340.2"
            y2="346.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".3" stop-color="#fecb52" />
            <stop offset="1" stop-color="#ee4669" />
          </linearGradient>
          <linearGradient
            id="g6"
            x1="345.6"
            y1="232.3"
            x2="305.6"
            y2="164.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".5" stop-color="#fecb52" stop-opacity="0" />
            <stop offset="1" stop-color="#9a3764" />
          </linearGradient>
          <linearGradient
            id="g7"
            x1="237.5"
            y1="424.6"
            x2="245.1"
            y2="424.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fecb52" />
            <stop offset="1" stop-color="#ee4669" />
          </linearGradient>
          <linearGradient
            id="g8"
            x1="135.7"
            y1="394"
            x2="302.4"
            y2="339"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fecb52" />
            <stop offset="1" stop-color="#ee4669" />
          </linearGradient>
          <linearGradient
            id="g9"
            x1="279.6"
            y1="441.6"
            x2="256"
            y2="490.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".3" stop-color="#fecb52" stop-opacity="0" />
            <stop offset=".9" stop-color="#d22027" />
          </linearGradient>
          <linearGradient
            id="g10"
            x1="172.3"
            y1="383.5"
            x2="345.1"
            y2="319.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".5" stop-color="#fecb52" stop-opacity="0" />
            <stop offset=".9" stop-color="#d22027" />
          </linearGradient>
          <linearGradient
            id="g11"
            x1="507.6"
            y1="362.8"
            x2="368.1"
            y2="630.2"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fecb52" />
            <stop offset="1" stop-color="#ee4669" />
          </linearGradient>
        </defs>
        {/* <style>
		.s0 {{ fill: url(#g1) } }
		.s1 { opacity: .5;mix-blend-mode: multiply;fill: url(#g2) } 
		.s2 { fill: url(#g3) } 
		.s3 { opacity: .5;mix-blend-mode: multiply;fill: url(#g4) } 
		.s4 { fill: url(#g5) } 
		.s5 { opacity: .5;mix-blend-mode: multiply;fill: url(#g6) } 
		.s6 { fill: url(#g7) } 
		.s7 { fill: url(#g8) } 
		.s8 { opacity: .5;mix-blend-mode: multiply;fill: url(#g9) } 
		.s9 { opacity: .5;mix-blend-mode: multiply;fill: url(#g10) } 
		.s10 { fill: url(#g11) } 
	</style> */}
        <g id="OBJECTS">
          <g id="&lt;Group&gt;">
            <g id="&lt;Group&gt;">
              <path
                id="&lt;Path&gt;"
                fill={'url(#g1)'}
                d="m314.2 324.2h-48.6c-14.6 0.4-25.1-5.1-25.2-15.2q0-3 1-6.5c2.9-10.9 13.6-19 25.6-21.7 0 0-2.1-3.7-2.1-3.7-78.9-13.5-96.1 29.7-102.2 51.8-3.3 11.8-11.7 52.3 37.6 52.8h48.7q25.2 0 25.2 15.1 0 3-1.1 6.5-4.8 18.8-28 21.3c24.3-1.7 99.8-10.8 124.7-56.7 0.1-29.1-16.3-43.6-55.6-43.7z"
              />
              <path
                id="&lt;Path&gt;"
                opacity={0.5}
                mixBlendMode="multiply"
                fill={'url(#g2)'}
                d="m314.2 324.2h-48.6c-14.6 0.4-25.1-5.1-25.2-15.2q0-3 1-6.5c2.9-10.9 13.6-19 25.6-21.7 0 0-2.1-3.7-2.1-3.7-78.9-13.5-96.1 29.7-102.2 51.8-3.3 11.8-11.7 52.3 37.6 52.8h48.7q25.2 0 25.2 15.1 0 3-1.1 6.5-4.8 18.8-28 21.3c24.3-1.7 99.8-10.8 124.7-56.7 0.1-29.1-16.3-43.6-55.6-43.7z"
              />
              <path
                id="&lt;Path&gt;"
                fill={'url(#g3)'}
                d="m510.3 280.8c0 0-73.3-1.3-123.1 56.9l-10.3 38.7q0 0 0 0-1.1 3.5-2.1 7l-17.8 66.5c18.9-0.6 74.3-3.2 108.4-12.3 0 0-96.1 32.7-114.6 35.5l-0.2 0.6c-0.7 2.8 1.4 5.4 4.2 5.4h63.3c23 0 43.1-15.4 49.1-37.6"
              />
              <path
                id="&lt;Path&gt;"
                opacity={0.5}
                mixBlendMode="multiply"
                fill={'url(#g4)'}
                d="m393 337.7l-10.3 38.7q0.1 0 0.1 0-1.2 3.5-2.1 7l-17.9 66.5c18.9-0.6 74.3-3.2 108.4-12.3 0 0-96.1 32.7-114.6 35.5l-0.1 0.6c-0.8 2.8 1.3 5.4 4.1 5.4h63.4c22.9 0 43-15.4 49-37.6l15.7-58.4c0.5-1.9 2.2-3.2 4.1-3.2h64.6c23 0 43.1-15.5 49-37.7l3-11c0.7-2.8-1.3-5.4-4.2-5.4h-95.6c-2.8 0-4.9-2.7-4.2-5.4l5.9-21.9 0.9-3.3 1.2-4.3q0 0 0 0l2.7-10.1c0 0-73.2-1.3-123.1 56.9z"
              />
              <path
                id="&lt;Path&gt;"
                fill={'url(#g5)'}
                d="m299.2 226.7c-45.3 18.3-84 41.2-112.8 65.7 33.3-13.1 85.9-11.6 90.8-11.6h131l-15.2 56.9c49.9-58.2 123.1-56.9 123.1-56.9h94.4c17.7 0 33.3-11.9 37.9-29.1l6.7-25.2z"
              />
              <path
                id="&lt;Path&gt;"
                opacity={0.5}
                mixBlendMode="multiply"
                fill={'url(#g6)'}
                d="m299.2 226.7c-45.3 18.3-84 41.2-112.8 65.7 33.3-13.1 85.9-11.6 90.8-11.6h131l-15.2 56.9c49.9-58.2 123.1-56.9 123.1-56.9h94.4c17.7 0 33.3-11.9 37.9-29.1l6.7-25.2z"
              />
              <path
                id="&lt;Path&gt;"
                fill={'url(#g7)'}
                d="m237.5 425q4 0 7.6-0.4c-4.8 0.4-7.6 0.4-7.6 0.4z"
              />
              <path
                id="&lt;Path&gt;"
                fill={'url(#g9)'}
                d="m245.1 424.6q-3.6 0.4-7.6 0.4h-63.1c-29.7 0-56 17.9-67.4 44.6-1.9 4.5 1.4 9.5 6.3 9.5h156c47 0 80.2-23.5 92.9-70.7l3.7-13.9q3.9-14.8 3.9-26.6c-24.9 45.9-100.4 55-124.7 56.7z"
              />
              <path
                id="&lt;Path&gt;"
                opacity={0.5}
                mixBlendMode="multiply"
                fill={'url(#g10)'}
                d="m245.1 424.6q-3.6 0.4-7.6 0.4h-63.1c-29.7 0-56 17.9-67.4 44.6-1.9 4.5 1.4 9.5 6.3 9.5h156c47 0 80.2-23.5 92.9-70.7l3.7-13.9q3.9-14.8 3.9-26.6c-24.9 45.9-100.4 55-124.7 56.7z"
              />
              <path
                id="&lt;Path&gt;"
                opacity={0.5}
                mixBlendMode="multiply"
                fill={'url(#g4)'}
                d="m245.1 424.6q-3.6 0.4-7.6 0.4h-63.1c-29.7 0-56 17.9-67.4 44.6-1.9 4.5 1.4 9.5 6.3 9.5h156c47 0 80.2-23.5 92.9-70.7l3.7-13.9q3.9-14.8 3.9-26.6c-24.9 45.9-100.4 55-124.7 56.7z"
              />
              <path
                id="&lt;Path&gt;"
                fill={'url(#g11)'}
                d="m656.4 261.5q0-0.1 0-0.2c12.2 66.2-85.4 149.3-224.3 189-143.9 41.1-277.6 20-298.6-47.1-21-67.2 78.6-154.9 222.5-196 19.6-5.6 39-10.1 57.9-13.4-31.6 4.2-64.8 11-98.6 20.5-169 47.8-290.2 146.3-270.7 220.1 19.4 73.7 172.2 94.8 341.1 47.1 169-47.8 290.1-146.3 270.7-220z"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
} & BoxProps;

const useStyles = createStyles((theme) => ({
  root: {
    height: 30,
    [theme.fn.smallerThan('sm')]: {
      overflow: 'hidden',
      height: 45,
      width: 45,
    },
  },
  svg: {
    height: 30,
    [theme.fn.smallerThan('sm')]: {
      height: 45,
    },
  },
  c: {
    fill: theme.colorScheme === 'dark' ? theme.colors.dark[0] : '#111',
  },

  ivit: {
    fill: theme.colorScheme === 'dark' ? theme.colors.dark[0] : '#111',
  },

  ai: {
    fill: theme.colors.blue[8],
  },

  accent: {
    fill: theme.colors.blue[8],
  },

  text: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  badge: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));
