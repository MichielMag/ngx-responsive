import * as i0 from '@angular/core';
import { Injectable, Inject, PLATFORM_ID, EventEmitter, Directive, Input, Output, InjectionToken, NgModule } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, ReplaySubject } from 'rxjs';
import { debounceTime, defaultIfEmpty, startWith, map, distinctUntilChanged } from 'rxjs/operators';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { __decorate, __param } from 'tslib';

const LINUX_OS = {
    DEBIAN: 'Debian',
    KNOPPIX: 'Knoppix',
    MINT: 'Mint',
    UBUNTU: 'Ubuntu',
    KUBUNTU: 'Kubuntu',
    XUBUNTU: 'Xubuntu',
    LUBUNTU: 'Lubuntu',
    FEDORA: 'Fedora',
    RED_HAT: 'Red hat',
    MANDRIVA: 'Mandriva',
    GENTOO: 'Gentoo',
    SABAYON: 'Sabayon',
    SLACKWARE: 'Slackware',
    SUSE: 'Suse',
    CENT_OS: 'CentOS',
    BACKTRACK: 'Backtrack',
    GENERIC_LINUX: 'Generic Linux'
};

const WINDOWS_OS = {
    WINDOWS_XP: 'Windows XP',
    WINDOWS_VISTA: 'Windows Vista',
    WINDOWS_7: 'Windows 7',
    WINDOWS_8: 'Windows 8',
    WINDOWS_10: 'Windows 10',
    GENERIC_WINDOWS: 'Generic Windows'
};

const TABLET = {
    IPAD: 'Ipad',
    ANDROID: 'Android',
    WINDOWS_PHONE: 'Windows Phone',
    KINDLE: 'Kindle',
    GENERIC_TABLET: 'Generic Tablet'
};

const MOBILE = {
    IPHONE: 'Iphone',
    ANDROID: 'Android',
    WINDOWS_PHONE: 'Windows Phone',
    BLACKBERRY: 'Blackberry',
    GENERIC_MOBILE: 'Generic Mobile'
};

const OS_SYSTEMS = {
    WINDOWS: 'Windows',
    ANDROID: MOBILE.ANDROID,
    WINDOWS_PHONE: MOBILE.WINDOWS_PHONE,
    IOS: 'iOS',
    MAC_OS: 'Mac',
    LINUX: 'Linux',
    FIREFOX_OS: 'Firefox OS',
    CHROME_OS: 'Chrome OS'
};

const GAME_DEVICES = {
    PS4: 'Playstation 4',
    PS3: 'Playstation 3',
    XBOX_ONE: 'Xbox One',
    XBOX: 'Xbox',
    WII: 'Wii',
    WII_U: 'Wii U',
    NINTENDO_3DS: 'Nintendo 3DS',
    PLAYSTATION_VITA: 'Playstation Vita',
    PSP: 'PSP'
};

const SMART_TV = {
    CHROMECAST: 'Chromecast',
    APPLE_TV: 'Apple tv',
    GOOGLE_TV: 'Google tv',
    PS4: GAME_DEVICES.PS4,
    XBOX_ONE: GAME_DEVICES.XBOX_ONE,
    GENERIC_TV: 'Generic smartv'
};

const BOTS = {
    GENERIC_BOT: 'Generic Bot'
};

const BROWSER_NAMES = {
    CHROME: 'chrome',
    FIREFOX: 'firefox',
    IE: 'ie',
    SAFARI: 'safari',
    OPERA: 'opera',
    SILK: 'silk',
    YANDEX: 'yandex',
    NA: 'NA'
};

/**
 * @name reg-expressions.constants
 * @description Core reg-expressions.constants in ngx-responsive
 *
 * @license MIT
 */
