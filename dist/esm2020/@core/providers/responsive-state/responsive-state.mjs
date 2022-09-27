/**
 * @name responsive-state
 * @description Core responsive state provider in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { defaultIfEmpty } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { REG_TABLETS, REG_MOBILES, REG_SMARTS_TV, REG_BROWSERS, REG_SORT_NAMES, REG_GAME_DEVICES, REG_BOTS, REG_OS, REG_WINDOWS_OS_VERSION, REG_LINUX_OS, USER_AGENT, REG_IE_VERSIONS, TABLET, WINDOWS_OS, LINUX_OS, MOBILE, IE_VERSIONS } from '../../constants';
import * as i0 from "@angular/core";
import * as i1 from "../platform-service/platform.service";
import * as i2 from "../responsive-config/responsive-config";
export class ResponsiveState {
    constructor(platformService, _responsiveConfig) {
        this._responsiveConfig = _responsiveConfig;
        this._windows = {};
        this._window = null;
        this._screenWidth = null;
        this._screenHeight = null;
        this._userAgent = null;
        this.isEnabledForPlatform = null;
        this._forceRefresh$ = new BehaviorSubject(null);
        this.isEnabledForPlatform = platformService.isEnabledForPlatform();
        this._window = (this.isEnabledForPlatform) ? window : null;
        this._screenWidth = (this.isEnabledForPlatform) ? this._window.screen.width : 0;
        this._screenHeight = (this.isEnabledForPlatform) ? this._window.screen.height : 0;
        this._userAgent = (this.isEnabledForPlatform) ? this._window.navigator.userAgent.toLowerCase() : null;
        if (this.isEnabledForPlatform) {
            const _resize$ = combineLatest(fromEvent(this._window, 'resize').pipe(debounceTime(this._responsiveConfig.config.debounceTime), defaultIfEmpty(undefined), startWith(this.getWidth('window'))), this._forceRefresh$).pipe(debounceTime(this._responsiveConfig.config.debounceTime));
            const _pixelRatio$ = fromEvent(this._window, 'onload')
                .pipe(defaultIfEmpty(undefined), startWith(this.getDevicePixelRatio()));
            const _device$ = fromEvent(this._window, 'onload')
                .pipe(defaultIfEmpty(undefined), startWith(this.getUserAgent()));
            const _userAgent$ = fromEvent(this._window, 'onload')
                .pipe(defaultIfEmpty(undefined), startWith(this.userAgentData()));
            const _orientation$ = fromEvent(this._window, 'orientationchange')
                .pipe(defaultIfEmpty(undefined), startWith(this.getOrientation()));
            this.elemento$ = _resize$.pipe(map(this.sizeOperations.bind(this)));
            this.ancho$ = _resize$.pipe(map(this.sizeObserver.bind(this)));
            this.browser$ = _device$.pipe(map(this.browserName.bind(this)));
            this.pixel$ = _pixelRatio$.pipe(map(this.pixelRatio.bind(this)));
            this.device$ = _device$.pipe(map(this.deviceDetection.bind(this)));
            this.orientation$ = _orientation$.pipe(map(this.orientationDevice.bind(this)));
            this.standard$ = _device$.pipe(map(this.standardDevices.bind(this)));
            this.ieVersion$ = _device$.pipe(map(this.ieVersionDetect.bind(this)));
            this.userAgent$ = _userAgent$.pipe(map(this.userAgentData.bind(this)));
        }
    }
    forceRefresh() {
        this._forceRefresh$.next(null);
    }
    /**
    * @name registerWindow
    * @param rw
    * @param _window
    */
    registerWindow(rw, _window = null) {
        if (rw.name && !this._windows[rw.name]) {
            this._windows[rw.name] = rw;
            if (_window !== null) {
                _window.dispatchEvent(new Event('resize'));
            }
        }
    }
    /**
    * @name unregisterWindow
    * @param rw
    * @param _window
    */
    unregisterWindow(rw, _window = null) {
        for (const rwn in this._windows) {
            if (this._windows[rwn] === rw) {
                delete (this._windows[rwn]);
            }
        }
        if (_window !== null) {
            _window.dispatchEvent(new Event('resize'));
        }
    }
    /**
    * @name getWidth
    * @param windowName
    */
    getWidth(windowName = null) {
        if (this._windows !== null && this.isEnabledForPlatform) {
            if (windowName && this._windows[windowName]) {
                return this._windows[windowName].getWidth();
            }
            else {
                return this._window.innerWidth;
            }
        }
        return 0;
    }
    /**
    * @name getDevicePixelRatio
    */
    getDevicePixelRatio() {
        let ratio = 1;
        if (this.isEnabledForPlatform) {
            if (typeof this._window.screen.systemXDPI !== 'undefined' &&
                typeof this._window.screen.logicalXDPI !== 'undefined' &&
                this._window.screen.systemXDPI > this._window.screen.logicalXDPI) {
                ratio = this._window.screen.systemXDPI / this._window.screen.logicalXDPI;
            }
            else if (typeof this._window.devicePixelRatio !== 'undefined') {
                ratio = this._window.devicePixelRatio;
            }
        }
        return ratio;
    }
    /**
    * @name getOrientation
    */
    getOrientation() {
        return (this.isEnabledForPlatform) ? window.orientation : null;
    }
    /**
    * @name sizeObserver
    */
    sizeObserver() {
        return (this._windows !== null && this.isEnabledForPlatform) ? this.getWidth('window') : 0;
    }
    /**
     * @name sizeOperations
     */
    sizeOperations() {
        let _sizes = null;
        const _breackpoints = this._responsiveConfig.config.breakPoints;
        if (this._windows !== null && this.isEnabledForPlatform && _breackpoints !== null) {
            const _width = this.getWidth('window');
            if (_breackpoints.xl.min <= _width) {
                _sizes = 'xl';
            }
            else if (_breackpoints.lg.max >= _width && _breackpoints.lg.min <= _width) {
                _sizes = 'lg';
            }
            else if (_breackpoints.md.max >= _width && _breackpoints.md.min <= _width) {
                _sizes = 'md';
            }
            else if (_breackpoints.sm.max >= _width && _breackpoints.sm.min <= _width) {
                _sizes = 'sm';
            }
            else if (_breackpoints.xs.max >= _width) {
                _sizes = 'xs';
            }
        }
        return _sizes;
    }
    /**
     * @name sizeOperations
     */
    pixelRatio() {
        let _pixelRatio = null;
        if (this.isEnabledForPlatform && this._screenWidth !== 0 && this._screenHeight !== 0) {
            if (this.testIs4k()) {
                _pixelRatio = '4k';
            }
            else if (this.getDevicePixelRatio() > 1) {
                _pixelRatio = 'retina';
            }
            else if (this.getDevicePixelRatio() === 1) {
                _pixelRatio = '1x';
            }
        }
        return _pixelRatio;
    }
    /**
     * @name testIs4k
     * @param screenHeight
     * @param screenWidth
     */
    testIs4k() {
        return (this._screenHeight !== 0 && this._screenWidth !== 0) ?
            ((this._screenHeight < this._screenWidth) ? (this._screenWidth > 3839) : (this._screenHeight > 3839)) : false;
    }
    /**
     * @name orientationDevice
     */
    orientationDevice() {
        let _orientationDevice = null;
        if (this.isEnabledForPlatform) {
            if (this.isMobile() || this.isTablet()) {
                if (this._window.innerHeight > this._window.innerWidth) {
                    _orientationDevice = 'portrait';
                }
                else {
                    _orientationDevice = 'landscape';
                }
            }
            else if (this.isSMART() || this.isDesktop()) {
                _orientationDevice = 'landscape';
            }
        }
        return _orientationDevice;
    }
    /**
     * @name getUserAgent
     */
    getUserAgent() {
        return (this.isEnabledForPlatform) ? this._window.navigator.userAgent.toLowerCase() : null;
    }
    /**
     * @name userAgentData
     */
    userAgentData() {
        if (this._window === null) {
            return USER_AGENT;
        }
        const DEFAULT_USER_AGENT_VALUE = '';
        const _ieVersionState = (this.ieVersionDetect() !== null);
        const _isGameDevice = this.isGameDevice();
        const _isSMART = this.isSMART();
        const _isDesktop = this.isDesktop();
        const _isTablet = this.isTablet();
        const _isMobile = this.isMobile();
        const _isWindows = this.isWindows();
        const _isLinux = this.isLinux();
        return {
            device: this.deviceDetection(),
            browser: this.browserName(),
            pixelratio: this.pixelRatio(),
            ie_version: {
                name: (_ieVersionState) ? this.ieVersionDetect() : DEFAULT_USER_AGENT_VALUE,
                state: _ieVersionState
            },
            game_device: {
                name: (_isGameDevice) ? this.gameDevices() : DEFAULT_USER_AGENT_VALUE,
                state: _isGameDevice
            },
            smart_tv: {
                name: (_isSMART) ? this.smartTv() : DEFAULT_USER_AGENT_VALUE,
                state: _isSMART
            },
            desktop: {
                name: (_isDesktop) ? this.desktop() : DEFAULT_USER_AGENT_VALUE,
                state: _isDesktop
            },
            tablet: {
                name: (_isTablet) ? this.tablet() : DEFAULT_USER_AGENT_VALUE,
                state: _isTablet
            },
            mobile: {
                name: (_isMobile) ? this.mobile() : DEFAULT_USER_AGENT_VALUE,
                state: _isMobile
            },
            window_os: {
                name: (_isWindows) ? this.windows() : DEFAULT_USER_AGENT_VALUE,
                state: _isWindows
            },
            linux_os: {
                name: (_isLinux) ? this.linux() : DEFAULT_USER_AGENT_VALUE,
                state: _isLinux
            },
            bot: this.isBot()
        };
    }
    /**
     * @name deviceDetection
     */
    deviceDetection() {
        if (this.isEnabledForPlatform) {
            if (this.isMobile()) {
                return 'mobile';
            }
            else if (this.isTablet()) {
                return 'tablet';
            }
            else if (this.isSMART()) {
                return 'smarttv';
            }
            else if (this.isDesktop()) {
                return 'desktop';
            }
        }
        return null;
    }
    /**
     * @name standardDevices
     */
    standardDevices() {
        if (this.isEnabledForPlatform) {
            if (REG_MOBILES.IPHONE.REG.test(this._userAgent)) {
                return 'iphone';
            }
            else if (REG_TABLETS.IPAD.REG.test(this._userAgent)) {
                return 'ipad';
            }
            else if (this.isMobile() && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                return 'android mobile';
            }
            else if (this.isTablet() && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                return 'android tablet';
            }
            else if (REG_MOBILES.WINDOWS_PHONE.REG.test(this._userAgent)) {
                return 'windows phone';
            }
        }
        return null;
    }
    /**
     * @name ieVersionDetect
     */
    ieVersionDetect() {
        if (this.isEnabledForPlatform) {
            const _userAgent = this.getUserAgent();
            const msie = _userAgent.indexOf('msie ');
            let _ieVersion = null;
            if (REG_IE_VERSIONS.MS_MSIE.REG.test(_userAgent)) {
                _ieVersion = parseInt(_userAgent.substring(msie + 5, _userAgent.indexOf('.', msie)), 10);
                if (_ieVersion === 7) {
                    return IE_VERSIONS.IE_7;
                }
                else if (_ieVersion == 8) {
                    return IE_VERSIONS.IE_8;
                }
                else if (_ieVersion == 9) {
                    return IE_VERSIONS.IE_9;
                }
                else if (_ieVersion == 10) {
                    return IE_VERSIONS.IE_10;
                }
            }
            // let trident = this._userAgent.indexOf('trident/')
            if (REG_IE_VERSIONS.MS_TRIDENT.REG.test(_userAgent)) {
                let _rv = _userAgent.indexOf('rv:');
                _ieVersion = parseInt(_userAgent.substring(_rv + 3, _userAgent.indexOf('.', _rv)), 10);
                if (_ieVersion == 11) {
                    return IE_VERSIONS.IE_11;
                }
            }
            // let edge = this._userAgent.indexOf('Edg/')
            if (REG_IE_VERSIONS.MS_EDGE.REG.test(_userAgent)) {
                return IE_VERSIONS.IE_12;
            }
        }
        return null;
    }
    /**
     * @name browserName
     */
    browserName() {
        let _browserName = null;
        if (this.isEnabledForPlatform) {
            if (REG_SORT_NAMES.WEBKIT.REG.test(this._userAgent) && REG_SORT_NAMES.CHROME.REG.test(this._userAgent)
                && !REG_BROWSERS.IE.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.CHROME.VALUE;
            }
            else if (REG_SORT_NAMES.MOZILLA.REG.test(this._userAgent) &&
                REG_BROWSERS.FIREFOX.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.FIREFOX.VALUE;
            }
            else if (REG_BROWSERS.IE.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.IE.VALUE;
            }
            else if (REG_SORT_NAMES.SAFARI.REG.test(this._userAgent) &&
                REG_SORT_NAMES.APPLE_WEBKIT.REG.test(this._userAgent) && !REG_SORT_NAMES.CHROME.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.SAFARI.VALUE;
            }
            else if (REG_BROWSERS.OPERA.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.OPERA.VALUE;
            }
            else if (REG_BROWSERS.SILK.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.SILK.VALUE;
            }
            else if (REG_BROWSERS.YANDEX.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.YANDEX.VALUE;
            }
            else {
                _browserName = REG_BROWSERS.NA.VALUE;
            }
        }
        return _browserName;
    }
    /**
     * @name gameDevices
     */
    gameDevices() {
        let _gameDevice = null;
        if (this._userAgent !== null) {
            for (let _reg in REG_GAME_DEVICES) {
                if (REG_GAME_DEVICES[_reg].REG.test(this._userAgent)) {
                    _gameDevice = REG_GAME_DEVICES[_reg].VALUE;
                }
            }
        }
        return _gameDevice;
    }
    /**
     * @name smartTv
     */
    smartTv() {
        let _smartTv = null;
        if (this._userAgent !== null) {
            if (REG_SMARTS_TV.CHROMECAST.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.CHROMECAST.VALUE;
            }
            else if (REG_SMARTS_TV.APPLE_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.APPLE_TV.VALUE;
            }
            else if (REG_SMARTS_TV.GOOGLE_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.GOOGLE_TV.VALUE;
            }
            else if (REG_SMARTS_TV.XBOX_ONE.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.XBOX_ONE.VALUE;
            }
            else if (REG_SMARTS_TV.PS4.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.PS4.VALUE;
            }
            else if (REG_SMARTS_TV.GENERIC_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.GENERIC_TV.VALUE;
            }
        }
        return _smartTv;
    }
    /**
     * @name desktop
     */
    desktop() {
        let _desktop = null;
        if (this._userAgent !== null) {
            if (REG_OS.WINDOWS.REG.test(this._userAgent)) {
                _desktop = REG_OS.WINDOWS.VALUE;
            }
            else if (REG_OS.MAC_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.MAC_OS.VALUE;
            }
            else if (REG_OS.LINUX.REG.test(this._userAgent)) {
                _desktop = REG_OS.LINUX.VALUE;
            }
            else if (REG_OS.FIREFOX_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.FIREFOX_OS.VALUE;
            }
            else if (REG_OS.FIREFOX_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.CHROME_OS.VALUE;
            }
        }
        return _desktop;
    }
    /**
     * @name tablet
     */
    tablet() {
        let _tablet = null;
        if (this._userAgent !== null) {
            if (REG_TABLETS.IPAD.REG.test(this._userAgent)) {
                _tablet = TABLET.IPAD;
            }
            else if (REG_TABLETS.TABLET.REG.test(this._userAgent) && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                _tablet = TABLET.ANDROID;
            }
            else if (REG_TABLETS.KINDLE.REG.test(this._userAgent)) {
                _tablet = TABLET.KINDLE;
            }
            else if (REG_TABLETS.TABLET.REG.test(this._userAgent)) {
                _tablet = TABLET.GENERIC_TABLET;
            }
        }
        return _tablet;
    }
    /**
     * @name mobile
     */
    mobile() {
        let _mobile = null;
        if (this._userAgent !== null) {
            for (let _reg in REG_MOBILES) {
                if (REG_MOBILES[_reg].REG.test(this._userAgent)) {
                    _mobile = REG_MOBILES[_reg].VALUE;
                }
            }
            if (_mobile === null && this.isMobile()) {
                _mobile = MOBILE.GENERIC_MOBILE;
            }
        }
        return _mobile;
    }
    /**
     * @name windows
     */
    windows() {
        let _windows = null;
        if (this._userAgent !== null) {
            for (let _reg in REG_WINDOWS_OS_VERSION) {
                if (REG_WINDOWS_OS_VERSION[_reg].REG.test(this._userAgent)) {
                    _windows = REG_WINDOWS_OS_VERSION[_reg].VALUE;
                }
            }
            if (_windows === null && this.isDesktop() && this.isWindows()) {
                _windows = WINDOWS_OS.GENERIC_WINDOWS;
            }
        }
        return _windows;
    }
    /**
     * @name linux
     */
    linux() {
        let _linux = null;
        if (this._userAgent !== null) {
            for (let _reg in REG_LINUX_OS) {
                if (REG_LINUX_OS[_reg].REG.test(this._userAgent)) {
                    _linux = REG_LINUX_OS[_reg].VALUE;
                }
            }
            if (_linux === null && this.isDesktop() && this.isLinux()) {
                _linux = LINUX_OS.GENERIC_LINUX;
            }
        }
        return _linux;
    }
    /**
     * @name isMobile
     */
    isMobile() {
        let _result = false;
        if (this._userAgent !== null) {
            let _userAgent = this._userAgent;
            _result = (REG_MOBILES.GENERIC_REG_1.REG.test(_userAgent) && this.isTablet() === false ||
                REG_MOBILES.GENERIC_REG_2.REG.test(_userAgent.substr(0, 4)) && this.isTablet() === false);
        }
        return _result;
    }
    /**
     * @name isTablet
     */
    isTablet() {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_TABLETS.IPAD.REG.test(this._userAgent) ||
                REG_TABLETS.KINDLE.REG.test(this._userAgent) ||
                REG_TABLETS.TABLET.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * @name isSMART
     */
    isSMART() {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_SMARTS_TV.GENERIC_TV.REG.test(this._userAgent) ||
                REG_SMARTS_TV.PS4.REG.test(this._userAgent) ||
                REG_SMARTS_TV.XBOX_ONE.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * @name isDesktop
     */
    isDesktop() {
        let _result = false;
        if (this._userAgent !== null) {
            _result = !(this.isMobile() || this.isTablet() || this.isSMART());
        }
        return _result;
    }
    /**
     * @name isGameDevice
     */
    isGameDevice() {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_GAME_DEVICES.PS4.REG.test(this._userAgent) || REG_GAME_DEVICES.PS3.REG.test(this._userAgent)
                || REG_GAME_DEVICES.XBOX.REG.test(this._userAgent) || REG_GAME_DEVICES.XBOX_ONE.REG.test(this._userAgent)
                || REG_GAME_DEVICES.WII.REG.test(this._userAgent) || REG_GAME_DEVICES.WII_U.REG.test(this._userAgent)
                || REG_GAME_DEVICES.NINTENDO_3DS.REG.test(this._userAgent) || REG_GAME_DEVICES.PS_VITA.REG.test(this._userAgent)
                || REG_GAME_DEVICES.PSP.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * @name isWindows
     */
    isWindows() {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_OS.WINDOWS.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * @name isLinux
     */
    isLinux() {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_OS.LINUX.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * @name isBot
     */
    isBot() {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_BOTS.GENERIC_BOT.REG.test(this._userAgent));
        }
        return _result;
    }
}
ResponsiveState.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveState, deps: [{ token: i1.PlatformService }, { token: i2.ResponsiveConfig }], target: i0.ɵɵFactoryTarget.Injectable });
ResponsiveState.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveState });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveState, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PlatformService }, { type: i2.ResponsiveConfig }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQ0gsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFDckUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxZQUFZLEVBQ3hFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUNqRSxXQUFXLEVBQ2QsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVN6QixNQUFNLE9BQU8sZUFBZTtJQXNCeEIsWUFDSSxlQUFnQyxFQUN4QixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQXRCeEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBWW5CLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLGVBQVUs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TyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVM7UUFDWixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUMxQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPO1FBQ1YsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNSLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQzFCLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7OzRHQWxuQlEsZUFBZTtnSEFBZixlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWUgcmVzcG9uc2l2ZS1zdGF0ZVxyXG4gKiBAZGVzY3JpcHRpb24gQ29yZSByZXNwb25zaXZlIHN0YXRlIHByb3ZpZGVyIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZGVmYXVsdElmRW1wdHkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVdpbmRvd0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL0BkaXJlY3RpdmVzJztcclxuaW1wb3J0IHtcclxuICAgIFJFR19UQUJMRVRTLCBSRUdfTU9CSUxFUywgUkVHX1NNQVJUU19UViwgUkVHX0JST1dTRVJTLCBSRUdfU09SVF9OQU1FUyxcclxuICAgIFJFR19HQU1FX0RFVklDRVMsIFJFR19CT1RTLCBSRUdfT1MsIFJFR19XSU5ET1dTX09TX1ZFUlNJT04sIFJFR19MSU5VWF9PUyxcclxuICAgIFVTRVJfQUdFTlQsIFJFR19JRV9WRVJTSU9OUywgVEFCTEVULCBXSU5ET1dTX09TLCBMSU5VWF9PUywgTU9CSUxFLFxyXG4gICAgSUVfVkVSU0lPTlNcclxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQge1xyXG4gICAgVExpbnV4T1MsIFRXaW5kb3dzT1MsIFRUYWJsZXQsIFRNb2JpbGUsXHJcbiAgICBUb3NTeXN0ZW1zLCBUU21hcnRUdiwgVEdhbWVEZXZpY2VzXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi4vcmVzcG9uc2l2ZS1jb25maWcvcmVzcG9uc2l2ZS1jb25maWcnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuLi9wbGF0Zm9ybS1zZXJ2aWNlL3BsYXRmb3JtLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgX3dpbmRvd3M6IE9iamVjdCA9IHt9O1xyXG4gICAgcHVibGljIF93aW5kb3c6IGFueSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGVsZW1lbnRvJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgcHVibGljIGFuY2hvJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgcHVibGljIGJyb3dzZXIkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICBwdWJsaWMgcGl4ZWwkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICBwdWJsaWMgZGV2aWNlJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIG9yaWVudGF0aW9uJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIHN0YW5kYXJkJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHVibGljIGllVmVyc2lvbiQ6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyB1c2VyQWdlbnQkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NyZWVuV2lkdGg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zY3JlZW5IZWlnaHQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIF91c2VyQWdlbnQ6IGFueSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzRW5hYmxlZEZvclBsYXRmb3JtOiBib29sZWFuID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9mb3JjZVJlZnJlc2gkOiBCZWhhdmlvclN1YmplY3Q8bnVsbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bGw+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3Jlc3BvbnNpdmVDb25maWc6IFJlc3BvbnNpdmVDb25maWcsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZEZvclBsYXRmb3JtID0gcGxhdGZvcm1TZXJ2aWNlLmlzRW5hYmxlZEZvclBsYXRmb3JtKCk7XHJcbiAgICAgICAgdGhpcy5fd2luZG93ID0gKHRoaXMuaXNFbmFibGVkRm9yUGxhdGZvcm0pID8gd2luZG93IDogbnVsbDtcclxuICAgICAgICB0aGlzLl9zY3JlZW5XaWR0aCA9ICh0aGlzLmlzRW5hYmxlZEZvclBsYXRmb3JtKSA/IHRoaXMuX3dpbmRvdy5zY3JlZW4ud2lkdGggOiAwO1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbkhlaWdodCA9ICh0aGlzLmlzRW5hYmxlZEZvclBsYXRmb3JtKSA/IHRoaXMuX3dpbmRvdy5zY3JlZW4uaGVpZ2h0IDogMDtcclxuICAgICAgICB0aGlzLl91c2VyQWdlbnQgPSAodGhpcy5pc0VuYWJsZWRGb3JQbGF0Zm9ybSkgPyB0aGlzLl93aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0VuYWJsZWRGb3JQbGF0Zm9ybSkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBfcmVzaXplJCA9ICBjb21iaW5lTGF0ZXN0KFxyXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuX3dpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuX3Jlc3BvbnNpdmVDb25maWcuY29uZmlnLmRlYm91bmNlVGltZSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdElmRW1wdHkodW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5nZXRXaWR0aCgnd2luZG93JykpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VSZWZyZXNoJFxyXG4gICAgICAgICAgICApLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5fcmVzcG9uc2l2ZUNvbmZpZy5jb25maWcuZGVib3VuY2VUaW1lKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgX3BpeGVsUmF0aW8kID0gZnJvbUV2ZW50KHRoaXMuX3dpbmRvdywgJ29ubG9hZCcpXHJcbiAgICAgICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRJZkVtcHR5KHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5nZXREZXZpY2VQaXhlbFJhdGlvKCkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgX2RldmljZSQgPSBmcm9tRXZlbnQodGhpcy5fd2luZG93LCAnb25sb2FkJylcclxuICAgICAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdElmRW1wdHkodW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLmdldFVzZXJBZ2VudCgpKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IF91c2VyQWdlbnQkID0gZnJvbUV2ZW50KHRoaXMuX3dpbmRvdywgJ29ubG9hZCcpXHJcbiAgICAgICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRJZkVtcHR5KHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy51c2VyQWdlbnREYXRhKCkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgX29yaWVudGF0aW9uJCA9IGZyb21FdmVudCh0aGlzLl93aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScpXHJcbiAgICAgICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRJZkVtcHR5KHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5nZXRPcmllbnRhdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudG8kID0gX3Jlc2l6ZSQucGlwZShtYXAodGhpcy5zaXplT3BlcmF0aW9ucy5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5jaG8kID0gX3Jlc2l6ZSQucGlwZShtYXAodGhpcy5zaXplT2JzZXJ2ZXIuYmluZCh0aGlzKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJyb3dzZXIkID0gX2RldmljZSQucGlwZShtYXAodGhpcy5icm93c2VyTmFtZS5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgICAgIHRoaXMucGl4ZWwkID0gX3BpeGVsUmF0aW8kLnBpcGUobWFwKHRoaXMucGl4ZWxSYXRpby5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlJCA9IF9kZXZpY2UkLnBpcGUobWFwKHRoaXMuZGV2aWNlRGV0ZWN0aW9uLmJpbmQodGhpcykpKTtcclxuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiQgPSBfb3JpZW50YXRpb24kLnBpcGUobWFwKHRoaXMub3JpZW50YXRpb25EZXZpY2UuYmluZCh0aGlzKSkpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kYXJkJCA9IF9kZXZpY2UkLnBpcGUobWFwKHRoaXMuc3RhbmRhcmREZXZpY2VzLmJpbmQodGhpcykpKTtcclxuICAgICAgICAgICAgdGhpcy5pZVZlcnNpb24kID0gX2RldmljZSQucGlwZShtYXAodGhpcy5pZVZlcnNpb25EZXRlY3QuYmluZCh0aGlzKSkpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJBZ2VudCQgPSBfdXNlckFnZW50JC5waXBlKG1hcCh0aGlzLnVzZXJBZ2VudERhdGEuYmluZCh0aGlzKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9yY2VSZWZyZXNoKCl7XHJcbiAgICAgICAgdGhpcy5fZm9yY2VSZWZyZXNoJC5uZXh0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAbmFtZSByZWdpc3RlcldpbmRvd1xyXG4gICAgKiBAcGFyYW0gcndcclxuICAgICogQHBhcmFtIF93aW5kb3dcclxuICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJXaW5kb3cocnc6IFJlc3BvbnNpdmVXaW5kb3dEaXJlY3RpdmUsIF93aW5kb3cgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHJ3Lm5hbWUgJiYgIXRoaXMuX3dpbmRvd3NbcncubmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93c1tydy5uYW1lXSA9IHJ3O1xyXG4gICAgICAgICAgICBpZiAoX3dpbmRvdyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgX3dpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAbmFtZSB1bnJlZ2lzdGVyV2luZG93XHJcbiAgICAqIEBwYXJhbSByd1xyXG4gICAgKiBAcGFyYW0gX3dpbmRvd1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyV2luZG93KHJ3OiBSZXNwb25zaXZlV2luZG93RGlyZWN0aXZlLCBfd2luZG93ID0gbnVsbCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcnduIGluIHRoaXMuX3dpbmRvd3MpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3dpbmRvd3NbcnduXSA9PT0gcncpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSAodGhpcy5fd2luZG93c1tyd25dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3dpbmRvdyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBAbmFtZSBnZXRXaWR0aFxyXG4gICAgKiBAcGFyYW0gd2luZG93TmFtZVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBnZXRXaWR0aCh3aW5kb3dOYW1lOiBzdHJpbmcgPSBudWxsKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5fd2luZG93cyAhPT0gbnVsbCAmJiB0aGlzLmlzRW5hYmxlZEZvclBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dOYW1lICYmIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVdLmdldFdpZHRoKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEBuYW1lIGdldERldmljZVBpeGVsUmF0aW9cclxuICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RGV2aWNlUGl4ZWxSYXRpbygpOiBhbnkge1xyXG4gICAgICAgIGxldCByYXRpbyA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl93aW5kb3cuc2NyZWVuLnN5c3RlbVhEUEkgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5fd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSA+IHRoaXMuX3dpbmRvdy5zY3JlZW4ubG9naWNhbFhEUEkpIHtcclxuICAgICAgICAgICAgICAgIHJhdGlvID0gdGhpcy5fd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJIC8gdGhpcy5fd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByYXRpbyA9IHRoaXMuX3dpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByYXRpbztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQG5hbWUgZ2V0T3JpZW50YXRpb25cclxuICAgICovXHJcbiAgICBwdWJsaWMgZ2V0T3JpZW50YXRpb24oKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaXNFbmFibGVkRm9yUGxhdGZvcm0pID8gd2luZG93Lm9yaWVudGF0aW9uIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQG5hbWUgc2l6ZU9ic2VydmVyXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNpemVPYnNlcnZlcigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fd2luZG93cyAhPT0gbnVsbCAmJiB0aGlzLmlzRW5hYmxlZEZvclBsYXRmb3JtKSA/IHRoaXMuZ2V0V2lkdGgoJ3dpbmRvdycpIDogMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIHNpemVPcGVyYXRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaXplT3BlcmF0aW9ucygpOiBhbnkge1xyXG4gICAgICAgIGxldCBfc2l6ZXMgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IF9icmVhY2twb2ludHMgPSB0aGlzLl9yZXNwb25zaXZlQ29uZmlnLmNvbmZpZy5icmVha1BvaW50cztcclxuICAgICAgICBpZiAodGhpcy5fd2luZG93cyAhPT0gbnVsbCAmJiB0aGlzLmlzRW5hYmxlZEZvclBsYXRmb3JtICYmIF9icmVhY2twb2ludHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgX3dpZHRoID0gdGhpcy5nZXRXaWR0aCgnd2luZG93Jyk7XHJcbiAgICAgICAgICAgIGlmIChfYnJlYWNrcG9pbnRzLnhsLm1pbiA8PSBfd2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIF9zaXplcyA9ICd4bCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2JyZWFja3BvaW50cy5sZy5tYXggPj0gX3dpZHRoICYmIF9icmVhY2twb2ludHMubGcubWluIDw9IF93aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgX3NpemVzID0gJ2xnJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChfYnJlYWNrcG9pbnRzLm1kLm1heCA+PSBfd2lkdGggJiYgX2JyZWFja3BvaW50cy5tZC5taW4gPD0gX3dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBfc2l6ZXMgPSAnbWQnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9icmVhY2twb2ludHMuc20ubWF4ID49IF93aWR0aCAmJiBfYnJlYWNrcG9pbnRzLnNtLm1pbiA8PSBfd2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIF9zaXplcyA9ICdzbSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2JyZWFja3BvaW50cy54cy5tYXggPj0gX3dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBfc2l6ZXMgPSAneHMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc2l6ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBzaXplT3BlcmF0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGl4ZWxSYXRpbygpOiBhbnkge1xyXG4gICAgICAgIGxldCBfcGl4ZWxSYXRpbyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkRm9yUGxhdGZvcm0gJiYgdGhpcy5fc2NyZWVuV2lkdGggIT09IDAgJiYgdGhpcy5fc2NyZWVuSGVpZ2h0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlc3RJczRrKCkpIHtcclxuICAgICAgICAgICAgICAgIF9waXhlbFJhdGlvID0gJzRrJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldERldmljZVBpeGVsUmF0aW8oKSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIF9waXhlbFJhdGlvID0gJ3JldGluYSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXREZXZpY2VQaXhlbFJhdGlvKCkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIF9waXhlbFJhdGlvID0gJzF4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3BpeGVsUmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSB0ZXN0SXM0a1xyXG4gICAgICogQHBhcmFtIHNjcmVlbkhlaWdodFxyXG4gICAgICogQHBhcmFtIHNjcmVlbldpZHRoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0ZXN0SXM0aygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX3NjcmVlbkhlaWdodCAhPT0gMCAmJiB0aGlzLl9zY3JlZW5XaWR0aCAhPT0gMCkgP1xyXG4gICAgICAgICAgICAoKHRoaXMuX3NjcmVlbkhlaWdodCA8IHRoaXMuX3NjcmVlbldpZHRoKSA/ICh0aGlzLl9zY3JlZW5XaWR0aCA+IDM4MzkpIDogKHRoaXMuX3NjcmVlbkhlaWdodCA+IDM4MzkpKSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWUgb3JpZW50YXRpb25EZXZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yaWVudGF0aW9uRGV2aWNlKCk6IGFueSB7XHJcbiAgICAgICAgbGV0IF9vcmllbnRhdGlvbkRldmljZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUoKSB8fCB0aGlzLmlzVGFibGV0KCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aW5kb3cuaW5uZXJIZWlnaHQgPiB0aGlzLl93aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9vcmllbnRhdGlvbkRldmljZSA9ICdwb3J0cmFpdCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9vcmllbnRhdGlvbkRldmljZSA9ICdsYW5kc2NhcGUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNTTUFSVCgpIHx8IHRoaXMuaXNEZXNrdG9wKCkpIHtcclxuICAgICAgICAgICAgICAgIF9vcmllbnRhdGlvbkRldmljZSA9ICdsYW5kc2NhcGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfb3JpZW50YXRpb25EZXZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBnZXRVc2VyQWdlbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVzZXJBZ2VudCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pc0VuYWJsZWRGb3JQbGF0Zm9ybSkgPyB0aGlzLl93aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIHVzZXJBZ2VudERhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZXJBZ2VudERhdGEoKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5fd2luZG93ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVU0VSX0FHRU5UO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBERUZBVUxUX1VTRVJfQUdFTlRfVkFMVUUgPSAnJztcclxuICAgICAgICBjb25zdCBfaWVWZXJzaW9uU3RhdGUgPSAodGhpcy5pZVZlcnNpb25EZXRlY3QoKSAhPT0gbnVsbCk7XHJcbiAgICAgICAgY29uc3QgX2lzR2FtZURldmljZSA9IHRoaXMuaXNHYW1lRGV2aWNlKCk7XHJcbiAgICAgICAgY29uc3QgX2lzU01BUlQgPSB0aGlzLmlzU01BUlQoKTtcclxuICAgICAgICBjb25zdCBfaXNEZXNrdG9wID0gdGhpcy5pc0Rlc2t0b3AoKTtcclxuICAgICAgICBjb25zdCBfaXNUYWJsZXQgPSB0aGlzLmlzVGFibGV0KCk7XHJcbiAgICAgICAgY29uc3QgX2lzTW9iaWxlID0gdGhpcy5pc01vYmlsZSgpO1xyXG4gICAgICAgIGNvbnN0IF9pc1dpbmRvd3MgPSB0aGlzLmlzV2luZG93cygpO1xyXG4gICAgICAgIGNvbnN0IF9pc0xpbnV4ID0gdGhpcy5pc0xpbnV4KCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGV2aWNlOiB0aGlzLmRldmljZURldGVjdGlvbigpLFxyXG4gICAgICAgICAgICBicm93c2VyOiB0aGlzLmJyb3dzZXJOYW1lKCksXHJcbiAgICAgICAgICAgIHBpeGVscmF0aW86IHRoaXMucGl4ZWxSYXRpbygpLFxyXG4gICAgICAgICAgICBpZV92ZXJzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAoX2llVmVyc2lvblN0YXRlKSA/IHRoaXMuaWVWZXJzaW9uRGV0ZWN0KCkgOiBERUZBVUxUX1VTRVJfQUdFTlRfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogX2llVmVyc2lvblN0YXRlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdhbWVfZGV2aWNlOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAoX2lzR2FtZURldmljZSkgPyB0aGlzLmdhbWVEZXZpY2VzKCkgOiBERUZBVUxUX1VTRVJfQUdFTlRfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogX2lzR2FtZURldmljZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbWFydF90djoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogKF9pc1NNQVJUKSA/IHRoaXMuc21hcnRUdigpIDogREVGQVVMVF9VU0VSX0FHRU5UX1ZBTFVFLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IF9pc1NNQVJUXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IChfaXNEZXNrdG9wKSA/IHRoaXMuZGVza3RvcCgpIDogREVGQVVMVF9VU0VSX0FHRU5UX1ZBTFVFLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IF9pc0Rlc2t0b3BcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGFibGV0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAoX2lzVGFibGV0KSA/IHRoaXMudGFibGV0KCkgOiBERUZBVUxUX1VTRVJfQUdFTlRfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogX2lzVGFibGV0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogKF9pc01vYmlsZSkgPyB0aGlzLm1vYmlsZSgpIDogREVGQVVMVF9VU0VSX0FHRU5UX1ZBTFVFLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IF9pc01vYmlsZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aW5kb3dfb3M6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IChfaXNXaW5kb3dzKSA/IHRoaXMud2luZG93cygpIDogREVGQVVMVF9VU0VSX0FHRU5UX1ZBTFVFLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IF9pc1dpbmRvd3NcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGludXhfb3M6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IChfaXNMaW51eCkgPyB0aGlzLmxpbnV4KCkgOiBERUZBVUxUX1VTRVJfQUdFTlRfVkFMVUUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogX2lzTGludXhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm90OiB0aGlzLmlzQm90KClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWUgZGV2aWNlRGV0ZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZXZpY2VEZXRlY3Rpb24oKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWRGb3JQbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21vYmlsZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1RhYmxldCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3RhYmxldCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1NNQVJUKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnc21hcnR0dic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rlc2t0b3AoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdkZXNrdG9wJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIHN0YW5kYXJkRGV2aWNlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhbmRhcmREZXZpY2VzKCk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgaWYgKFJFR19NT0JJTEVTLklQSE9ORS5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2lwaG9uZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX1RBQkxFVFMuSVBBRC5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2lwYWQnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNNb2JpbGUoKSAmJiBSRUdfTU9CSUxFUy5BTkRST0lELlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnYW5kcm9pZCBtb2JpbGUnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNUYWJsZXQoKSAmJiBSRUdfTU9CSUxFUy5BTkRST0lELlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnYW5kcm9pZCB0YWJsZXQnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19NT0JJTEVTLldJTkRPV1NfUEhPTkUuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd3aW5kb3dzIHBob25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGllVmVyc2lvbkRldGVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaWVWZXJzaW9uRGV0ZWN0KCk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgY29uc3QgX3VzZXJBZ2VudCA9IHRoaXMuZ2V0VXNlckFnZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zaWUgPSBfdXNlckFnZW50LmluZGV4T2YoJ21zaWUgJyk7XHJcbiAgICAgICAgICAgIGxldCBfaWVWZXJzaW9uID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKFJFR19JRV9WRVJTSU9OUy5NU19NU0lFLlJFRy50ZXN0KF91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBfaWVWZXJzaW9uID0gcGFyc2VJbnQoX3VzZXJBZ2VudC5zdWJzdHJpbmcobXNpZSArIDUsIF91c2VyQWdlbnQuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9pZVZlcnNpb24gPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSUVfVkVSU0lPTlMuSUVfNztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2llVmVyc2lvbiA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElFX1ZFUlNJT05TLklFXzg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9pZVZlcnNpb24gPT0gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJRV9WRVJTSU9OUy5JRV85O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfaWVWZXJzaW9uID09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElFX1ZFUlNJT05TLklFXzEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxldCB0cmlkZW50ID0gdGhpcy5fdXNlckFnZW50LmluZGV4T2YoJ3RyaWRlbnQvJylcclxuICAgICAgICAgICAgaWYgKFJFR19JRV9WRVJTSU9OUy5NU19UUklERU5ULlJFRy50ZXN0KF91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3J2ID0gX3VzZXJBZ2VudC5pbmRleE9mKCdydjonKTtcclxuICAgICAgICAgICAgICAgIF9pZVZlcnNpb24gPSBwYXJzZUludChfdXNlckFnZW50LnN1YnN0cmluZyhfcnYgKyAzLCBfdXNlckFnZW50LmluZGV4T2YoJy4nLCBfcnYpKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9pZVZlcnNpb24gPT0gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSUVfVkVSU0lPTlMuSUVfMTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBlZGdlID0gdGhpcy5fdXNlckFnZW50LmluZGV4T2YoJ0VkZy8nKVxyXG4gICAgICAgICAgICBpZiAoUkVHX0lFX1ZFUlNJT05TLk1TX0VER0UuUkVHLnRlc3QoX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBJRV9WRVJTSU9OUy5JRV8xMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGJyb3dzZXJOYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBicm93c2VyTmFtZSgpOiBhbnkge1xyXG4gICAgICAgIGxldCBfYnJvd3Nlck5hbWUgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZEZvclBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIGlmIChSRUdfU09SVF9OQU1FUy5XRUJLSVQuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSAmJiBSRUdfU09SVF9OQU1FUy5DSFJPTUUuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KVxyXG4gICAgICAgICAgICAgICAgJiYgIVJFR19CUk9XU0VSUy5JRS5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBfYnJvd3Nlck5hbWUgPSBSRUdfQlJPV1NFUlMuQ0hST01FLlZBTFVFO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19TT1JUX05BTUVTLk1PWklMTEEuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSAmJlxyXG4gICAgICAgICAgICAgICAgUkVHX0JST1dTRVJTLkZJUkVGT1guUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgX2Jyb3dzZXJOYW1lID0gUkVHX0JST1dTRVJTLkZJUkVGT1guVkFMVUU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX0JST1dTRVJTLklFLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF9icm93c2VyTmFtZSA9IFJFR19CUk9XU0VSUy5JRS5WQUxVRTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChSRUdfU09SVF9OQU1FUy5TQUZBUkkuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSAmJlxyXG4gICAgICAgICAgICAgICAgUkVHX1NPUlRfTkFNRVMuQVBQTEVfV0VCS0lULlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkgJiYgIVJFR19TT1JUX05BTUVTLkNIUk9NRS5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBfYnJvd3Nlck5hbWUgPSBSRUdfQlJPV1NFUlMuU0FGQVJJLlZBTFVFO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19CUk9XU0VSUy5PUEVSQS5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBfYnJvd3Nlck5hbWUgPSBSRUdfQlJPV1NFUlMuT1BFUkEuVkFMVUU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX0JST1dTRVJTLlNJTEsuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgX2Jyb3dzZXJOYW1lID0gUkVHX0JST1dTRVJTLlNJTEsuVkFMVUU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX0JST1dTRVJTLllBTkRFWC5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBfYnJvd3Nlck5hbWUgPSBSRUdfQlJPV1NFUlMuWUFOREVYLlZBTFVFO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX2Jyb3dzZXJOYW1lID0gUkVHX0JST1dTRVJTLk5BLlZBTFVFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfYnJvd3Nlck5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBnYW1lRGV2aWNlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2FtZURldmljZXMoKTogVEdhbWVEZXZpY2VzIHtcclxuICAgICAgICBsZXQgX2dhbWVEZXZpY2UgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VyQWdlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgX3JlZyBpbiBSRUdfR0FNRV9ERVZJQ0VTKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUkVHX0dBTUVfREVWSUNFU1tfcmVnXS5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2dhbWVEZXZpY2UgPSBSRUdfR0FNRV9ERVZJQ0VTW19yZWddLlZBTFVFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfZ2FtZURldmljZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIHNtYXJ0VHZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNtYXJ0VHYoKTogVFNtYXJ0VHYge1xyXG4gICAgICAgIGxldCBfc21hcnRUdiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJBZ2VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoUkVHX1NNQVJUU19UVi5DSFJPTUVDQVNULlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF9zbWFydFR2ID0gUkVHX1NNQVJUU19UVi5DSFJPTUVDQVNULlZBTFVFO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19TTUFSVFNfVFYuQVBQTEVfVFYuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgX3NtYXJ0VHYgPSBSRUdfU01BUlRTX1RWLkFQUExFX1RWLlZBTFVFO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19TTUFSVFNfVFYuR09PR0xFX1RWLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF9zbWFydFR2ID0gUkVHX1NNQVJUU19UVi5HT09HTEVfVFYuVkFMVUU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX1NNQVJUU19UVi5YQk9YX09ORS5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBfc21hcnRUdiA9IFJFR19TTUFSVFNfVFYuWEJPWF9PTkUuVkFMVUU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX1NNQVJUU19UVi5QUzQuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgX3NtYXJ0VHYgPSBSRUdfU01BUlRTX1RWLlBTNC5WQUxVRTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChSRUdfU01BUlRTX1RWLkdFTkVSSUNfVFYuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgX3NtYXJ0VHYgPSBSRUdfU01BUlRTX1RWLkdFTkVSSUNfVFYuVkFMVUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zbWFydFR2O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWUgZGVza3RvcFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVza3RvcCgpOiBUb3NTeXN0ZW1zIHtcclxuICAgICAgICBsZXQgX2Rlc2t0b3AgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VyQWdlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKFJFR19PUy5XSU5ET1dTLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF9kZXNrdG9wID0gUkVHX09TLldJTkRPV1MuVkFMVUU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX09TLk1BQ19PUy5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBfZGVza3RvcCA9IFJFR19PUy5NQUNfT1MuVkFMVUU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX09TLkxJTlVYLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF9kZXNrdG9wID0gUkVHX09TLkxJTlVYLlZBTFVFO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19PUy5GSVJFRk9YX09TLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF9kZXNrdG9wID0gUkVHX09TLkZJUkVGT1hfT1MuVkFMVUU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX09TLkZJUkVGT1hfT1MuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgX2Rlc2t0b3AgPSBSRUdfT1MuQ0hST01FX09TLlZBTFVFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfZGVza3RvcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIHRhYmxldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGFibGV0KCk6IFRUYWJsZXQge1xyXG4gICAgICAgIGxldCBfdGFibGV0ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5fdXNlckFnZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChSRUdfVEFCTEVUUy5JUEFELlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF90YWJsZXQgPSBUQUJMRVQuSVBBRDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChSRUdfVEFCTEVUUy5UQUJMRVQuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSAmJiBSRUdfTU9CSUxFUy5BTkRST0lELlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF90YWJsZXQgPSBUQUJMRVQuQU5EUk9JRDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChSRUdfVEFCTEVUUy5LSU5ETEUuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgX3RhYmxldCA9IFRBQkxFVC5LSU5ETEU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX1RBQkxFVFMuVEFCTEVULlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIF90YWJsZXQgPSBUQUJMRVQuR0VORVJJQ19UQUJMRVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90YWJsZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBtb2JpbGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vYmlsZSgpOiBUTW9iaWxlIHtcclxuICAgICAgICBsZXQgX21vYmlsZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJBZ2VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfcmVnIGluIFJFR19NT0JJTEVTKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUkVHX01PQklMRVNbX3JlZ10uUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9tb2JpbGUgPSBSRUdfTU9CSUxFU1tfcmVnXS5WQUxVRTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX21vYmlsZSA9PT0gbnVsbCAmJiB0aGlzLmlzTW9iaWxlKCkpIHtcclxuICAgICAgICAgICAgICAgIF9tb2JpbGUgPSBNT0JJTEUuR0VORVJJQ19NT0JJTEU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9tb2JpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSB3aW5kb3dzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aW5kb3dzKCk6IFRXaW5kb3dzT1Mge1xyXG4gICAgICAgIGxldCBfd2luZG93cyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJBZ2VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBfcmVnIGluIFJFR19XSU5ET1dTX09TX1ZFUlNJT04pIHtcclxuICAgICAgICAgICAgICAgIGlmIChSRUdfV0lORE9XU19PU19WRVJTSU9OW19yZWddLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfd2luZG93cyA9IFJFR19XSU5ET1dTX09TX1ZFUlNJT05bX3JlZ10uVkFMVUU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF93aW5kb3dzID09PSBudWxsICYmIHRoaXMuaXNEZXNrdG9wKCkgJiYgdGhpcy5pc1dpbmRvd3MoKSkge1xyXG4gICAgICAgICAgICAgICAgX3dpbmRvd3MgPSBXSU5ET1dTX09TLkdFTkVSSUNfV0lORE9XUztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3dpbmRvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBsaW51eFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGludXgoKTogVExpbnV4T1Mge1xyXG4gICAgICAgIGxldCBfbGludXg6IFRMaW51eE9TID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5fdXNlckFnZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IF9yZWcgaW4gUkVHX0xJTlVYX09TKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUkVHX0xJTlVYX09TW19yZWddLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfbGludXggPSBSRUdfTElOVVhfT1NbX3JlZ10uVkFMVUU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9saW51eCA9PT0gbnVsbCAmJiB0aGlzLmlzRGVza3RvcCgpICYmIHRoaXMuaXNMaW51eCgpKSB7XHJcbiAgICAgICAgICAgICAgICBfbGludXggPSBMSU5VWF9PUy5HRU5FUklDX0xJTlVYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfbGludXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBpc01vYmlsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNNb2JpbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IF9yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5fdXNlckFnZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBfdXNlckFnZW50ID0gdGhpcy5fdXNlckFnZW50O1xyXG4gICAgICAgICAgICBfcmVzdWx0ID0gKFJFR19NT0JJTEVTLkdFTkVSSUNfUkVHXzEuUkVHLnRlc3QoX3VzZXJBZ2VudCkgJiYgdGhpcy5pc1RhYmxldCgpID09PSBmYWxzZSB8fFxyXG4gICAgICAgICAgICAgICAgUkVHX01PQklMRVMuR0VORVJJQ19SRUdfMi5SRUcudGVzdChfdXNlckFnZW50LnN1YnN0cigwLCA0KSkgJiYgdGhpcy5pc1RhYmxldCgpID09PSBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWUgaXNUYWJsZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzVGFibGV0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBfcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJBZ2VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfcmVzdWx0ID0gKFJFR19UQUJMRVRTLklQQUQuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSB8fFxyXG4gICAgICAgICAgICAgICAgUkVHX1RBQkxFVFMuS0lORExFLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkgfHxcclxuICAgICAgICAgICAgICAgIFJFR19UQUJMRVRTLlRBQkxFVC5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBpc1NNQVJUXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NNQVJUKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBfcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJBZ2VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfcmVzdWx0ID0gKFJFR19TTUFSVFNfVFYuR0VORVJJQ19UVi5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpIHx8XHJcbiAgICAgICAgICAgICAgICBSRUdfU01BUlRTX1RWLlBTNC5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpIHx8XHJcbiAgICAgICAgICAgICAgICBSRUdfU01BUlRTX1RWLlhCT1hfT05FLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGlzRGVza3RvcFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNEZXNrdG9wKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBfcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJBZ2VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfcmVzdWx0ID0gISh0aGlzLmlzTW9iaWxlKCkgfHwgdGhpcy5pc1RhYmxldCgpIHx8IHRoaXMuaXNTTUFSVCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBpc0dhbWVEZXZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzR2FtZURldmljZSgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgX3Jlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VyQWdlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgX3Jlc3VsdCA9IChSRUdfR0FNRV9ERVZJQ0VTLlBTNC5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpIHx8IFJFR19HQU1FX0RFVklDRVMuUFMzLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudClcclxuICAgICAgICAgICAgICAgIHx8IFJFR19HQU1FX0RFVklDRVMuWEJPWC5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpIHx8IFJFR19HQU1FX0RFVklDRVMuWEJPWF9PTkUuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KVxyXG4gICAgICAgICAgICAgICAgfHwgUkVHX0dBTUVfREVWSUNFUy5XSUkuUkVHLnRlc3QodGhpcy5fdXNlckFnZW50KSB8fCBSRUdfR0FNRV9ERVZJQ0VTLldJSV9VLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudClcclxuICAgICAgICAgICAgICAgIHx8IFJFR19HQU1FX0RFVklDRVMuTklOVEVORE9fM0RTLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkgfHwgUkVHX0dBTUVfREVWSUNFUy5QU19WSVRBLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudClcclxuICAgICAgICAgICAgICAgIHx8IFJFR19HQU1FX0RFVklDRVMuUFNQLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGlzV2luZG93c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNXaW5kb3dzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBfcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJBZ2VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfcmVzdWx0ID0gKFJFR19PUy5XSU5ET1dTLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGlzTGludXhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzTGludXgoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IF9yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5fdXNlckFnZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIF9yZXN1bHQgPSAoUkVHX09TLkxJTlVYLlJFRy50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGlzQm90XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0JvdCgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgX3Jlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VyQWdlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgX3Jlc3VsdCA9IChSRUdfQk9UUy5HRU5FUklDX0JPVC5SRUcudGVzdCh0aGlzLl91c2VyQWdlbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==