type PropsType={
    Cars:CarsType[]
}

type CarsType={
    manufacturer:string
    model:string
}


export const Cars = (props:PropsType)=>{
   
        return(
            <div>
               <table>
                   {props.Cars.map((el:CarsType)=>{
                    return(
                        <tr key={el.model}>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                   })} 
               </table>
            </div>
        )
    

}