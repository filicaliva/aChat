export interface ILocalStorage {
    theme: string;
    color: string;
    setTheme(theme: string): string;
    setColor(color: string): string;
    getTheme(): string | null;
    getColor(): string;
}

