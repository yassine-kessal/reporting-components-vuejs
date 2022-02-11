var totalAgregates = 342484;

var deviceAgregates = [
  { key: "proxy", type: "2", value: 63358 },
  { key: "ipad", type: "1", value: 22 },
  { key: "ipad", type: "2", value: 837 },
  { key: "unknown", type: "1", value: 12 },
  { key: "unknown", type: "2", value: 48511 },
  { key: "other", type: "2", value: 3 },
  { key: "pc", type: "1", value: 1381 },
  { key: "pc", type: "2", value: 10237 },
  { key: "android", type: "1", value: 1528 },
  { key: "android", type: "2", value: 11312 },
  { key: "iphone", type: "1", value: 501 },
  { key: "iphone", type: "2", value: 6822 },
  { key: "ipod", type: "2", value: 2 },
  { key: "", type: "1", value: 37 },
];

var osFamilyAgregates = [
  { key: "Proxy", type: "2", value: 63358 },
  { key: "Unknown", type: "1", value: 12 },
  { key: "Unknown", type: "2", value: 48511 },
  { key: "Linux / Unix", type: "1", value: 30 },
  { key: "Linux / Unix", type: "2", value: 226 },
  { key: "Windows", type: "1", value: 1132 },
  { key: "Windows", type: "2", value: 4987 },
  { key: "Android", type: "1", value: 1528 },
  { key: "Android", type: "2", value: 11312 },
  { key: "OS X / iOS (Apple)", type: "1", value: 742 },
  { key: "OS X / iOS (Apple)", type: "2", value: 12688 },
  { key: "", type: "1", value: 37 },
];

var browserAgregates = [
  { key: "Nokia Browser (PDA/Phone browser)", type: "1", value: 6 },
  { key: "LG (PDA/Phone browser)", type: "1", value: 2 },
  { key: "LG (PDA/Phone browser)", type: "2", value: 10 },
  { key: "Nokia Browser (PDA/Phone browser)", type: "2", value: 27 },
  { key: "Google Image Proxy", type: "2", value: 60771 },
  { key: "Yahoo Mail Proxy", type: "2", value: 2587 },
  { key: "Java", type: "1", value: 10 },
  { key: "Java", type: "2", value: 6 },
  { key: "Samsung (PDA/Phone browser)", type: "1", value: 462 },
  { key: "default", type: "1", value: 49 },
  { key: "Internet Explorer", type: "2", value: 467 },
  { key: "Chrome", type: "1", value: 1947 },
  { key: "default", type: "2", value: 46220 },
  { key: "IE Mobile (Mobile browser)", type: "2", value: 3 },
  { key: "Chrome", type: "2", value: 13736 },
  { key: "Mozilla", type: "2", value: 945 },
  { key: "Firefox", type: "1", value: 289 },
  { key: "Firefox", type: "2", value: 846 },
  { key: "Real player or compatible (media player)", type: "2", value: 1 },
  { key: "Samsung (PDA/Phone browser)", type: "2", value: 137 },
  { key: "", type: "2", value: 86 },
  { key: "AppleWebKit", type: "1", value: 18 },
  { key: "Safari", type: "1", value: 659 },
  { key: "Microsoft Outlook", type: "2", value: 2632 },
  { key: "Safari", type: "2", value: 326 },
  { key: "AppleWebKit", type: "2", value: 12282 },
  { key: "", type: "1", value: 39 },
];

