# (A). To run the react app:
```bash
npm start
```
<hr>

# (B). `return jsx as a props`

## `Return-jsx.js`: Ye wo function hai jo `jsxToRender` component me aaye `jsx` ko return karega.(ye ashlime curly hi hai.)
```jsx

// (1) Using props in function parameter:
function jsxToRender({ children }) {
    return (
        <>
            {children}
        </>
    );
}

export default jsxToRender;

```

## `Image.js`: Is function mein hum log `Image` component aur `jsxToRender` component ko render karein.
```jsx

// (2). The Image component displays an image with optional parameters for name, source, alt text, and width. It also renders JSX elements using the jsxToRender component.
import jsxToRender from "./Return-jsx.js";

const Image = ({ name = "This is default name parameter", src, alt = "This is default alt parameter", width = "560" }) => {
    return (
        <>
            {/* `<jsxToRender> </jsxToRender>` : It will take jsx elements. */}
            <jsxToRender>
                <p>This is an Image of: <strong>{name}</strong></p>
            </jsxToRender>

            <img src={src} alt={alt} width={width} />
        </>
    );
}

export default Image;

```