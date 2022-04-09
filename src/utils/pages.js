export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}
export const getPagesArray = totalCount => {
    const pagesArray = []
    for (let i = 0; i < totalCount; i++)
        pagesArray.push(i + 1)
    return pagesArray
}