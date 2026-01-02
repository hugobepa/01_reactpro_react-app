install proyecto, terminal: npx create-react-app ./ --template typescript

install en proyecto,terminal: npm install react-router-dom@6

```
9 vulnerabilities (3 moderate, 6 high)

```

https://github.com/facebook/create-react-app/issues/11174

package.json:

```

  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "^5.0.1",
  }

Take react-scripts and move it to devDependencies (if you don't have it, create it):

  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "react-scripts": "^5.0.1"
  },
```

solucion issues,terminal: npm audit --production

terminal: npm start
