function ToDoList( { todos,ontodoDelete } ){
    const onDelete = function(index){
        ontodoDelete(index);
    }
    return(
        <>
            <table align="center" border="1" cellPadding={15} cellSpacing={0} width="90%">
                <thead>
                    <tr align="center">
                        <th>SNO</th>
                        <th>To-Do item</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(function(todo,index){
                            return(
                                <tr align="center" key={index}>
                                    <td>{index+1}</td>
                                    <td>{todo}</td>
                                    <td><button onClick={() => ontodoDelete(index)}>delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}
export default ToDoList;