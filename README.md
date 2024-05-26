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
