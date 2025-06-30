export const ListPage = () => {
    const list = [
        "Mosh",
        "David",
        "Baruch",
        "Ruth",
        "Anna"
    ]

    return (
        <div>
            <h2>List page</h2>
            <ul>
                {list.map((name) => <li>{name}</li>)}
            </ul>
        </div>
    )
}