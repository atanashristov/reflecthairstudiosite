# reflecthairstudio

## Development

To build the site run: `npm run build`

To watch and build the site run: `npm run watch`

In VS Code install extensions "PostCSS Language Support" and "Tailwind CSS IntelliSense".

In VS Code open the `index.html`, right click and run "Open with Live Server".

It will open the page in the web browser and we have now environment that shows automatically any changes in html and css.

## Icons

Using [iconify with tailwindcss](https://iconify.design/docs/usage/css/tailwind/)

Install iconfly [Phosphor](https://phosphoricons.com/) icons with:

```sh
npm i -D @iconify/tailwind @iconify-json/ph
```

Add a `ph-` icon to the html.

```html
<span class="icon-[ph--alarm-duotone]">
```

Note: the list of iconfly font collections can be seen here: [Iconfly font collections list](https://github.com/iconify/icon-sets/blob/master/collections.md)

## Google fonts

Find font that you link and click on "Download" to see the [embed code](https://fonts.google.com/selection/embed).

Example with `Roboto Condensed`:

```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
```

Extend the font family in `tailwind.config.js` file:

```json
  theme: {
    extend: {
      fontFamily: {
        "roboto-condensed": ['Roboto Condensed', 'sans-serif']
      },
   ...
```

You can use now `font-roboto-condensed` class.

See [here](https://www.geeksforgeeks.org/how-to-use-google-fonts-in-tailwind-css/).

## Text shadow

Add to the `tailwind.config.js` theme and plugin function:

```json
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    })
...
```

Then you can apply like: `text-shadow-sm shadow-gray-400`.

See [blog](https://www.hyperui.dev/blog/text-shadow-with-tailwindcss).
