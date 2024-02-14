export function formatDate(date: Date): string {
    const format = date.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short',
        weekday: 'long'
    })

    return format
}