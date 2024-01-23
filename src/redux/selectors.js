export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectPage = state => state.cars.page;
export const selectIsModalOpen = state => state.cars.isModalOpen;
export const selectCar = state => state.cars.modal.car;
export const selectFavor = state => state.cars.favorite;
