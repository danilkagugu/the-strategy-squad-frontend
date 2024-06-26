export const getWaterNorm = (gender, weight, timeActive) => {
	if (gender === 'Man') {
		const value = Number(weight) * 0.04 + Number(timeActive) * 0.6;
		return Math.round(value * 10) / 10;
	}
	const value = Number(weight) * 0.03 + Number(timeActive) * 0.4;
	return Math.round(value * 10) / 10;
};
