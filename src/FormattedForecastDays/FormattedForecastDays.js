

export default function FormattedForecastDays({ data }) {
    let date = new Date( data * 1000)
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

      return days[day];
}
