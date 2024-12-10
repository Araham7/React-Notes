// (2). The Image component displays an image with optional parameters for name, source, alt text, and width. It also renders JSX elements using the jsxToRender component.
import jsxToRender from "./Return-jsx.js"

const Image = ({ name="This is default name parameter" , src , alt="This is default alt parameter" , width="560" })=>{
    return(
        <>

        {/* `<jsxToRender> </jsxToRender>` : It will take jsx elements. */}
        <jsxToRender>
        <p>This is an Image of : <strong>{name}</strong></p>
        </jsxToRender>

        <img src={src} alt={alt} width={width}/>

        </>
    )
}

export default Image;
