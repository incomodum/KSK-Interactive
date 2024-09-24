import { useState, useEffect, useRef } from "react"

// Define the type for the custom hook parameters
interface UseIncreaseNumberAnimationProps {
	endNumber: number
	speed?: number
}

// Custom Hook for Number Animation with types
const useIncreaseNumberAnimation = ({ endNumber, speed = 10 }: UseIncreaseNumberAnimationProps): number => {
	const [currentNumber, setCurrentNumber] = useState<number>(0)
	const animationRunningRef = useRef<boolean>(false)

	useEffect(() => {
		if (!animationRunningRef.current) {
			animationRunningRef.current = true
			incNbrRec(0)
		}

		function incNbrRec(number: number) {
			if (number <= endNumber) {
				setCurrentNumber(number)
				setTimeout(() => {
					incNbrRec(number + 1)
				}, speed)
			} else {
				animationRunningRef.current = false
			}
		}
	}, [endNumber, speed])

	return currentNumber
}

// Define the type for the component props
interface NumberAnimationProps {
	endNumber: number
	speed: number
}

// Example Component using the custom hook with types
const NumberAnimation: React.FC<NumberAnimationProps> = ({ endNumber, speed }) => {
	const currentNumber = useIncreaseNumberAnimation({ endNumber, speed })

	return <h1 className="text-2xl w-fit font-bold text-[#194E8D]">{currentNumber}</h1>
}

export default NumberAnimation
