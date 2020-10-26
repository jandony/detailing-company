# React WordPress Template

This is a WordPress template that will be used for React based projects that would like to use the WordPress CMS.

## Installation - Theme

1. Download & Install WordPress
2. Setup local or live server
3. Install react wptheme (inside "themes" folder)

```
npx create-react-wptheme [theme-name]
```

4. View [theme-name] listed under Appearance (Broken Themes) in Admin Panel
5. In terminal, cd into react-src

```
cd [theme-name]/react-src
```

6. Start Dev Mode

```
npm run wpstart
```

7. Activate theme & view in Browser
8. Run Dev Mode again (Hint: You should see the rotating react logo)
9. Render "Hello World" to the DOM
10. Continue to **Installation - React Setup**

## Installation - React Setup

1. Add dependency snippet to package.json file, inside react-src folder

```
"dependencies": {
        "@devloco/react-scripts-wptheme": "3.4.1-wp.1",
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.5.0",
        "@testing-library/user-event": "^7.2.1",
        "node-sass": "^4.14.1",
        "react": "^16.14.0",
        "react-dom": "^16.14.0",
        "react-router-dom": "^5.2.0"
    },
```

2. cd to react-src

3. Type in this command:

```
git clone [github repo url]/src
```
