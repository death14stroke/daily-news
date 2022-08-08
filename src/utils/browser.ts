import * as WebBrowser from 'expo-web-browser';

export const openUrlInApp = (url: string) => WebBrowser.openBrowserAsync(url);
