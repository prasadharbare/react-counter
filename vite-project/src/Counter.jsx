import react from "react";

function Counter() {
    const handleClick = () => {
        console.log("hey");
    };
        
    return (
        <div className="flex gap-2 text-4xl">
            <button className="py-1 px-2 rounded-xl bg-zinc-600"></button>
            <button className="btn" onClick={() => console.log("hey")}>
                -
            </button>
            <p>5</p>
            <button className="btn">+</button>
        </div>
    );
}

export default Counter;