/* export const GLOBAL_INPUTS = {
    BOOTSTRAP: ['xs', 'sm', 'md', 'lg', 'xl'],
    DEVICES: ['mobile', 'tablet', 'smarttv', 'desktop'],
    STANDARD: ['iphone', 'ipad', 'android mobile', 'android tablet', 'windows phone'],
    ORIENTATION: ['portrait', 'landscape'],
    BROWSERS: ['chrome', 'firefox', 'ie', 'safari', 'opera'],
    PIXEL_RATIO: ['1x', 'retina', '4k'],
    IE_VERSIONS: ['ie 9', 'ie 10', 'ie 11', 'ie +12']
}; */
const REG_WEARABLES = {
    IWATCH: ''
};
const REG_MOBILES = {
    ANDROID: {
        REG: /(android);?[\s\/]+([\d.]+)?/,
        VALUE: MOBILE.ANDROID
    },
    IPHONE: {
        REG: /(iphone\sos)\s([\d_]+)/,
        VALUE: MOBILE.IPHONE
    },
    WINDOWS_PHONE: {
        REG: /windows phone ([\d.]+)/,
        VALUE: MOBILE.WINDOWS_PHONE
    },
    BLACKBERRY: {
        REG: /(blackBerry).*version\/([\d.]+)/,
        VALUE: MOBILE.BLACKBERRY
    },
    BB10: {
        REG: /(bb10).*version\/([\d.]+)/,
        VALUE: MOBILE.BLACKBERRY
    },
    WEB_OS: {
        REG: /(webos|hpwos)[\s\/]([\d.]+)/,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    IPOD: {
        REG: /(ipod)(.*os\s([\d_]+))?/,
        VALUE: MOBILE.IPHONE
    },
    FIREFOX_OS: {
        REG: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    MOBI: {
        REG: /[^-]mobi/i,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    GENERIC_REG_1: {
        REG: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    GENERIC_REG_2: {
        REG: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        VALUE: MOBILE.GENERIC_MOBILE
    }
};
const REG_TABLETS = {
    IPAD: {
        REG: /(ipad).*os\s([\d_]+)/,
        VALUE: TABLET.IPAD
    },
    KINDLE: {
        REG: /kindle|silk|kfapw|kfarwi|kfaswi|kffowi|kfjw|kfmewi|kfot|kfsaw|kfsowi|kftbw|kfthw|kftt|wffowi/i,
        VALUE: TABLET.KINDLE
    },
    TABLET: {
        REG: /tablet/i,
        VALUE: TABLET.GENERIC_TABLET
    },
    PLAYBOOK: {
        REG: /rim\stablet|playbook/i,
        VALUE: TABLET.GENERIC_TABLET
    },
};
const REG_SMARTS_TV = {
    CHROMECAST: {
        REG: /crkey/i,
        VALUE: SMART_TV.CHROMECAST
    },
    APPLE_TV: {
        REG: /appletv/i,
        VALUE: SMART_TV.APPLE_TV
    },
    GOOGLE_TV: {
        REG: /(large screen)|googletv/i,
        VALUE: SMART_TV.GOOGLE_TV
    },
    PS4: {
        REG: /playstation 4/i,
        VALUE: SMART_TV.PS4
    },
    XBOX_ONE: {
        REG: /xbox one/i,
        VALUE: SMART_TV.XBOX_ONE
    },
    GENERIC_TV: {
        REG: /tv|smarttv|googletv|crkey|Sharp|THOMSON|THOM|Panasonic|Philips|NETTV|Maple_2011|appletv|Humax|Ikea|Loewe|Medion|hbbtv|pov_tv|Airties|netcast.tv|OWB|Grundig|Arcelik/i,
        VALUE: SMART_TV.GENERIC_TV
    }
};
const REG_GAME_DEVICES = {
    PS4: {
        REG: /playstation 4/i,
        VALUE: GAME_DEVICES.PS4
    },
    PS3: {
        REG: /playstation 3/i,
        VALUE: GAME_DEVICES.PS3
    },
    XBOX: {
        REG: /xbox/i,
        VALUE: GAME_DEVICES.XBOX
    },
    XBOX_ONE: {
        REG: /xbox one/i,
        VALUE: GAME_DEVICES.XBOX_ONE
    },
    WII_U: {
        REG: /nintendo wiiu/i,
        VALUE: GAME_DEVICES.WII_U
    },
    WII: {
        REG: /nintendo wii/i,
        VALUE: GAME_DEVICES.WII
    },
    PS_VITA: {
        REG: /playstation vita/i,
        VALUE: GAME_DEVICES.PLAYSTATION_VITA
    },
    NINTENDO_3DS: {
        REG: /nintendo 3ds/i,
        VALUE: GAME_DEVICES.NINTENDO_3DS
    },
    PSP: {
        REG: /psp/i,
        VALUE: GAME_DEVICES.PSP
    }
};
const REG_IE_VERSIONS = {
    MS_MSIE: {
        REG: /msie/i,
        VALUE: null
    },
    MS_TRIDENT: {
        REG: /trident/i,
        VALUE: null
    },
    MS_EDGE: {
        REG: /edg/i,
        VALUE: null
    }
};
const REG_BROWSERS = {
    CHROME: {
        REG: /(chrome|crios)\/([\d.]+)/,
        VALUE: BROWSER_NAMES.CHROME
    },
    FIREFOX: {
        REG: /firefox|iceweasel|fxios/i,
        VALUE: BROWSER_NAMES.FIREFOX
    },
    WEB_VIEW: {
        REG: /(iphone|ipod|ipad).*applewebkit(?!.*safari)/,
        VALUE: BROWSER_NAMES.SAFARI
    },
    SAFARI: {
        REG: /version\/([\d.]+)([^s](safari)|[^m]*(mobile)[^S]*(safari))/,
        VALUE: BROWSER_NAMES.SAFARI
    },
    OPERA: {
        REG: /opera|opr|opios/i,
        VALUE: BROWSER_NAMES.OPERA
    },
    IE: {
        REG: /msie|trident|edg/,
        VALUE: BROWSER_NAMES.IE
    },
    SILK: {
        REG: /silk/i,
        VALUE: BROWSER_NAMES.SILK
    },
    YANDEX: {
        REG: /yabrowser/i,
        VALUE: BROWSER_NAMES.YANDEX
    },
    NA: {
        REG: null,
        VALUE: BROWSER_NAMES.NA
    }
};
const REG_OS = {
    WINDOWS: {
        REG: /win\d{2}|windows/,
        VALUE: OS_SYSTEMS.WINDOWS
    },
    IOS: {
        REG: /(ipod|iphone|ipad)/i,
        VALUE: OS_SYSTEMS.IOS
    },
    MAC_OS: {
        REG: /macintosh/i,
        VALUE: OS_SYSTEMS.MAC_OS
    },
    ANDROID: {
        REG: /android/i,
        VALUE: OS_SYSTEMS.ANDROID
    },
    LINUX: {
        REG: /linux/i,
        VALUE: OS_SYSTEMS.LINUX
    },
    FIREFOX_OS: {
        REG: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
        VALUE: OS_SYSTEMS.FIREFOX_OS
    },
    CHROME_OS: {
        REG: /cros/,
        VALUE: OS_SYSTEMS.CHROME_OS
    },
    WINDOWS_PHONE: {
        REG: /windows phone/i,
        VALUE: OS_SYSTEMS.WINDOWS_PHONE
    }
};
const REG_SORT_NAMES = {
    MOZILLA: {
        REG: /mozilla/,
        VALUE: null
    },
    CHROME: {
        REG: /chrome/,
        VALUE: null
    },
    WEBKIT: {
        REG: /webkit/,
        VALUE: null
    },
    APPLE_WEBKIT: {
        REG: /applewebkit/,
        VALUE: null
    },
    SAFARI: {
        REG: /safari/,
        VALUE: null
    }
};
const REG_WINDOWS_OS_VERSION = {
    WINDOWS_3_11: {
        REG: /win16/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_95: {
        REG: /(windows 95|win95|windows_95)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_ME: {
        REG: /(win 9x 4.90|windows ME)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_98: {
        REG: /(windows 98|win98)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_CE: {
        REG: /windows ce/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_2000: {
        REG: /(windows nt 5.0|windows 2000)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_XP: {
        REG: /(windows nt 5.1|windows xp)/,
        VALUE: WINDOWS_OS.WINDOWS_XP
    },
    WINDOWS_SERVER_2003: {
        REG: /windows nt 5.2/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_VISTA: {
        REG: /windows nt 6.0|Windows Vista/,
        VALUE: WINDOWS_OS.WINDOWS_VISTA
    },
    WINDOWS_7: {
        REG: /(windows 7|windows nt 6.1)/,
        VALUE: WINDOWS_OS.WINDOWS_7
    },
    WINDOWS_8: {
        REG: /(windows 8|windows 8.1|windows nt 6.2 |windows nt 6.3)/,
        VALUE: WINDOWS_OS.WINDOWS_8
    },
    WINDOWS_10: {
        REG: /(windows nt 10.0)/,
        VALUE: WINDOWS_OS.WINDOWS_10
    },
    WINDOWS_NT_4_0: {
        REG: /(windows nt 4.0|winnt4.0|winnt|windows nt)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
};
const REG_WINDOWS_PHONE_OS_VERSION = {
    WINDOWS_PHONE_7_5: {
        REG: /(windows phone os 7.5)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_PHONE_8_1: {
        REG: /(windows phone 8.1)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_PHONE_10: {
        REG: /(windows phone 10)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    }
};
const REG_MAC_OS_VERSION = {
    MAC_OS: ''
};
const REG_LINUX_OS = {
    DEBIAN: {
        REG: /Debian/i,
        VALUE: LINUX_OS.DEBIAN
    },
    KNOPPIX: {
        REG: /Knoppix/i,
        VALUE: LINUX_OS.KNOPPIX
    },
    MINT: {
        REG: /Mint/i,
        VALUE: LINUX_OS.MINT
    },
    UBUNTU: {
        REG: /Ubuntu/i,
        VALUE: LINUX_OS.UBUNTU
    },
    KUBUNTU: {
        REG: /Kubuntu/i,
        VALUE: LINUX_OS.KUBUNTU
    },
    XUBUNTU: {
        REG: /Xubuntu/i,
        VALUE: LINUX_OS.XUBUNTU
    },
    LUBUNTU: {
        REG: /Lubuntu/i,
        VALUE: LINUX_OS.LUBUNTU
    },
    FEDORA: {
        REG: /Fedora/i,
        VALUE: LINUX_OS.FEDORA
    },
    RED_HAT: {
        REG: /Red Hat/i,
        VALUE: LINUX_OS.RED_HAT
    },
    MANDRIVA: {
        REG: /Mandriva/i,
        VALUE: LINUX_OS.MANDRIVA
    },
    GENTOO: {
        REG: /Gentoo/i,
        VALUE: LINUX_OS.GENTOO
    },
    SABAYON: {
        REG: /Sabayon/i,
        VALUE: LINUX_OS.SABAYON
    },
    SLACKWARE: {
        REG: /Slackware/i,
        VALUE: LINUX_OS.SLACKWARE
    },
    SUSE: {
        REG: /SUSE/i,
        VALUE: LINUX_OS.SUSE
    },
    CENT_OS: {
        REG: /CentOS/i,
        VALUE: LINUX_OS.CENT_OS
    },
    BACKTRACK: {
        REG: /BackTrack/i,
        VALUE: LINUX_OS.BACKTRACK
    }
};
const REG_BOTS = {
    GENERIC_BOT: {
        REG: /bot|googlebot|crawler|spider|robot|crawling/i,
        VALUE: BOTS.GENERIC_BOT
    }
};

const IE_VERSIONS = {
    IE_7: 'ie 7',
    IE_8: 'ie 8',
    IE_9: 'ie 9',
    IE_10: 'ie 10',
    IE_11: 'ie 11',
    IE_12: 'ie +12'
};

/**
 * @name user-agent.constants
 * @description Core user agent in ngx-responsive
 *
 * @license MIT
 */
const USER_AGENT = {
    device: null,
    browser: null,
    pixelratio: null,
    ie_version: {
        name: null,
        state: null
    },
    game_device: {
        name: null,
        state: null
    },
    smart_tv: {
        name: null,
        state: null
    },
    desktop: {
        name: null,
        state: null
    },
    tablet: {
        name: null,
        state: null
    },
    mobile: {
        name: null,
        state: null
    },
    window_os: {
        name: null,
        state: null
    },
    linux_os: {
        name: null,
        state: null
    },
    bot: null
};

/**
 * @name default-breackpoints.constants
 * @description Default breackpoints in responsive configuration.
 *
 * @author Manu Cutillas
 * @license MIT
 */
const DEFAULT_BREACKPOINTS = {
    breakPoints: {
        xs: { max: 767 },
        sm: { min: 768, max: 991 },
        md: { min: 992, max: 1199 },
        lg: { min: 1200, max: 1599 },
        xl: { min: 1600 }
    },
    debounceTime: 100
};

/**
 * @name constants
 * @description Core constants in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name linux.interfaces
 * @description Core linux interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name windows.interfaces
 * @description Core windows interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name mobile.interfaces
 * @description Core mobile interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name mobile.interfaces
 * @description Core mobile interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name os-systems.interfaces
 * @description Core os systems interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name smart-tv.interfaces
 * @description Core mobile interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name bot.interfaces
 * @description Core bot interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name user-agent.interfaces
 * @description Core user agent interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name interfaces
 * @description Core interfaces in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */
class ResponsiveConfig {
    constructor(_config) {
        this._config = _config;
        this.config = this._config;
    }
}
ResponsiveConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveConfig, deps: [{ token: 'config' }], target: i0.ɵɵFactoryTarget.Injectable });
ResponsiveConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveConfig, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }]; } });

/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */

class PlatformService {
    constructor(_platformId, responsiveConfig) {
        this._platformId = _platformId;
        this.responsiveConfig = responsiveConfig;
        this.isServer = isPlatformServer(_platformId);
        this.isBrowser = isPlatformBrowser(_platformId);
    }
    isEnabledForPlatform() {
        return this.isBrowser || this.responsiveConfig.config.renderOnServer;
    }
}
PlatformService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PlatformService, deps: [{ token: PLATFORM_ID }, { token: ResponsiveConfig }], target: i0.ɵɵFactoryTarget.Injectable });
PlatformService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PlatformService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PlatformService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: ResponsiveConfig, decorators: [{
                    type: Inject,
                    args: [ResponsiveConfig]
                }] }]; } });

