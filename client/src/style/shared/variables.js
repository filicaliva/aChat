const blue = "#2d9cdb";
const orange = "#f2c94c";
const red = "#a22626";
const green = "#92a441";

const blue_shadow = "#5EC6D9";
const orange_shadow = "#FFDE79";
const red_shadow = "#CF5959";
const green_shadow = "#A7BE3F";

const shadow = "-5px 5px 2px";

const blue_box_shadow = `${shadow} ${blue_shadow}`;
const orange_box_shadow = `${shadow} ${orange_shadow}`;
const red_box_shadow = `${shadow} ${red_shadow}`;
const green_box_shadow = `${shadow} ${green_shadow}`;

const themeColor = `
&.blue {
  background: ${blue};
}
&.orange {
  background: ${orange};
}
&.red {
  background: ${red};
}
`
const themeColorShadow = `
&.blue {
  &:hover {
    box-shadow: ${blue_box_shadow};
  }
}
&.orange {
  &:hover {
    box-shadow: ${orange_box_shadow};
  }
}
&.red {
  &:hover {
    box-shadow: ${red_box_shadow};
  }
}
`

const transition = `transition: all 0.5s ease;`;

export {
  blue,
  orange,
  red,
  green,
  green_box_shadow,
  blue_box_shadow,
  orange_box_shadow,
  red_box_shadow,
  themeColor,
  themeColorShadow,
  transition
};
