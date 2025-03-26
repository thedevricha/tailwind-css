## tailwind-css
Tailwind CSS 4 Learning

## What is Tailwind CSS
1) CSS Framework
2) Almost no need to write different CSS
3) A lot of available classes for style
4) Every class has work for single utility
5) No need to override css
6) Fast development
7) Fast performance

## Better than other CSS Framework?
1) Its completely depend on the requirements
2) No framework is best until we do not know the requirements
3) But for performance and customizations, and saving time this is the one of the best framework

## Prerequisite of Tailwind CSS
Just basic understanding of HTML and CSS

## Required for Setup Tailwind CSS using CLI
1) Node
2) NPM

## VSCode extensions
1) Live Server => https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
=> Launch a development local Server with live reload feature for static & dynamic pages.
2) Tailwind CSS IntelliSense => https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
=> For Autocomplete, Linting, Hover Previews
3) Inline fold => https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold
=> A custom decorator that "fold" matching content in single line

## Learning Resources
1) Get started with Tailwind CSS => https://tailwindcss.com/docs/installation/tailwind-cli
2) CSS at-rule: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/At-rule
3) CSS at-rule: https://css-tricks.com/the-at-rules-of-css/
4) Tailwind Directives: https://tailwindcss.com/docs/functions-and-directives
5) Tailwind CSS Full Course for Beginners | Complete All-in-One Tutorial | 3 Hours =>  https://www.youtube.com/watch?v=lCxcTsOHrjo
6) Tailwind css tutorial Hindi => https://www.youtube.com/playlist?list=PL8p2I9GklV471sLqkGuf0eKAu9sVNmKFV

## Commands
1) **npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch**
=> For Compile Tailwind
2) **npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify**
=> Reduces file size in production.

## Setup for Efficiency
### ✅ Use a Config File (tailwind.config.js)
> Even though Tailwind 4 works without it, a config file allows customization and better performance.

👉 Example `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html", // Watch only necessary files
    "./src/**/*.js",
  ],
  theme: {
    extend: {}, // Extend Tailwind as needed
  },
  plugins: [],
};
```
✔️ Improves performance by limiting file watching.

## Tailwind Plugins
1) **npm install @tailwindcss/forms**
=> Improves the styling of form elements (`<input>`, `<select>`, `<textarea>`).  
    🔹 Add to `tailwind.config.js`:

    ```javascript
    module.exports = {
    plugins: [require("@tailwindcss/forms")],
    };
    ```

    🔹 Usage:

    ```html
    <input type="text" class="form-input border-gray-300 rounded-md">
    ```

2) **npm install @tailwindcss/typography**
=> Adds pre-styled typography classes for articles, blogs, and markdown content.  
   🔹 Add to `tailwind.config.js`:

    ```javascript
    module.exports = {
    plugins: [require("@tailwindcss/typography")],
    };
    ```

   🔹 Usage:

    ```html
    <article class="prose lg:prose-xl">
    <h1>Beautifully Styled Article</h1>
    <p>This text will be properly formatted.</p>
    </article>
    ```

3) **npm install @tailwindcss/aspect-ratio**
=> Helps maintain fixed aspect ratios (like 16:9, 4:3) for media elements.  
    🔹 Add to `tailwind.config.js`:

    ```javascript
    module.exports = {
    plugins: [require("@tailwindcss/aspect-ratio")],
    };
    ```

    🔹 Usage:
    ```html
    <div class="aspect-w-16 aspect-h-9">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
    </div>
    ```

    => Keeps videos and images properly scaled!

4) **npm install daisyui** (https://daisyui.com/)
=> DaisyUI provides ready-made buttons, forms, modals, alerts, etc.  
    🔹 Add to ``tailwind.config.js``:

    ```javascript
    module.exports = {
    plugins: [require("daisyui")],
    };
    ```

    🔹 Usage:
    ```html
    <button class="btn btn-primary">Click Me</button>
    ```

    => Saves time by providing well-designed components!

5) **npm install tailwindcss-debug-screens** (https://github.com/jorenvanhee/tailwindcss-debug-screens)
=> Shows the current screen size while resizing the window.  
    🔹 Add to `tailwind.config.js`:

    ```javascript
    module.exports = {
    plugins: [require("tailwindcss-debug-screens")],
    };
    ```

    🔹 Usage:
    ```html
    <div class="debug-screens">
    I'm responsive!
    </div>
    ```

    => Now it shows active screen size while resizing!