/**
 * @name responsive-state
 * @description Core responsive state provider in ngx-responsive
 *
 * @license MIT
 */
class ResponsiveState {
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
ResponsiveState.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveState, deps: [{ token: PlatformService }, { token: ResponsiveConfig }], target: i0.ɵɵFactoryTarget.Injectable });
ResponsiveState.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveState });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveState, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PlatformService }, { type: ResponsiveConfig }]; } });

/**
 * @name responsive-state
 * @description Core responsive-state provider in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */
class RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.platformService = platformService;
        this._noRepeat = 0;
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.eventChanges = new EventEmitter();
        this._isEnabledForPlatform = this.platformService.isEnabledForPlatform();
    }
    setGrid(grid_state, directive) {
        switch (directive) {
            case 'bootstrap':
                this.set_active_subscriptions.bootstrap = true;
                break;
            case 'device':
                this.set_active_subscriptions.device = true;
                break;
            case 'standard':
                this.set_active_subscriptions.standard = true;
                break;
            case 'orientation':
                this.set_active_subscriptions.orientation = true;
                break;
            case 'browser':
                this.set_active_subscriptions.browser = true;
                break;
            case 'pixelratio':
                this.set_active_subscriptions.pixelratio = true;
                break;
            case 'ie':
                this.set_active_subscriptions.ie = true;
                break;
            case 'sizes':
                this.set_active_subscriptions.sizes = true;
                break;
        }
        if (directive === 'sizes') {
            this._sizes_grid_state = grid_state;
        }
        else {
            this._others_grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
        }
        this._directive = directive;
    }
    ngOnInit() {
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser = this._responsiveState.browser$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.device) {
                this._subscription_Device = this._responsiveState.device$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio = this._responsiveState.pixel$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation = this._responsiveState.orientation$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard = this._responsiveState.standard$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version = this._responsiveState.ieVersion$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes = this._responsiveState.ancho$.subscribe(this.updateView.bind(this));
            }
        }
    }
    ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap.unsubscribe();
            }
            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser.unsubscribe();
            }
            if (this.set_active_subscriptions.device) {
                this._subscription_Device.unsubscribe();
            }
            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio.unsubscribe();
            }
            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation.unsubscribe();
            }
            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard.unsubscribe();
            }
            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version.unsubscribe();
            }
            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes.unsubscribe();
            }
        }
    }
    showHide(show) {
        if (this._isEnabledForPlatform) {
            if (show) {
                if (this._noRepeat === 0) {
                    this._noRepeat = 1;
                    this.eventChanges.emit(true);
                    this.viewContainer.createEmbeddedView(this.templateRef);
                    this.cd.markForCheck();
                }
            }
            else {
                this._noRepeat = 0;
                this.eventChanges.emit(false);
                this.viewContainer.clear();
                this.cd.markForCheck();
            }
        }
    }
    updateView(value) {
        const showBoolean = this._directive === 'sizes' ?
            ((typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max)) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;
        this.showHide(this._showWhenTrue ? showBoolean : !showBoolean);
    }
}
RESPONSIVE_BASE.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: RESPONSIVE_BASE, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
RESPONSIVE_BASE.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: RESPONSIVE_BASE });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: RESPONSIVE_BASE, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; } });

/**
 * @name responsive-base
 * @description Core responsive-bae provider in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name providers
 * @description Core providers in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name linux.types
 * @description Linux types in ngx-responsive
 * @license MIT
 */

/**
 * @name windows.types
 * @description Core windows types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name mobile.types
 * @description Mobile types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name os-systems.types
 * @description Os systems types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name game-devices.types
 * @description Game devices types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name bot.types
 * @description Bot types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name browser-names.types
 * @description Browser names types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name ie-versions.types
 * @description IE Versions types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name types
 * @description Core types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name core
 * @description Core in ngx-responsive
 *
 * @license MIT
 */

/**
 *  @name bootstrap.directives
 *  @description bootstrap directives
 *  @license MIT
 */
class XlDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'xl';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
XlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: XlDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
XlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: XlDirective, selector: "[xl]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: XlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xl]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; } });
class LgDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'lg';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
LgDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LgDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
LgDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: LgDirective, selector: "[lg]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LgDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[lg]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; } });
class MdDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'md';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
MdDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
MdDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: MdDirective, selector: "[md]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MdDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[md]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; } });
class SmDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'sm';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
SmDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SmDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
SmDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: SmDirective, selector: "[sm]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SmDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[sm]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; } });
class XsDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'xs';
        this._showWhenTrue = true;
        this.setGrid(this._state, 'bootstrap');
    }
}
XsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: XsDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
XsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: XsDirective, selector: "[xs]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: XsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xs]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; } });
class ShowItBootstrapDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItBootstrap(grid_state) {
        this.setGrid(grid_state, 'bootstrap');
    }
}
ShowItBootstrapDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItBootstrapDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItBootstrapDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItBootstrapDirective, selector: "[showItBootstrap]", inputs: { showItBootstrap: "showItBootstrap" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItBootstrapDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItBootstrap]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { showItBootstrap: [{
                type: Input
            }] } });
class HideItBootstrapDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItBootstrap(grid_state) {
        this.setGrid(grid_state, 'bootstrap');
    }
}
HideItBootstrapDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItBootstrapDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItBootstrapDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItBootstrapDirective, selector: "[hideItBootstrap]", inputs: { hideItBootstrap: "hideItBootstrap" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItBootstrapDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItBootstrap]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { hideItBootstrap: [{
                type: Input
            }] } });

const BOOTSTRAP_DIRECTIVES = [
    XlDirective,
    LgDirective,
    MdDirective,
    SmDirective,
    XsDirective,
    ShowItBootstrapDirective,
    HideItBootstrapDirective
];

/**
 * @name browser-directives
 * @description Browser directives in ngx-responsive
 *
 * @license MIT
 */
class IsChromeDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'chrome';
        this._showWhenTrue = true;
    }
    set isChrome(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsChromeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsChromeDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsChromeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsChromeDirective, selector: "[isChrome]", inputs: { isChrome: "isChrome" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsChromeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isChrome]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isChrome: [{
                type: Input
            }] } });
class IsFirefoxDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'firefox';
        this._showWhenTrue = true;
    }
    set isFirefox(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsFirefoxDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsFirefoxDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsFirefoxDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsFirefoxDirective, selector: "[isFirefox]", inputs: { isFirefox: "isFirefox" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsFirefoxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isFirefox]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isFirefox: [{
                type: Input
            }] } });
class IsSafariDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'safari';
        this._showWhenTrue = true;
    }
    set isSafari(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsSafariDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsSafariDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsSafariDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsSafariDirective, selector: "[isSafari]", inputs: { isSafari: "isSafari" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsSafariDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isSafari]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isSafari: [{
                type: Input
            }] } });
class IsOperaDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'opera';
        this._showWhenTrue = true;
    }
    set isOpera(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsOperaDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsOperaDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsOperaDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsOperaDirective, selector: "[isOpera]", inputs: { isOpera: "isOpera" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsOperaDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isOpera]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isOpera: [{
                type: Input
            }] } });
class IsIEDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie';
        this._showWhenTrue = true;
    }
    set isIE(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsIEDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIEDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIEDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIEDirective, selector: "[isIE]", inputs: { isIE: "isIE" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIEDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isIE: [{
                type: Input
            }] } });
class ShowItBrowserDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItBrowser(grid_state) {
        this.setGrid(grid_state, 'browser');
    }
}
ShowItBrowserDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItBrowserDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItBrowserDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItBrowserDirective, selector: "[showItBrowser]", inputs: { showItBrowser: "showItBrowser" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItBrowserDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItBrowser]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { showItBrowser: [{
                type: Input
            }] } });
class HideItBrowserDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItBrowser(grid_state) {
        this.setGrid(grid_state, 'browser');
    }
}
HideItBrowserDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItBrowserDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItBrowserDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItBrowserDirective, selector: "[hideItBrowser]", inputs: { hideItBrowser: "hideItBrowser" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItBrowserDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItBrowser]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { hideItBrowser: [{
                type: Input
            }] } });
class IsIE9Directive extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie 9';
        this._showWhenTrue = true;
    }
    set isIE9(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE9Directive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE9Directive, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIE9Directive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIE9Directive, selector: "[isIE9]", inputs: { isIE9: "isIE9" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE9Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE9]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isIE9: [{
                type: Input
            }] } });
class IsIE10Directive extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie 10';
        this._showWhenTrue = true;
    }
    set isIE10(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE10Directive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE10Directive, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIE10Directive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIE10Directive, selector: "[isIE10]", inputs: { isIE10: "isIE10" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE10Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE10]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isIE10: [{
                type: Input
            }] } });
class IsIE11Directive extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie 11';
        this._showWhenTrue = true;
    }
    set isIE11(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE11Directive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE11Directive, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIE11Directive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIE11Directive, selector: "[isIE11]", inputs: { isIE11: "isIE11" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE11Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE11]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isIE11: [{
                type: Input
            }] } });
