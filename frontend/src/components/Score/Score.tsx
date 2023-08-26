interface ScoreProps {
    moves: number;
    matches: number;
}

function Score({ moves, matches }: ScoreProps) {
    return (
        <div id="score" className="border-3 border-white bg-blue-200 rounded-10 w-14 h-14 p-1 text-center text-black shadow-md hover:scale-105 flex flex-col justify-center items-center">
            <p className="text-xs">Moves: {moves}</p>
            <p className="text-xs">Matches: {matches}</p>
        </div>
    );
}

export default Score;

