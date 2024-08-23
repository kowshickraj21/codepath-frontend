export function getToken(name: string): string | null {
    return localStorage.getItem(name);
}

export function delelteToken(name: string): void {
    localStorage.removeItem(name);
}