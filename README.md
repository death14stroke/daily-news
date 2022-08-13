# daily-news

News application using React Native and News API in Express JS. Made with bare workflow and fully compatible on Android and iOS. Get daily highlights or search through upto 7 different categories of news and top sources avaiable for top countries in the world.

## See also

-   Server code: https://github.com/Death14Stroke/daily-news-server
-   UX inspired: https://www.behance.net/gallery/102996435/News-App-Design?tracking_source=search_projects_recommended%7Cnews%20app%20mobile

## Build Android apk

```
npx mkdirp android/app/src/main/assets/ && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

Alternatively, [download]("/outputs/daily-news-release.apk") the apk.

## Outputs

|                                                                                             |                                                                                                             |     |
| :-----------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: | :-: |
|     <img src="outputs/home.png" width="250" height="500"><br>View top headlines easily      |   <img src="outputs/discover.png" width="250" height="500"><br>Discover sources for various kinds of news   |
| <img src="outputs/search_for_news.gif" width="250" height="500"><br>Search news by keywords |     <img src="outputs/bookmarks.png" width="250" height="500"><br>Bookmarks news to read later offline      |
|         <img src="outputs/read_news.png" width="250" height="500"><br> Read details         |        <img src="outputs/switch_dark_mode.png" width="250" height="500"><br>Customize look and feel         |
|   <img src="outputs/choose_country.png" width="250" height="500"><br>Select your country    |  <img src="outputs/home_dark.png" width="250" height="500"><br> Catch up highlights of the day before bed   |
|  <img src="outputs/read_news_dark.gif" width="250" height="500"><br>Dark mode for reading   |            <img src="outputs/view_sources.png" width="250" height="500"><br>View sources in-app             |
|  <img src="outputs/splashscreen.gif" width="250" height="500"><br>Attractive splash screen  | <img src="outputs/skeleton_loading.gif" width="250" height="500"><br>Modern skeleton loader for both themes |
