import  React from "react"
export const PillSelector: React.FC = () => {
    const [pill, setPill] = React.useState('blue');
    return (
    <div>
        <button  onClick={() => setPill('red')}>Red pill</button>
        <br/>
        <br/>
        <button  onClick={() => setPill('blue')}>Blue pill</button>
        <br/>
        <br/>
        
        <button onClick={() => setPill("")}>Reset</button>
        {pill && <span>You chose {pill.toUpperCase()} pill!</span>}
    </div>);
}





