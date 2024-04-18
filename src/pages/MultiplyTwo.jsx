import { useParams } from "react-router-dom";
const MultiplyTwo = () => {
    const { number } = useParams()
    return <span>Result: {parseFloat(number) ? parseFloat(number) * 2 : "Not a number"}</span>
}
export default MultiplyTwo;