class IsIE12Directive extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'ie 12';
        this._showWhenTrue = true;
    }
    set isIE12(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE12Directive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE12Directive, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIE12Directive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIE12Directive, selector: "[isIE12]", inputs: { isIE12: "isIE12" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIE12Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIE12]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isIE12: [{
                type: Input
            }] } });
class ShowIEVersionDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showIEVersion(grid_state) {
        this.setGrid(grid_state, 'ie');
    }
}
ShowIEVersionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowIEVersionDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowIEVersionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowIEVersionDirective, selector: "[showIEVersion]", inputs: { showIEVersion: "showIEVersion" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowIEVersionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showIEVersion]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { showIEVersion: [{
                type: Input
            }] } });
class HideIEVersionDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideIEVersion(grid_state) {
        this.setGrid(grid_state, 'ie');
    }
}
HideIEVersionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideIEVersionDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideIEVersionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideIEVersionDirective, selector: "[hideIEVersion]", inputs: { hideIEVersion: "hideIEVersion" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideIEVersionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideIEVersion]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { hideIEVersion: [{
                type: Input
            }] } });

class BrowserInfo {
    constructor(_responsiveState, platformService) {
        this._responsiveState = _responsiveState;
        this.platformService = platformService;
        this._isEnabledForPlatform = null;
        this.replaySubject$ = new ReplaySubject();
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }
    connect() {
        if (this._isEnabledForPlatform) {
            this._subscription = this._responsiveState.browser$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isEnabledForPlatform) {
            this._subscription.unsubscribe();
        }
    }
    get getBrowser() {
        return this.replaySubject$.asObservable();
    }
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @name browser-info.rx
 * @description Browser info reactive service in ngx-responsive
 *
 * @license MIT
 */
class BrowserInfoRx extends BrowserInfo {
    constructor(_responsiveState, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
    }
}
BrowserInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoRx, deps: [{ token: ResponsiveState }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
BrowserInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: PlatformService }]; } });

/**
 * @name browser-info.directive
 * @description Browser info directive in ngx-responsive
 *
 * @license MIT
 */
class BrowserInfoDirective extends BrowserInfo {
    constructor(_responsiveState, cd, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.platformService = platformService;
        this.browser = new EventEmitter();
    }
    set browserInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.browser.emit(value);
        this.cd.markForCheck();
    }
}
BrowserInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoDirective, deps: [{ token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
BrowserInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: BrowserInfoDirective, selector: "browser-info", inputs: { browserInfo: "browserInfo" }, outputs: { browser: "browser" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'browser-info'
                }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { browser: [{
                type: Output
            }], browserInfo: [{
                type: Input
            }] } });

let IeInfo = class IeInfo {
    constructor(_responsiveState, _platformId) {
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
        this._isBrowser = null;
        this.replaySubject$ = new ReplaySubject();
        this._isBrowser = isPlatformBrowser(this._platformId);
    }
    connect() {
        if (this._isBrowser) {
            this._subscription = this._responsiveState.ieVersion$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isBrowser) {
            this._subscription.unsubscribe();
        }
    }
    get getIE() {
        return this.replaySubject$.asObservable();
    }
    _updateData(value) {
        this.replaySubject$.next(value);
    }
};
IeInfo = __decorate([
    __param(1, Inject(PLATFORM_ID))
], IeInfo);

/**
 * @name ie-info.rx
 * @description IE Info reactive service in ngx-responsive
 *
 * @license MIT
 */
class IeInfoRx extends IeInfo {
    constructor(_responsiveState, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
    }
}
IeInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoRx, deps: [{ token: ResponsiveState }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
IeInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

/**
 * @name ie-info.directives
 * @description IE Info directives in ngx-responsive
 *
 * @license MIT
 */
class IeInfoDirective extends IeInfo {
    constructor(_responsiveState, viewContainer, cd, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this._platformId = _platformId;
        this.ieVersion = new EventEmitter();
    }
    set ieInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.ieVersion.emit(value);
        this.cd.markForCheck();
    }
}
IeInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoDirective, deps: [{ token: ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
IeInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IeInfoDirective, selector: "ie-info", inputs: { ieInfo: "ieInfo" }, outputs: { ieVersion: "ieVersion" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ie-info' }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { ieInfo: [{
                type: Input
            }], ieVersion: [{
                type: Output
            }] } });

const BROWSER_DIRECTIVES = [
    IsChromeDirective,
    IsFirefoxDirective,
    IsSafariDirective,
    IsOperaDirective,
    IsIEDirective,
    IsIE9Directive,
    IsIE10Directive,
    IsIE11Directive,
    IsIE12Directive,
    ShowItBrowserDirective,
    HideItBrowserDirective,
    ShowIEVersionDirective,
    HideIEVersionDirective,
    BrowserInfoDirective,
    IeInfoDirective
];
const BROWSER_INFO_RX = [BrowserInfoRx];
const IE_INFO_RX = [IeInfoRx];

/**
 * @name custom-sizes.directives
 * @description Custom sizes directives in ngx-responsive
 *
 * @license MIT
 */
class ShowItSizesDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItSizes(_grid_state) {
        this.setGrid(_grid_state, 'sizes');
    }
}
ShowItSizesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItSizesDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItSizesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItSizesDirective, selector: "[showItSizes]", inputs: { showItSizes: "showItSizes" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItSizesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItSizes]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { showItSizes: [{
                type: Input
            }] } });
class HideItSizesDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItSizes(_grid_state) {
        this.setGrid(_grid_state, 'sizes');
    }
}
HideItSizesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItSizesDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItSizesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItSizesDirective, selector: "[hideItSizes]", inputs: { hideItSizes: "hideItSizes" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItSizesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItSizes]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { hideItSizes: [{
                type: Input
            }] } });

const CUSTOMSIZES_DIRECTIVES = [
    ShowItSizesDirective,
    HideItSizesDirective
];

/**
 * @name devices.directives
 * @description Devices directives in ngx-responsive
 *
 * @license MIT
 */
class IsSmartTvDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'smarttv';
        this._showWhenTrue = true;
    }
    set isSmartTv(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsSmartTvDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsSmartTvDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsSmartTvDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsSmartTvDirective, selector: "[isSmartTv]", inputs: { isSmartTv: "isSmartTv" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsSmartTvDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isSmartTv]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isSmartTv: [{
                type: Input
            }] } });
class IsDesktopDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'desktop';
        this._showWhenTrue = true;
    }
    set isDesktop(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsDesktopDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsDesktopDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsDesktopDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsDesktopDirective, selector: "[isDesktop]", inputs: { isDesktop: "isDesktop" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsDesktopDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isDesktop]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isDesktop: [{
                type: Input
            }] } });
class IsTabletDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'tablet';
        this._showWhenTrue = true;
    }
    set isTablet(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsTabletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsTabletDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsTabletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsTabletDirective, selector: "[isTablet]", inputs: { isTablet: "isTablet" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsTabletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isTablet]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isTablet: [{
                type: Input
            }] } });
class IsMobileDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'mobile';
        this._showWhenTrue = true;
    }
    set isMobile(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsMobileDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsMobileDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsMobileDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsMobileDirective, selector: "[isMobile]", inputs: { isMobile: "isMobile" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsMobileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isMobile]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isMobile: [{
                type: Input
            }] } });
class ShowItDeviceDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItDevice(grid_state) {
        this.setGrid(grid_state, 'device');
    }
}
ShowItDeviceDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItDeviceDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItDeviceDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItDeviceDirective, selector: "[showItDevice]", inputs: { showItDevice: "showItDevice" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItDeviceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItDevice]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { showItDevice: [{
                type: Input
            }] } });
class HideItDeviceDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItDevice(grid_state) {
        this.setGrid(grid_state, 'device');
    }
}
HideItDeviceDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItDeviceDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItDeviceDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItDeviceDirective, selector: "[hideItDevice]", inputs: { hideItDevice: "hideItDevice" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItDeviceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItDevice]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { hideItDevice: [{
                type: Input
            }] } });
class IsIphoneDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'iphone';
        this._showWhenTrue = true;
    }
    set isIphone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsIphoneDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIphoneDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIphoneDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIphoneDirective, selector: "[isIphone]", inputs: { isIphone: "isIphone" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIphoneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIphone]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isIphone: [{
                type: Input
            }] } });
class IsIpadDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'iphone';
        this._showWhenTrue = true;
    }
    set isIphone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsIpadDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIpadDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIpadDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIpadDirective, selector: "[isIpad]", inputs: { isIphone: "isIphone" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIpadDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIpad]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isIphone: [{
                type: Input
            }] } });
class IsAndroidMobileDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'android mobile';
        this._showWhenTrue = true;
    }
    set isAndroidMobile(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsAndroidMobileDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsAndroidMobileDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsAndroidMobileDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsAndroidMobileDirective, selector: "[isAndroidMobile]", inputs: { isAndroidMobile: "isAndroidMobile" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsAndroidMobileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isAndroidMobile]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isAndroidMobile: [{
                type: Input
            }] } });
class IsAndroidTabletDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'android tablet';
        this._showWhenTrue = true;
    }
    set isAndroidTablet(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsAndroidTabletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsAndroidTabletDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsAndroidTabletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsAndroidTabletDirective, selector: "[isAndroidTablet]", inputs: { isAndroidTablet: "isAndroidTablet" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsAndroidTabletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isAndroidTablet]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isAndroidTablet: [{
                type: Input
            }] } });
class IsWindowsPhoneDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'windows phone';
        this._showWhenTrue = true;
    }
    set isWindowsPhone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsWindowsPhoneDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsWindowsPhoneDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsWindowsPhoneDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsWindowsPhoneDirective, selector: "[isWindowsPhone]", inputs: { isWindowsPhone: "isWindowsPhone" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsWindowsPhoneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isWindowsPhone]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isWindowsPhone: [{
                type: Input
            }] } });
class ShowItStandardDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItStandard(grid_state) {
        this.setGrid(grid_state, 'standard');
    }
}
ShowItStandardDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItStandardDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItStandardDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItStandardDirective, selector: "[showItStandard]", inputs: { showItStandard: "showItStandard" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItStandardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItStandard]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { showItStandard: [{
                type: Input
            }] } });
class HideItStandardDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItStandard(grid_state) {
        this.setGrid(grid_state, 'standard');
    }
}
HideItStandardDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItStandardDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItStandardDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItStandardDirective, selector: "[hideItStandard]", inputs: { hideItStandard: "hideItStandard" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItStandardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItStandard]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { hideItStandard: [{
                type: Input
            }] } });
class IsPortraitDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'portrait';
        this._showWhenTrue = false;
    }
    set isPortrait(grid_state) {
        this.setGrid(this._state, 'orientation');
    }
}
IsPortraitDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsPortraitDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsPortraitDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsPortraitDirective, selector: "[isPortrait]", inputs: { isPortrait: "isPortrait" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsPortraitDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isPortrait]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isPortrait: [{
                type: Input
            }] } });
class IsLandscapeDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'landscape';
        this._showWhenTrue = false;
    }
    set isLandscape(grid_state) {
        this.setGrid(this._state, 'orientation');
    }
}
IsLandscapeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsLandscapeDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsLandscapeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsLandscapeDirective, selector: "[isLandscape]", inputs: { isLandscape: "isLandscape" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsLandscapeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isLandscape]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isLandscape: [{
                type: Input
            }] } });

let DevicesInfo = class DevicesInfo {
    constructor(_responsiveState, _platformId) {
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
        this._isBrowser = null;
        this.replaySubject$ = new ReplaySubject();
        this._isBrowser = isPlatformBrowser(this._platformId);
    }
    connect() {
        if (this._isBrowser) {
            this._subscription = this._responsiveState.device$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isBrowser) {
            this._subscription.unsubscribe();
        }
    }
    get getDevice() {
        return this.replaySubject$.asObservable();
    }
    _updateData(value) {
        this.replaySubject$.next(value);
    }
};
DevicesInfo = __decorate([
    __param(1, Inject(PLATFORM_ID))
], DevicesInfo);

/**
 * @name devices-info.directive
 * @description devices-info directive in ngx-responsive
 *
 * @license MIT
 */
class DeviceInfoDirective extends DevicesInfo {
    constructor(_responsiveState, viewContainer, cd, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this._platformId = _platformId;
        this.device = new EventEmitter();
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.device.emit(value);
        this.cd.markForCheck();
    }
}
DeviceInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoDirective, deps: [{ token: ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
DeviceInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: DeviceInfoDirective, selector: "device-info", outputs: { device: "device" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'device-info' }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { device: [{
                type: Output
            }] } });

let DeviceStandardInfo = class DeviceStandardInfo {
    constructor(_responsiveState, _platformId) {
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
        this._isBrowser = null;
        this.replaySubject$ = new ReplaySubject();
        this._isBrowser = isPlatformBrowser(this._platformId);
    }
    connect() {
        if (this._isBrowser) {
            this._subscription = this._responsiveState.standard$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isBrowser) {
            this._subscription.unsubscribe();
        }
    }
    get getStandardDevice() {
        return this.replaySubject$.asObservable();
    }
    _updateData(value) {
        this.replaySubject$.next(value);
    }
};
DeviceStandardInfo = __decorate([
    __param(1, Inject(PLATFORM_ID))
], DeviceStandardInfo);

/**
 * @name devices-standard-info.directive
 * @description devices-standard-info directive in ngx-responsive
 *
 * @license MIT
 */
class DeviceStandardInfoDirective extends DeviceStandardInfo {
    constructor(_responsiveState, viewContainer, cd, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this._platformId = _platformId;
        this.standard = new EventEmitter();
    }
    set deviceStandardInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.standard.emit(value);
        this.cd.markForCheck();
    }
}
DeviceStandardInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoDirective, deps: [{ token: ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
DeviceStandardInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: DeviceStandardInfoDirective, selector: "device-standard-info", inputs: { deviceStandardInfo: "deviceStandardInfo" }, outputs: { standard: "standard" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'device-standard-info' }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { deviceStandardInfo: [{
                type: Input
            }], standard: [{
                type: Output
            }] } });

class OrientationInfo {
    constructor(_responsiveState, platformService) {
        this._responsiveState = _responsiveState;
        this._isEnabledForPlatform = null;
        this.replaySubject$ = new ReplaySubject();
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }
    connect() {
        if (this._isEnabledForPlatform) {
            this._subscription = this._responsiveState.orientation$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isEnabledForPlatform) {
            this._subscription.unsubscribe();
        }
    }
    get getOrientation() {
        return this.replaySubject$.asObservable();
    }
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @name orientation-info.directive
 * @description Device orientation directive in ngx-responsive
 *
 * @license MIT
 */
class OrientationInfoDirective extends OrientationInfo {
    constructor(_responsiveState, viewContainer, cd, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.orientation = new EventEmitter();
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.orientation.emit(value);
        this.cd.markForCheck();
    }
}
OrientationInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoDirective, deps: [{ token: ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
OrientationInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: OrientationInfoDirective, selector: "orientation-info", outputs: { orientation: "orientation" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'orientation-info' }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { orientation: [{
                type: Output
            }] } });

/**
 * @name devices-info.rx
 * @description devices-info reactive service in ngx-responsive
 *
 * @license MIT
 */
class DeviceInfoRx extends DevicesInfo {
    constructor(_responsiveState, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
    }
}
DeviceInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoRx, deps: [{ token: ResponsiveState }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
DeviceInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

/**
 * @name devices-standard-info.rx
 * @description devices-standard reactive service in ngx-responsive
 *
 *
 * @license MIT
 */
class DeviceStandardInfoRx extends DeviceStandardInfo {
    constructor(_responsiveState, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
    }
}
DeviceStandardInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoRx, deps: [{ token: ResponsiveState }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
DeviceStandardInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

/**
 * @name orientation-info.rx
 * @description Orientation reactive service in ngx-responsive
 *
 * @license MIT
 */
class OrientationInfoRx extends OrientationInfo {
    constructor(_responsiveState, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
    }
}
OrientationInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoRx, deps: [{ token: ResponsiveState }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
OrientationInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: PlatformService }]; } });

const DEVICES_DIRECTIVES = [
    IsDesktopDirective,
    IsTabletDirective,
    IsMobileDirective,
    IsSmartTvDirective,
    ShowItDeviceDirective,
    HideItDeviceDirective,
    IsIphoneDirective,
    IsIpadDirective,
    IsAndroidMobileDirective,
    IsAndroidTabletDirective,
    IsWindowsPhoneDirective,
    ShowItStandardDirective,
    HideItStandardDirective,
    IsPortraitDirective,
    IsLandscapeDirective,
    DeviceInfoDirective,
    DeviceStandardInfoDirective,
    OrientationInfoDirective
];
const DEVICES_INFO_RX = [
    DeviceInfoRx,
    DeviceStandardInfoRx,
    OrientationInfoRx
];

/**
 * @name pixelratio.directives
 * @description pixelratio directives in ngx-responsive
 *
 * @license MIT
 */
/*======== 1x =========*/
class Is1xPixelDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = '1x';
        this._showWhenTrue = true;
    }
    set is1xPixel(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
Is1xPixelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: Is1xPixelDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
Is1xPixelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: Is1xPixelDirective, selector: "[is1xPixel]", inputs: { is1xPixel: "is1xPixel" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: Is1xPixelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[is1xPixel]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { is1xPixel: [{
                type: Input
            }] } });
/*======== RETINA =========*/
class IsRetinaDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'retina';
        this._showWhenTrue = true;
    }
    set isRetina(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
IsRetinaDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsRetinaDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsRetinaDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsRetinaDirective, selector: "[isRetina]", inputs: { isRetina: "isRetina" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsRetinaDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isRetina]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isRetina: [{
                type: Input
            }] } });
