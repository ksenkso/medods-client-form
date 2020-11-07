export const getGroups = () => new Promise((resolve) => {
    resolve([
        {value: 'vip', text: 'VIP'},
        {value: 'problem', text: 'Проблемные'},
        {value: 'oms', text: 'ОМС'},
    ]);
})
