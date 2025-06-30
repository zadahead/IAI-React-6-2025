export const ListPage = () => {
    const list = [
        "Mosh",
        "David",
        "Baruch",
        "Ruth",
        "Anna"
    ]

    const handleClick = (name) => {
        console.log(name)
    }

    return (
        <div>
            <h2>List page</h2>
            <ul>
                {list.map((name) => <li onClick={() => handleClick(name)}>{name}</li>)}
            </ul>
        </div>
    )
}