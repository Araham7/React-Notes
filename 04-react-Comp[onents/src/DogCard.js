// (1). If you want to return only one element from the react component we would not use () after return:
// function DogCard() {
//     return <h3> Safed Dog! </h3>
// }

// (2). If you want to return more than one element from the react component we would use () after return:
// function DogCard() {
//     return (
//         <>
//             <h3>Safed Dog!</h3>
//             <img src="https://image.petmd.com/files/inline-images/white-dogs-westie.jpg?VersionId=RbO0AT6IVBlve.3WVLNIuv3ZDNjHYN9L" height={100} />
//         </>
//     )
// }

// (3). Same folder me upasthit component ko , usi folder me upasthit dusre component se return karna
function Image() {
    return(
        <img src="https://image.petmd.com/files/inline-images/white-dogs-westie.jpg?VersionId=RbO0AT6IVBlve.3WVLNIuv3ZDNjHYN9L" width={250}/>
    )
}

function DogCard() {
    return(
        <>
        <h3>Dog image</h3>
        <Image/>
        <Image/>
        </>
    )
}

export default DogCard;