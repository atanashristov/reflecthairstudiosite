# reflecthairstudio

## Development

### Watch

To watch and build the site run: `npm run watch`.

In VS Code install extensions "PostCSS Language Support" and "Tailwind CSS IntelliSense".

In VS Code open the `index.html`, right click and run "Open with Live Server".

It will open the page in the web browser and we have now environment that shows automatically any changes in html and css.

### Build

To build the site run: `npm run build`.

Serve for example with static-server:

```bash
npm -g install static-server
static-server
```

, or with python `py -m http.server 8000` for example.

## Google Ads

Conversions:

| Conversion name                | GA4 Event                           |
| ------------------------------ | ----------------------------------- |
| book_appointment_menu_mobile   | conversion_event_book_appointment_2 |
| book_appointment_menu_desktop  | conversion_event_book_appointment_3 |
| book_appointment_hero_button   | conversion_event_book_appointment_4 |
| book_appointment_footer_button | conversion_event_book_appointment_5 |
| contact_footer_phone           | conversion_event_phone_call_lead    |
| contact_footer_email           | conversion_event_contact            |
| contact_footer_maps            | conversion_event_get_directions     |
