const getConfiToken = () => {
return {
    headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
    }
}
}

export default getConfiToken