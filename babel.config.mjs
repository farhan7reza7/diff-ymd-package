/*module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ];

  return {
    presets,
  };
};
*/
export default async function () {
  return {
    presets: [
      // your presets here
      [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ],
    plugins: [
      // your plugins here
    ],
  };
}
