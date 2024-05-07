# Chrome Web Extension For Logic Injection

Change logic of DOM tree, inject to get the web-app data or any... with Chrome Extension.

## Use-case

Sometime, you open the website, you see something can collect/analyze automatically, or even you want to remove some
AdBlock warning popup.
Actually, you can click and do it manually, but why when we can let Chrome do it automatically.

## Install and run first

Firstly, you need to install to your Chrome Browser.

- Clone this repos into your local directory.
- Open Chrome Extension manager, or just click here: [chrome://extensions/](chrome://extensions/)
- Enable **Developer mode** by click on switcher at the top-right of your screen.
- Click **Load unpacked**, choose the repos folder.
- Your extension will be appeared in list.

## Add more logics

So, after you added it, nothing happen except the icon in the extension gallery, don't worry, just added new thing you
want.

Let's say we want to display Hello when we access my Github.

### 1. Add new interceptor file

![new-interceptor-file.png](/docs%2Fnew-interceptor-file.png)

### 2. Then draft your code

```javascript
// File: lib/interceptor/HelloworldInterceptor.js
function HelloworldInterceptor() {
    return {
        hostname: "github.com",
        paths: [
            "/cuongnv126"
        ],
        onIntercept: () => {
            setTimeout(() => {
                window.alert("Hi, welcome to my page!")
            }, 5000)
        }
    }
}
```

### 3. Add to `manifest.json` file and `content.js`

- File: manifest.json

![add-manifest.png](/docs%2Fadd-manifest.png)

- File: lib/content.js

![add-contentjs.png](/docs%2Fadd-contentjs.png)

## Reload and try
- Go to: [chrome://extensions/](chrome://extensions/)
- Click Reload icon in our extension card.
- Try to go to [https://github.com/cuongnv126](https://github.com/cuongnv126) and wait a few seconds.

## License

```
Copyright 2024 Cuong V. Nguyen (github.com/cuongnv126).

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```