/*======== 4K =========*/
class Is4kDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = '4k';
        this._showWhenTrue = true;
    }
    set isRetina(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
Is4kDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: Is4kDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
Is4kDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: Is4kDirective, selector: "[is4k]", inputs: { isRetina: "isRetina" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: Is4kDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[is4k]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { isRetina: [{
                type: Input
            }] } });
/*======== DeviceInfo =========*/
class PixelRatioInfoDirective {
    constructor(_responsiveState, viewContainer, cd, platformService) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this._isEnabledForPlatform = null;
        this.pixelratio = new EventEmitter();
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }
    set pixelratioInfo(grid_state) {
        this.updateData(this.currentstate);
    }
    ngOnInit() {
        if (this._isEnabledForPlatform) {
            this._subscription = this._responsiveState.pixel$.subscribe(this.updateData.bind(this));
        }
    }
    ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            this._subscription.unsubscribe();
        }
    }
    updateData(value) {
        const update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
            this.cd.markForCheck();
        }
    }
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    }
}
PixelRatioInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PixelRatioInfoDirective, deps: [{ token: ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
PixelRatioInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: PixelRatioInfoDirective, selector: "pixel-ratio-info", inputs: { pixelratioInfo: "pixelratioInfo" }, outputs: { pixelratio: "pixelratio" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PixelRatioInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'pixel-ratio-info' }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { pixelratioInfo: [{
                type: Input
            }], pixelratio: [{
                type: Output
            }] } });

const PIXELRATIO_DIRECTIVES = [
    Is1xPixelDirective,
    IsRetinaDirective,
    Is4kDirective,
    PixelRatioInfoDirective
];

/**
 * @name responsive
 * @description Responsive directive in ngx-responsive
 *
 * @license MIT
 */
class ResponsiveDirective {
    constructor(templateRef, _responsiveState, viewContainer, cd, platformService) {
        this.templateRef = templateRef;
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.changes = new EventEmitter();
        this._windows = null;
        this._window = null;
        this._isEnabledForPlatform = null;
        this.set_values = {
            bootstrap: '',
            browser: '',
            device: '',
            pixelratio: '',
            orientation: '',
            standard: '',
            ie: '',
            sizes: 0
        };
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.match_multiple = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this._showWhenTrue = true;
        this._globalNoRepeat = 0;
        this._bootstrapNoRepeat = 0;
        this._deviceNoRepeat = 0;
        this._standardNoRepeat = 0;
        this._orientationNoRepeat = 0;
        this._browserNoRepeat = 0;
        this._pixelratioNoRepeat = 0;
        this._ieNoRepeat = 0;
        this._sizesNoRepeat = 0;
        this._bootstrap_user_param = [];
        this._devices_user_param = [];
        this._standard_user_param = [];
        this._orientation_user_param = [];
        this._browser_user_param = [];
        this._pixelratio_user_param = [];
        this._ie_user_param = [];
        this._sizes_user_param = [0, Number.MAX_VALUE];
        this._sizes_window = 'window';
        // private _sizes_container = null;
        this._actives = [];
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }
    set responsive(config) {
        this._config = config;
        this.init_responsive();
    }
    get config() {
        return this._config;
    }
    set responsiveContainer(value) {
        this._responsiveContainer = value;
        if (this.config) {
            if (this._sizes_window !== null && this._sizes_window !== "window") {
                throw new Error('Responsive directive cannot use window AND responsiveContainer together');
            }
            this.init_responsive();
        }
    }
    get responsiveContainer() {
        return this._responsiveContainer;
    }
    init_responsive() {
        const config = this.config;
        if (this.isJSON(config)) {
            if (!!config.bootstrap && this._bootstrapNoRepeat === 0) {
                this._bootstrap_user_param = (Array.isArray(config.bootstrap) ? config.bootstrap : [config.bootstrap]);
                this._bootstrapNoRepeat = 1;
                this.set_active_subscriptions.bootstrap = true;
            }
            if (!!config.device && this._deviceNoRepeat === 0) {
                this._devices_user_param = (Array.isArray(config.device) ? config.device : [config.device]);
                this._deviceNoRepeat = 1;
                this.set_active_subscriptions.device = true;
            }
            if (!!config.standard && this._standardNoRepeat === 0) {
                this._standard_user_param = (Array.isArray(config.standard) ? config.standard : [config.standard]);
                this._standardNoRepeat = 1;
                this.set_active_subscriptions.standard = true;
            }
            if (!!config.orientation && this._orientationNoRepeat === 0) {
                this._orientation_user_param = (Array.isArray(config.orientation) ? config.orientation : [config.orientation]);
                this._orientationNoRepeat = 1;
                this.set_active_subscriptions.orientation = true;
            }
            if (!!config.browser && this._browserNoRepeat === 0) {
                this._browser_user_param = (Array.isArray(config.browser) ? config.browser : [config.browser]);
                this._browserNoRepeat = 1;
                this.set_active_subscriptions.browser = true;
            }
            if (!!config.pixelratio && this._pixelratioNoRepeat === 0) {
                this._pixelratio_user_param = (Array.isArray(config.pixelratio) ? config.pixelratio : [config.pixelratio]);
                this._pixelratioNoRepeat = 1;
                this.set_active_subscriptions.pixelratio = true;
            }
            if (!!config.ie && this._ieNoRepeat === 0) {
                this._ie_user_param = (Array.isArray(config.ie) ? config.ie : [config.ie]);
                this._ieNoRepeat = 1;
                this.set_active_subscriptions.ie = true;
            }
            if (!!config.sizes && this._sizesNoRepeat === 0) {
                const _min = config.sizes.min || 0;
                const _max = config.sizes.max || Number.MAX_VALUE;
                const _win = config.sizes.window;
                if (_win !== undefined) {
                    this._sizes_window = _win;
                }
                // this._sizes_container = value.sizes.container;
                this._sizes_user_param = [_min, _max];
                this._sizesNoRepeat = 1;
                this.set_active_subscriptions.sizes = true;
            }
        }
        else if (Array.isArray(config)) {
            throw new Error('Responsive directive don´t work with a only array parameter');
        }
        else if (typeof config === 'string') {
            throw new Error('Responsive directive don´t work with a only string parameter');
        }
        else if (typeof config === 'number') {
            throw new Error('Responsive directive don´t work with a only number parameter');
        }
        else if (typeof config === 'undefined' || config === null) {
            throw new Error('Responsive directive don´t work without a param');
        }
        for (let key in this.set_active_subscriptions) {
            if (this.set_active_subscriptions[key]) {
                this._actives.push(key);
            }
        }
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateBootstrap.bind(this));
            }
            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser = this._responsiveState.browser$.subscribe(this.updateBrowser.bind(this));
            }
            if (this.set_active_subscriptions.device) {
                this._subscription_Device = this._responsiveState.device$.subscribe(this.updateDevice.bind(this));
            }
            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio = this._responsiveState.pixel$.subscribe(this.updatePixelRatio.bind(this));
            }
            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation = this._responsiveState.orientation$.subscribe(this.updateOrientation.bind(this));
            }
            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard = this._responsiveState.standard$.subscribe(this.updateStandard.bind(this));
            }
            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version = this._responsiveState.ieVersion$.subscribe(this.updateIEversion.bind(this));
            }
            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes = this._responsiveState.ancho$.subscribe(this.updateSizes.bind(this));
            }
        }
    }
    updateBootstrap(value) {
        const _update = this._ifValueChanged(this._noRepeatBootstrapName, value);
        if (_update) {
            this.set_values.bootstrap = value;
        }
        this.updateEvent(this.set_values.bootstrap, 'bootstrap');
    }
    updateBrowser(value) {
        this.set_values.browser = value;
        this.updateEvent(this.set_values.browser, 'browser');
    }
    updateDevice(value) {
        this.set_values.device = value;
        this.updateEvent(this.set_values.device, 'device');
    }
    updatePixelRatio(value) {
        this.set_values.pixelratio = value;
        this.updateEvent(this.set_values.pixelratio, 'pixelratio');
    }
    updateOrientation(value) {
        this.set_values.orientation = value;
        this.updateEvent(this.set_values.orientation, 'orientation');
    }
    updateStandard(value) {
        this.set_values.standard = value;
        this.updateEvent(this.set_values.standard, 'standard');
    }
    updateIEversion(value) {
        this.set_values.ie = value;
        this.updateEvent(this.set_values.ie, 'ie');
    }
    updateSizes(value) {
        if (this.responsiveContainer) {
            this.set_values.sizes = this._isEnabledForPlatform ? this.responsiveContainer.getWidth() : 0;
        }
        else if (this._sizes_window) {
            this.set_values.sizes = this._responsiveState.getWidth(this._sizes_window);
        }
        else {
            this.set_values.sizes = value;
        }
        this.updateEvent(this.set_values.sizes, 'sizes');
    }
    updateEvent(param, type_directive) {
        if (!!this._showWhenTrue) {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(this._bootstrap_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'device':
                    this.showHideOperations(this._devices_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(this._standard_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(this._orientation_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(this._browser_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(this._pixelratio_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(this._ie_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations((param >= this._sizes_user_param[0] &&
                        param < this._sizes_user_param[1]), type_directive);
                    break;
            }
        }
        else {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(!(this._bootstrap_user_param.indexOf(param)), type_directive);
                    break;
                case 'device':
                    this.showHideOperations(!(this._devices_user_param.indexOf(param)), type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(!(this._standard_user_param.indexOf(param)), type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(!(this._orientation_user_param.indexOf(param)), type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(!(this._browser_user_param.indexOf(param)), type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(!(this._pixelratio_user_param.indexOf(param)), type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(!(this._ie_user_param.indexOf(param)), type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(!((param >= this._sizes_user_param[0] &&
                        param < this._sizes_user_param[1])), type_directive);
                    break;
            }
        }
    }
    showHideOperations(show, type_directive) {
        const global_state = this.matchValues(show, type_directive);
        if (!!global_state) {
            if (this._globalNoRepeat === 0) {
                this._globalNoRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.changes.emit(true);
                this.cd.markForCheck();
            }
        }
        else {
            this._globalNoRepeat = 0;
            this.changes.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    }
    matchValues(show, type_directive) {
        let match = true;
        if (show) {
            this.match_multiple[type_directive] = true;
        }
        else {
            this.match_multiple[type_directive] = false;
        }
        for (let all_key in this.match_multiple) {
            for (let active of this._actives) {
                if (all_key == active && this.match_multiple[all_key] === false)
                    return match = false;
            }
        }
        return match;
    }
    ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap.unsubscribe();
            }
            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser.unsubscribe();
            }
            if (this.set_active_subscriptions.device) {
                this._subscription_Device.unsubscribe();
            }
            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio.unsubscribe();
            }
            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation.unsubscribe();
            }
            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard.unsubscribe();
            }
            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version.unsubscribe();
            }
            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes.unsubscribe();
            }
        }
    }
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeatBootstrapName = newValue;
            return true;
        }
    }
    isJSON(value) {
        try {
            JSON.stringify(value);
            return true;
        }
        catch (ex) {
            return false;
        }
    }
}
ResponsiveDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveDirective, deps: [{ token: i0.TemplateRef }, { token: ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ResponsiveDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ResponsiveDirective, selector: "[responsive]", inputs: { responsive: "responsive", responsiveContainer: "responsiveContainer" }, outputs: { changes: "changes" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[responsive]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { responsive: [{
                type: Input
            }], responsiveContainer: [{
                type: Input
            }], changes: [{
                type: Output
            }] } });

const RESPONSIVE_DIRECTIVE = [ResponsiveDirective];

/**
 * @name responsive-size-info
 * @description Responsive Size Info abstract class in ngx-responsive
 *
 * @license MIT
 */
class ResponsiveSizeInfo {
    constructor(_responsiveState, platformService) {
        this._responsiveState = _responsiveState;
        this._isEnabledForPlatform = null;
        this.replaySubject$ = new ReplaySubject();
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }
    connect() {
        if (this._isEnabledForPlatform) {
            this._subscription = this._responsiveState.elemento$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isEnabledForPlatform) {
            this._subscription.unsubscribe();
        }
    }
    get getResponsiveSize() {
        return this.replaySubject$.asObservable();
    }
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @name responsive-size-info.directive
 * @description Responsive Size Info directive in ngx-responsive
 *
 * @license MIT
 */
class ResponsiveSizeInfoDirective extends ResponsiveSizeInfo {
    constructor(_responsiveState, viewContainer, cd, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.statechanges = new EventEmitter();
    }
    set responsiveSizeInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.statechanges.emit(value);
        this.cd.markForCheck();
    }
}
ResponsiveSizeInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoDirective, deps: [{ token: ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ResponsiveSizeInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ResponsiveSizeInfoDirective, selector: "responsiveSizeInfo", inputs: { responsiveSizeInfo: "responsiveSizeInfo" }, outputs: { statechanges: "statechanges" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'responsiveSizeInfo' }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { responsiveSizeInfo: [{
                type: Input
            }], statechanges: [{
                type: Output
            }] } });

/**
 * @name responsive-size-info.rx
 * @description Responsive Size Info reactive service in ngx-responsive
 *
 * @license MIT
 */
class ResponsiveSizeInfoRx extends ResponsiveSizeInfo {
    constructor(_responsiveState, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
    }
}
ResponsiveSizeInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoRx, deps: [{ token: ResponsiveState }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
ResponsiveSizeInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: PlatformService }]; } });

