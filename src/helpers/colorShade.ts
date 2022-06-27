export const colorShade = (color: string, darken: number) => {
  color = color?.replace(/^#/, '');
  if (color.length === 3)
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];

  let [r, g, b]: (string | number)[] = color.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + darken,
    parseInt(g, 16) + darken,
    parseInt(b, 16) + darken,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
};
