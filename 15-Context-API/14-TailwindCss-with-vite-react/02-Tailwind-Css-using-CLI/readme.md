# (1). run this command in the terminal : 
```
npm install -D tailwindcss
npx tailwindcss init
```

# (2). create folder => `dist` inside the folder create files : `index.html` and `style.css`.

# (3). create folder => `src` inside the folder create file : `input.css`.

# (4). save these three files in `input.css` :---
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# (5). run this command in terminal :---

```
npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
```

# (6). After running the above command in the terminal , ab agar humlog `dist` folder ke `index.html` file me `class ka use karke css` lagane ki kosis karenge to `tailwind.config.js` hame suggation dene lagega `index.html` file me.

# (7). gab bhi kabhi aap logon ko css class ka use karke tailwind-css inject karna parega to aaplog hamesha sabse pehle ye(niche-wale) command ko run kar dijiye ga taki css aut generate hoata rahe :---
```
npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
```

