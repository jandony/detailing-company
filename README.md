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

2. cd to react-src/src

3. Duplicate template repo into your new GitHUb repository

```
git clone --bare https://github.com/jandony/react-theme.git
cd react-theme.git
git push --mirror [new HTTPS repo link]
cd ..
rm -rf react-theme.git
```

4. Fork new repo to src folder

```
git clone https://github.com/jandony/second-project.git .
```

5. Make first commit to new repo from /src
