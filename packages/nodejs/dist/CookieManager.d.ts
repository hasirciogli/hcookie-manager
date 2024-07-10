export declare class CookieManager {
    /**
     * @type {Object.<string, string>}
     */
    cookies: {
        [key: string]: string;
    };
    /**
     *
     */
    constructor();
    /**
     *
     * @param {String} cookies
     */
    processCookies(cookies: string): void;
    /**
     *
     * @returns {String}
     */
    readyCookies(): string;
    /**
     *
     * @param {string} name
     * @param {string} value
     */
    setCookie(name: string, value: string): void;
    /**
     *
     * @param {string} name
     * @returns string
     */
    getCookie(name: string): string;
}