const RESPONSIVE_SIZE_INFO_DIRECTIVE = [ResponsiveSizeInfoDirective];
const RESPONSIVE_SIZE_INFO_RX = [ResponsiveSizeInfoRx];

/**
 * @name responsive-window
 * @description responsiveWindow Directive in ngx-responsive
 *
 * @license MIT
 */
class ResponsiveWindowDirective {
    constructor(_responsiveState, el, cd, platformService, _responsiveConfig) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.cd = cd;
        this._responsiveConfig = _responsiveConfig;
        this._isEnabledForPlatform = null;
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
        if (this._isEnabledForPlatform) {
            this.element = el.nativeElement;
        }
        this.currentBreakpoint$ = this._responsiveState
            .ancho$
            .pipe(map(this.getCurrentBreakpoint.bind(this)));
    }
    ngOnInit() {
        if (this._isEnabledForPlatform) {
            this._responsiveState.registerWindow(this);
        }
    }
    ngDoCheck() {
        if (this._isEnabledForPlatform) {
            const _update = this._ifValueChanged(this._noRepeat, this.name);
            if (_update) {
                this._responsiveState.unregisterWindow(this);
                this._responsiveState.registerWindow(this);
                this.cd.markForCheck();
            }
        }
    }
    ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            this._responsiveState.unregisterWindow(this);
        }
    }
    getWidth() {
        return (this._isEnabledForPlatform) ? this.element.offsetWidth : 0;
    }
    getCurrentBreakpoint() {
        const width = this.getWidth();
        // console.error("getCurrentBreakpoint", width)
        if (this._responsiveConfig.config.breakPoints.xl.min <= width) {
            return 'xl';
        }
        else if (this._responsiveConfig.config.breakPoints.lg.max >= width && this._responsiveConfig.config.breakPoints.lg.min <= width) {
            return 'lg';
        }
        else if (this._responsiveConfig.config.breakPoints.md.max >= width && this._responsiveConfig.config.breakPoints.md.min <= width) {
            return 'md';
        }
        else if (this._responsiveConfig.config.breakPoints.sm.max >= width && this._responsiveConfig.config.breakPoints.sm.min <= width) {
            return 'sm';
        }
        else if (this._responsiveConfig.config.breakPoints.xs.max >= width) {
            return 'xs';
        }
    }
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeat = newValue;
            return true;
        }
    }
}
ResponsiveWindowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveWindowDirective, deps: [{ token: ResponsiveState }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: PlatformService }, { token: ResponsiveConfig }], target: i0.ɵɵFactoryTarget.Directive });
ResponsiveWindowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ResponsiveWindowDirective, selector: "[responsive-window]", inputs: { name: ["responsive-window", "name"] }, exportAs: ["container"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveWindowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[responsive-window]",
                    exportAs: "container"
                }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: PlatformService }, { type: ResponsiveConfig }]; }, propDecorators: { name: [{
                type: Input,
                args: ['responsive-window']
            }] } });

const RESPONSIVEWINDOW_DIRECTIVE = [ResponsiveWindowDirective];

