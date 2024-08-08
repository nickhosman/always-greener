export default function Option({ image, name }) {
    return (
        <div className="relative w-full max-w-96">
            <img className="rounded-3xl h-72 w-full object-cover brightness-75" src={image} alt={name} />
            <h3 className="absolute min-w-60 bottom-10 box-border p-4 text-white">{name}</h3>
        </div>
    )
}
