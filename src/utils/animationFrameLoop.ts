/**
 * create a loop that will call request animation frame
 * @param callback frameRequestCallback
 * @param step number of frames to skip before invoking callback, default is 0 (invoke every frame)
 * @returns a function when called will cancel the loop
 */

export default function animationFrameLoop(callback: FrameRequestCallback, step = 0): CancelLoopFunction {
	const msPerFrame = 1000 / 60;
	let prev = 0;
	let id = requestAnimationFrame(loop);

	function loop(timestamp: number) {
		id = requestAnimationFrame(loop);

		const elapsedFrames = (timestamp - prev) / msPerFrame;

		if (elapsedFrames >= step) {
			callback(timestamp);
			prev = timestamp;
		}
	}

	return () => cancelAnimationFrame(id);
}

type CancelLoopFunction = () => void;