var osNameAgregates = [
  { key: "Android 10.0", type: "1", value: 349 },
  { key: "Android 10.0", type: "2", value: 2887 },
  { key: "Android 11.0", type: "1", value: 695 },
  { key: "Android 11.0", type: "2", value: 4534 },
  { key: "Android 12.0", type: "1", value: 98 },
  { key: "Android 12.0", type: "2", value: 997 },
  { key: "Android 4.4", type: "1", value: 1 },
  { key: "Android 4.4", type: "2", value: 16 },
  { key: "Android 5.0", type: "1", value: 1 },
  { key: "Android 5.0", type: "2", value: 19 },
  { key: "Android 5.1", type: "1", value: 3 },
  { key: "Android 5.1", type: "2", value: 44 },
  { key: "Android 6.0", type: "1", value: 13 },
  { key: "Android 6.0", type: "2", value: 81 },
  { key: "Android 7.0", type: "1", value: 31 },
  { key: "Android 7.0", type: "2", value: 247 },
  { key: "Android 7.1", type: "1", value: 7 },
  { key: "Android 7.1", type: "2", value: 84 },
  { key: "Android 8.0", type: "1", value: 66 },
  { key: "Android 8.0", type: "2", value: 615 },
  { key: "Android 8.1", type: "1", value: 33 },
  { key: "Android 8.1", type: "2", value: 323 },
  { key: "Android 9.0", type: "1", value: 211 },
  { key: "Android 9.0", type: "2", value: 1331 },
  { key: "Anonymous (Google)", type: "2", value: 60771 },
  { key: "Anonymous (Yahoo)", type: "2", value: 2587 },
  { key: "iOS 10.3", type: "1", value: 3 },
  { key: "iOS 10.3", type: "2", value: 100 },
  { key: "iOS 11.0", type: "1", value: 1 },
  { key: "iOS 11.0", type: "2", value: 3 },
  { key: "iOS 11.1", type: "2", value: 1 },
  { key: "iOS 11.2", type: "2", value: 8 },
  { key: "iOS 11.3", type: "1", value: 1 },
  { key: "iOS 11.3", type: "2", value: 5 },
  { key: "iOS 11.4", type: "2", value: 50 },
  { key: "iOS 12.0", type: "2", value: 3 },
  { key: "iOS 12.1", type: "2", value: 5 },
  { key: "iOS 12.2", type: "1", value: 2 },
  { key: "iOS 12.2", type: "2", value: 3 },
  { key: "iOS 12.3", type: "1", value: 1 },
  { key: "iOS 12.3", type: "2", value: 14 },
  { key: "iOS 12.4", type: "1", value: 1 },
  { key: "iOS 12.4", type: "2", value: 33 },
  { key: "iOS 12.5", type: "1", value: 20 },
  { key: "iOS 12.5", type: "2", value: 608 },
  { key: "iOS 13.1", type: "1", value: 1 },
  { key: "iOS 13.1", type: "2", value: 13 },
  { key: "iOS 13.2", type: "2", value: 6 },
  { key: "iOS 13.3", type: "1", value: 1 },
  { key: "iOS 13.3", type: "2", value: 95 },
  { key: "iOS 13.4", type: "1", value: 2 },
  { key: "iOS 13.4", type: "2", value: 28 },
  { key: "iOS 13.5", type: "1", value: 1 },
  { key: "iOS 13.5", type: "2", value: 54 },
  { key: "iOS 13.6", type: "1", value: 2 },
  { key: "iOS 13.6", type: "2", value: 108 },
  { key: "iOS 13.7", type: "2", value: 67 },
  { key: "iOS 14.0", type: "1", value: 1 },
  { key: "iOS 14.0", type: "2", value: 43 },
  { key: "iOS 14.1", type: "2", value: 37 },
  { key: "iOS 14.2", type: "1", value: 1 },
  { key: "iOS 14.2", type: "2", value: 119 },
  { key: "iOS 14.3", type: "2", value: 97 },
  { key: "iOS 14.4", type: "1", value: 13 },
  { key: "iOS 14.4", type: "2", value: 465 },
  { key: "iOS 14.5", type: "2", value: 65 },
  { key: "iOS 14.6", type: "1", value: 25 },
  { key: "iOS 14.6", type: "2", value: 475 },
  { key: "iOS 14.9", type: "1", value: 10 },
  { key: "iOS 14.9", type: "2", value: 984 },
  { key: "iOS 15.3", type: "1", value: 13 },
  { key: "iOS 15.3", type: "2", value: 39 },
  { key: "iOS 5.1", type: "2", value: 2 },
  { key: "iOS 7.0", type: "2", value: 1 },
  { key: "iOS 7.1", type: "2", value: 2 },
  { key: "iOS 8.3", type: "2", value: 1 },
  { key: "iOS 8.4", type: "2", value: 1 },
  { key: "iOS 9.3", type: "1", value: 2 },
  { key: "iOS 9.3", type: "2", value: 83 },
  { key: "iPadOS 13.2", type: "2", value: 1 },
  { key: "iPadOS 13.3", type: "2", value: 4 },
  { key: "iPadOS 13.4", type: "2", value: 1 },
  { key: "iPadOS 13.6", type: "2", value: 2 },
  { key: "iPadOS 13.7", type: "1", value: 1 },
  { key: "iPadOS 13.7", type: "2", value: 2 },
  { key: "iPadOS 14.0", type: "2", value: 1 },
  { key: "iPadOS 14.1", type: "2", value: 1 },
  { key: "iPadOS 14.3", type: "2", value: 1 },
  { key: "iPadOS 14.4", type: "2", value: 12 },
  { key: "iPadOS 14.5", type: "2", value: 1 },
  { key: "iPadOS 14.6", type: "2", value: 4 },
  { key: "iPadOS 14.7", type: "2", value: 17 },
  { key: "iPadOS 14.9", type: "1", value: 3 },
  { key: "iPadOS 14.9", type: "2", value: 29 },
  { key: "iPadOS 15.0", type: "2", value: 2 },
  { key: "iPadOS 15.1", type: "2", value: 13 },
  { key: "iPadOS 15.2", type: "1", value: 1 },
  { key: "iPadOS 15.2", type: "2", value: 21 },
  { key: "iPadOS 15.3", type: "2", value: 21 },
  { key: "Mac OS X", type: "1", value: 219 },
  { key: "Mac OS X", type: "2", value: 5027 },
  { key: "Unknown", type: "1", value: 12 },
  { key: "Unknown", type: "2", value: 48511 },
  { key: "Unknown Unix system", type: "1", value: 30 },
  { key: "Unknown Unix system", type: "2", value: 226 },
  { key: "Windows 10", type: "1", value: 954 },
  { key: "Windows 10", type: "2", value: 3809 },
  { key: "Windows 7", type: "1", value: 127 },
  { key: "Windows 7", type: "2", value: 447 },
  { key: "Windows 8.0", type: "1", value: 8 },
  { key: "Windows 8.0", type: "2", value: 507 },
  { key: "Windows 8.1", type: "1", value: 40 },
  { key: "Windows 8.1", type: "2", value: 206 },
  { key: "Windows Phone", type: "2", value: 3 },
  { key: "Windows Vista", type: "1", value: 3 },
  { key: "Windows Vista", type: "2", value: 15 },
  { key: "", type: "2", value: 4044 },
  { key: "", type: "1", value: 474 },
];
