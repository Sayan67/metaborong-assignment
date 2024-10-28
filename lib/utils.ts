export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(date).replace(", ", " - ");
}