const isRestaurantOpenHelper = () => {
    const date = new Date()
    const hours = date.getHours()

    return hours >= 18 && hours < 22
}

export default isRestaurantOpenHelper
