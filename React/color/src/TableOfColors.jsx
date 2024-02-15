const TableOfColors = () => {
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Spalva</th>
                    <th>Hex</th>
                    <th>Išsaugojimo data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <div className="w-[20px] h-[20px] bg-red-400"></div>
                    </td>
                    <td>#000000</td>
                    <td>2024-02-15</td>
                </tr>
            </tbody>
        </table>
    )
}