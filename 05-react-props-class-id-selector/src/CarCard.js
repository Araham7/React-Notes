// Using destructured props in function parameters :---

const CarImage = ({ src, width, alt }) => {
    return (
        <img src={src} width={width} alt={alt} />
    );
}; 

const CarCard = ({ name, color, price, src, width, alt }) => {
    return (
        <>
            <h1>Car NAME: {name}</h1>
            <CarImage src={src} width={width} alt={alt} />
            <p>
                The color of this <strong>{name}</strong> car is <strong>{color}</strong> and the price of this <strong>{name}</strong> car is <strong>{price}</strong>.
            </p>
        </>
    );
};

export default CarCard;
