export const selectWaterPerDay = (state) => state.water.items.perDay;

export const selectWaterPerMonth = (state) => state.water.items.perMonth;

export const selectIsLoading = (state) => state.water.isLoading;

export const selectError = (state) => state.water.error;
