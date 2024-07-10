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
        if (cookies) {
            cookies.split(";").forEach((cookie) => {
                const [name, value] = cookie.split("=");
                this.cookies[name.trim()] = value.trim();
            });
        }
    }
    /**
     *
     * @returns {String}
     */
    readyCookies() {
        return Object.keys(this.cookies)
            .map((name) => `${name}=${this.cookies[name]}`)
            .join(";");
    }
    /**
     *
     * @param {string} name
     * @param {string} value
     */
    setCookie(name, value) {
        this.cookies[name] = value;
    }
    /**
     *
     * @param {string} name
     * @returns string
     */
    getCookie(name) {
        return this.cookies[name];
    }
}
exports.CookieManager = CookieManager;
