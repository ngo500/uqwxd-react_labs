//increase val each time button is clicked
const increment = (val) => {
    return {
        type : 'INCREMENT',
        inc : val
    }
}

export default increment;