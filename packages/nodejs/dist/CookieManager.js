"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieManager = void 0;
class CookieManager {
    /**
     *
     */
    constructor() {
        /**
         * @type {Object.<string, string>}
         */
        this.cookies = {};
        this.cookies = {};
    }
    // Process the cookies and store them in the current cookies object. If a cookie is not found, it will be created. If a cookie is found, it will be updated.
    /**
     *
     * @param {String} cookies
     */
    processCookies(cookies) {
        // Cookies: cookie1=value1; Path=/; HttpOnly, cookie2=value2; Path=/; Secur, encode and decode
        if (cookies) {
            cookies.split(",").forEach((cookie) => {
                const parts = cookie.split("=");
                this.cookies[decodeURIComponent(parts[0].trim())] = decodeURIComponent(parts[1].trim());
            });
        }
    }
    /**
     *
     * @returns {String}
     */
    readyCookies() {
        return Object.keys(this.cookies)
            .map((name) => `${encodeURIComponent(name)}=${encodeURIComponent(this.cookies[name])}`)
            .join(";");
    }
    /**
     *
     * @param {string} name
     * @param {string} value
     */
    setCookie(name, value) {
        this.cookies[encodeURIComponent(name)] = encodeURIComponent(value);
    }
    /**
     *
     * @param {string} name
     * @returns string
     */
    getCookie(name) {
        return this.cookies[decodeURIComponent(name)];
    }
}
exports.CookieManager = CookieManager;
