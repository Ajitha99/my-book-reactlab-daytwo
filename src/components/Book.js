function Book ( {title, image, description}){
    return(
        <div>
        <h1>{ title}</h1>
        <div className="divbook">
            <img src = { image} alt = "book" />
            <p> { description}</p></div>
        </div>
    )
}

export default Book;