let UserAgentInfo = class UserAgentInfo {
    constructor(_responsiveState, _platformId) {
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
        this.replaySubject$ = new ReplaySubject();
        this._isBrowser = null;
        this._isBrowser = isPlatformBrowser(this._platformId);
    }
    connect() {
        if (this._isBrowser) {
            this._subscription = this._responsiveState.userAgent$.pipe(distinctUntilChanged())
                .subscribe((data) => {
                this._emitUserAgent(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    disconnect() {
        if (this._isBrowser) {
            this._subscription.unsubscribe();
        }
    }
    get getUserAgent() {
        return this.replaySubject$.asObservable();
    }
    _emitUserAgent(value) {
        this.replaySubject$.next(value);
    }
};
UserAgentInfo = __decorate([
    __param(1, Inject(PLATFORM_ID))
], UserAgentInfo);

/**
 * @name useragent-info.directive
 * @description Useragent info directive in ngx-responsive
 *
 * @license MIT
 */
class UserAgentInfoDirective extends UserAgentInfo {
    constructor(_responsiveState, cd, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.info = new EventEmitter();
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _emitUserAgent(value) {
        this.info.emit(value);
        this.cd.markForCheck();
    }
}
UserAgentInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoDirective, deps: [{ token: ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
UserAgentInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: UserAgentInfoDirective, selector: "user-agent-info", outputs: { info: "info" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'user-agent-info'
                }]
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: PlatformService }]; }, propDecorators: { info: [{
                type: Output
            }] } });

/**
 * @name useragent-info.rx
 * @description Useragent info reactive service in ngx-responsive
 *
 * @license MIT
 */
class UserAgentInfoRx extends UserAgentInfo {
    constructor(_responsiveState, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
    }
}
UserAgentInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoRx, deps: [{ token: ResponsiveState }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
UserAgentInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ResponsiveState }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

const USERAGENT_INFO_DIRECTIVE = [UserAgentInfoDirective];
const USERAGENT_INFO_RX = [UserAgentInfoRx];

/**
 * @name directives
 * @description Directives in ngx-responsive
 *
 * @license MIT
 */

/**
 * @name responsive.module
 * @description Core module in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
const RESPONSIVE_CONFIGURATION = new InjectionToken('config');
function responsiveConfiguration(config) {
    return new ResponsiveConfig(config);
}
class ResponsiveModule {
    static forRoot(config = null) {
        return {
            ngModule: ResponsiveModule,
            providers: [{
                    provide: RESPONSIVE_CONFIGURATION,
                    useValue: (config !== null) ? config : {
                        breakPoints: {
                            xs: { max: 767 },
                            sm: { min: 768, max: 991 },
                            md: { min: 992, max: 1199 },
                            lg: { min: 1200, max: 1599 },
                            xl: { min: 1600 }
                        },
                        debounceTime: 100,
                        renderOnServer: false
                    }
                }, {
                    provide: ResponsiveConfig,
                    useFactory: responsiveConfiguration,
                    deps: [RESPONSIVE_CONFIGURATION]
                },
                ResponsiveState,
                PlatformService,
                RESPONSIVE_SIZE_INFO_RX,
                USERAGENT_INFO_RX,
                BROWSER_INFO_RX,
                IE_INFO_RX,
                DEVICES_INFO_RX]
        };
    }
}
ResponsiveModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResponsiveModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveModule, declarations: [XlDirective, LgDirective, MdDirective, SmDirective, XsDirective, ShowItBootstrapDirective, HideItBootstrapDirective, IsChromeDirective, IsFirefoxDirective, IsSafariDirective, IsOperaDirective, IsIEDirective, IsIE9Directive, IsIE10Directive, IsIE11Directive, IsIE12Directive, ShowItBrowserDirective, HideItBrowserDirective, ShowIEVersionDirective, HideIEVersionDirective, BrowserInfoDirective, IeInfoDirective, ShowItSizesDirective, HideItSizesDirective, IsDesktopDirective, IsTabletDirective, IsMobileDirective, IsSmartTvDirective, ShowItDeviceDirective, HideItDeviceDirective, IsIphoneDirective, IsIpadDirective, IsAndroidMobileDirective, IsAndroidTabletDirective, IsWindowsPhoneDirective, ShowItStandardDirective, HideItStandardDirective, IsPortraitDirective, IsLandscapeDirective, DeviceInfoDirective, DeviceStandardInfoDirective, OrientationInfoDirective, Is1xPixelDirective, IsRetinaDirective, Is4kDirective, PixelRatioInfoDirective, ResponsiveDirective, ResponsiveWindowDirective, UserAgentInfoDirective, ResponsiveSizeInfoDirective], exports: [XlDirective, LgDirective, MdDirective, SmDirective, XsDirective, ShowItBootstrapDirective, HideItBootstrapDirective, IsChromeDirective, IsFirefoxDirective, IsSafariDirective, IsOperaDirective, IsIEDirective, IsIE9Directive, IsIE10Directive, IsIE11Directive, IsIE12Directive, ShowItBrowserDirective, HideItBrowserDirective, ShowIEVersionDirective, HideIEVersionDirective, BrowserInfoDirective, IeInfoDirective, ShowItSizesDirective, HideItSizesDirective, IsDesktopDirective, IsTabletDirective, IsMobileDirective, IsSmartTvDirective, ShowItDeviceDirective, HideItDeviceDirective, IsIphoneDirective, IsIpadDirective, IsAndroidMobileDirective, IsAndroidTabletDirective, IsWindowsPhoneDirective, ShowItStandardDirective, HideItStandardDirective, IsPortraitDirective, IsLandscapeDirective, DeviceInfoDirective, DeviceStandardInfoDirective, OrientationInfoDirective, Is1xPixelDirective, IsRetinaDirective, Is4kDirective, PixelRatioInfoDirective, ResponsiveDirective, ResponsiveWindowDirective, UserAgentInfoDirective, ResponsiveSizeInfoDirective] });
ResponsiveModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BOOTSTRAP_DIRECTIVES,
                        BROWSER_DIRECTIVES,
                        CUSTOMSIZES_DIRECTIVES,
                        DEVICES_DIRECTIVES,
                        PIXELRATIO_DIRECTIVES,
                        RESPONSIVE_DIRECTIVE,
                        RESPONSIVEWINDOW_DIRECTIVE,
                        USERAGENT_INFO_DIRECTIVE,
                        RESPONSIVE_SIZE_INFO_DIRECTIVE
                    ],
                    exports: [
                        BOOTSTRAP_DIRECTIVES,
                        BROWSER_DIRECTIVES,
                        CUSTOMSIZES_DIRECTIVES,
                        DEVICES_DIRECTIVES,
                        PIXELRATIO_DIRECTIVES,
                        RESPONSIVE_DIRECTIVE,
                        RESPONSIVEWINDOW_DIRECTIVE,
                        USERAGENT_INFO_DIRECTIVE,
                        RESPONSIVE_SIZE_INFO_DIRECTIVE
                    ]
                }]
        }] });

/**
 * @name ngx-responsive
 * @description Devices Detect Directives for Angular
 * @author Manuel Cutillas
 *
 * ```
 * #Contributors
 *  - Christophe HOARAU
 *  - Kamil Breguła
 *  - Janne Julkunen
 *  - phransyz
 *  - Michael Burger
 *  - Alyssa Brunswick
 *  - Quentin
 *  - Thomas Christensen
 *  - MattSenter
 *  - lydemann
 * ```
 * @created_at May 04, 2016
 * @updated_at May 12, 2020
 * @version v9.0.0
 *
 * @angular/core : "9.x.x"
 * rxjs: "9.x.x"
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BOOTSTRAP_DIRECTIVES, BOTS, BROWSER_DIRECTIVES, BROWSER_INFO_RX, BROWSER_NAMES, BrowserInfoDirective, BrowserInfoRx, CUSTOMSIZES_DIRECTIVES, DEFAULT_BREACKPOINTS, DEVICES_DIRECTIVES, DEVICES_INFO_RX, DeviceInfoDirective, DeviceInfoRx, DeviceStandardInfoDirective, DeviceStandardInfoRx, GAME_DEVICES, HideIEVersionDirective, HideItBootstrapDirective, HideItBrowserDirective, HideItDeviceDirective, HideItSizesDirective, HideItStandardDirective, IE_INFO_RX, IE_VERSIONS, IeInfoDirective, IeInfoRx, Is1xPixelDirective, Is4kDirective, IsAndroidMobileDirective, IsAndroidTabletDirective, IsChromeDirective, IsDesktopDirective, IsFirefoxDirective, IsIE10Directive, IsIE11Directive, IsIE12Directive, IsIE9Directive, IsIEDirective, IsIpadDirective, IsIphoneDirective, IsLandscapeDirective, IsMobileDirective, IsOperaDirective, IsPortraitDirective, IsRetinaDirective, IsSafariDirective, IsSmartTvDirective, IsTabletDirective, IsWindowsPhoneDirective, LINUX_OS, LgDirective, MOBILE, MdDirective, OS_SYSTEMS, OrientationInfoDirective, OrientationInfoRx, PIXELRATIO_DIRECTIVES, PixelRatioInfoDirective, REG_BOTS, REG_BROWSERS, REG_GAME_DEVICES, REG_IE_VERSIONS, REG_LINUX_OS, REG_MAC_OS_VERSION, REG_MOBILES, REG_OS, REG_SMARTS_TV, REG_SORT_NAMES, REG_TABLETS, REG_WEARABLES, REG_WINDOWS_OS_VERSION, REG_WINDOWS_PHONE_OS_VERSION, RESPONSIVEWINDOW_DIRECTIVE, RESPONSIVE_BASE, RESPONSIVE_CONFIGURATION, RESPONSIVE_DIRECTIVE, RESPONSIVE_SIZE_INFO_DIRECTIVE, RESPONSIVE_SIZE_INFO_RX, ResponsiveConfig, ResponsiveDirective, ResponsiveModule, ResponsiveSizeInfo, ResponsiveSizeInfoDirective, ResponsiveSizeInfoRx, ResponsiveState, ResponsiveWindowDirective, SMART_TV, ShowIEVersionDirective, ShowItBootstrapDirective, ShowItBrowserDirective, ShowItDeviceDirective, ShowItSizesDirective, ShowItStandardDirective, SmDirective, TABLET, USERAGENT_INFO_DIRECTIVE, USERAGENT_INFO_RX, USER_AGENT, UserAgentInfo, UserAgentInfoDirective, UserAgentInfoRx, WINDOWS_OS, XlDirective, XsDirective, responsiveConfiguration };
//# sourceMappingURL=viablelogic-ngx-responsive.mjs.map
