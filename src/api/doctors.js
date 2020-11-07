export const getDoctors = () => new Promise((resolve) => {
    resolve([
        {value: '1', text: 'Иванов'},
        {value: '2', text: 'Захаров'},
        {value: '3', text: 'Чернышева'}
    ]);
})
