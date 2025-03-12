export const InputInfoReducer = (prevState, action) => {
	if (action.type === 'TITLE_CHANGE') {
		return {
			...prevState,
			title: action.value,
		}
	}
	if (action.type === 'DATE_CHANGE') {
		return {
			...prevState,
			date: action.value,
		}
	}
	if (action.type === 'RESET') {
		return {
			title: '',
			date: '',
			id: null,
		}
	}
	return prevState
}
