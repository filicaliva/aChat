export interface ILocalStorage {
    setOption(text: string, value: any): any;
    getLocalAccess(text: string): boolean;
    getState(name: string): any;
}

