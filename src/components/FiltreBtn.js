export const FiltreBtn1 = ({filtre, filterFunc}) => {
    return (<button onClick={() => filterFunc(filtre)}>{filtre}</button> )
}


export const FiltreBtn2 = ({children}) => {
    const handleClick = function (event) {
        const button = event.target;
        const parent = button.parentNode;
        console.log(parent.id)
    }
   return  <button onClick={handleClick}>{children}</button>
}
