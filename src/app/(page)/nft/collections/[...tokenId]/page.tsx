interface props {
    params:{
        token :string
    }
}

export const A:React.FC<props> = ({params}) =>{
    console.log(params)
    return <></>
}