const arr = [1, 2, 3, 4, 5]

const newArr = arr.reduce((acc, item) => {
    acc.push(acc + item)
    return acc
}, [])


console.log({ newArr });