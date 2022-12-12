export function Button({ value, state }) {

    function changeValue() {
        state(prev => {
            const valueToArray = prev.toString().split('');
            const valueLength = valueToArray.length;
            const lastValue = valueToArray[valueLength-1];
            const operators = [".", "+", "-", "*", "/", "%"];            

            if (valueLength > 10 && value !== "C" && typeof value !== "object") return prev;
            if (prev === "0") prev = "";
            if (value === "C") return "";
            if (value === "÷") value = "/";
            if (value === "x") value = "*";
            if (typeof value === "object") return valueToArray.splice(0, valueLength-1).join('');
            if (value === "=") {
                try {
                    return eval(prev);
                } catch (error) {
                    alert("operação inválida")
                    return prev;
                }
            };

            if (!(operators.includes(value) && operators.includes(lastValue))) return prev + value;
            else return valueToArray.splice(0, valueLength-1).join('') + value;
        });
    }

    return (
        /[\.\+\-\x\÷\%\=\C]/g.test(value) ?
        <button
            className="w-button h-button rounded-full shadow-button bg-slate-100 font-calc text-button text-orange-500"
            onClick={changeValue}>
            {value}
        </button> :
        value === "0" ?
        <button
            className="w-zero h-button rounded-full shadow-button bg-slate-100 font-calc text-button"
            onClick={changeValue}> 
            {value}
        </button> :
        <button
            className="w-button h-button rounded-full shadow-button bg-slate-100 font-calc text-button"
            onClick={changeValue}> 
            {value}
        </button>
    );
};