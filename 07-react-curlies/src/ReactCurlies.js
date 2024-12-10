const MyName = "Araham";
const title = "This is title.";

const ReactCurly = ()=>{
    return(
        <>
        {/* Adding styling using inline css in Jsx: */}
        <h1 style={ { fontSize:20, color: "yellowgreen", border: "2 solid black" } }> { title } </h1>
        <p>Hello, <strong>{MyName}</strong>!</p>
        </>
    )
}

export default ReactCurly;