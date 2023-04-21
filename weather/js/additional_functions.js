export function formatTime(time, timezone) {
    const currentTime = new Date();
    const userTimeZone = currentTime.getTimezoneOffset()*60;
    const processedTime = userTimeZone * 1000 + time * 1000 + timezone * 1000;
    const formatedtime = new Date(processedTime);
    const formatedHours = String(formatedtime.getHours()).padStart(2, '0');
    const formatedMinutes = String(formatedtime.getMinutes()).padStart(2, '0');
    const displaytime = `${formatedHours}:${formatedMinutes}`;
    return displaytime
}

export function forecast_format_Time (time) {;
    const x_Date = new Date(time);
    const options = {
        month: 'long',
        day: 'numeric',
    }
    const correctDate = x_Date.toLocaleDateString("en-US", options);
    const correctTime = `${String(x_Date.getHours()).padStart(2, '0')}:${String(x_Date.getMinutes()).padStart(2, '0')}`;
    return [correctDate, correctTime]
}