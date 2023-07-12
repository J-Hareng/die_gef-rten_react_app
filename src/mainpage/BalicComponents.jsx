export default function Header({cusnav, user}){
        let name = user
        
    return(
        <header>
            <p>Welcome! {name}</p>
            {cusnav}
        </header>
    ); 
}
