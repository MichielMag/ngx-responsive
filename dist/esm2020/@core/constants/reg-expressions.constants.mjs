/**
 * @name reg-expressions.constants
 * @description Core reg-expressions.constants in ngx-responsive
 *
 * @license MIT
 */
import { LINUX_OS } from './linux.constants';
import { WINDOWS_OS } from './windows.constants';
import { MOBILE } from './mobile.constants';
import { TABLET } from './tablet.constants';
import { OS_SYSTEMS } from './os-systems.constants';
import { SMART_TV } from './smart-tv.constants';
import { GAME_DEVICES } from './game-devices.constants';
import { BOTS } from './generic-bots.constants';
import { BROWSER_NAMES } from './browser-names.constants';
/* export const GLOBAL_INPUTS = {
    BOOTSTRAP: ['xs', 'sm', 'md', 'lg', 'xl'],
    DEVICES: ['mobile', 'tablet', 'smarttv', 'desktop'],
    STANDARD: ['iphone', 'ipad', 'android mobile', 'android tablet', 'windows phone'],
    ORIENTATION: ['portrait', 'landscape'],
    BROWSERS: ['chrome', 'firefox', 'ie', 'safari', 'opera'],
    PIXEL_RATIO: ['1x', 'retina', '4k'],
    IE_VERSIONS: ['ie 9', 'ie 10', 'ie 11', 'ie +12']
}; */
export const REG_WEARABLES = {
    IWATCH: ''
};
export const REG_MOBILES = {
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
export const REG_TABLETS = {
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
export const REG_SMARTS_TV = {
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
export const REG_GAME_DEVICES = {
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
export const REG_IE_VERSIONS = {
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
export const REG_BROWSERS = {
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
export const REG_OS = {
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
export const REG_SORT_NAMES = {
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
export const REG_WINDOWS_OS_VERSION = {
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
export const REG_WINDOWS_PHONE_OS_VERSION = {
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
export const REG_MAC_OS_VERSION = {
    MAC_OS: ''
};
export const REG_LINUX_OS = {
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
export const REG_BOTS = {
    GENERIC_BOT: {
        REG: /bot|googlebot|crawler|spider|robot|crawling/i,
        VALUE: BOTS.GENERIC_BOT
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnLWV4cHJlc3Npb25zLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9AY29yZS9jb25zdGFudHMvcmVnLWV4cHJlc3Npb25zLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFEOzs7Ozs7OztLQVFLO0FBRUwsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQ3pCLE1BQU0sRUFBRSxFQUFFO0NBQ2IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRztJQUN2QixPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsNkJBQTZCO1FBQ2xDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTztLQUN4QjtJQUNELE1BQU0sRUFBRTtRQUNKLEdBQUcsRUFBRSx3QkFBd0I7UUFDN0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNO0tBQ3ZCO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsR0FBRyxFQUFFLHdCQUF3QjtRQUM3QixLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQWE7S0FDOUI7SUFDRCxVQUFVLEVBQUU7UUFDUixHQUFHLEVBQUUsaUNBQWlDO1FBQ3RDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVTtLQUMzQjtJQUNELElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSwyQkFBMkI7UUFDaEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVO0tBQzNCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osR0FBRyxFQUFFLDZCQUE2QjtRQUNsQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWM7S0FDL0I7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUseUJBQXlCO1FBQzlCLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTTtLQUN2QjtJQUNELFVBQVUsRUFBRTtRQUNSLEdBQUcsRUFBRSxxREFBcUQ7UUFDMUQsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjO0tBQy9CO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLFdBQVc7UUFDaEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjO0tBQy9CO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsR0FBRyxFQUFFLG9VQUFvVTtRQUN6VSxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWM7S0FDL0I7SUFDRCxhQUFhLEVBQUU7UUFDWCxHQUFHLEVBQUUseWtEQUF5a0Q7UUFDOWtELEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYztLQUMvQjtDQUNKLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDdkIsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLHNCQUFzQjtRQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7S0FDckI7SUFDRCxNQUFNLEVBQUU7UUFDSixHQUFHLEVBQUUsK0ZBQStGO1FBQ3BHLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTTtLQUN2QjtJQUNELE1BQU0sRUFBRTtRQUNKLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ04sR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWM7S0FDL0I7Q0FDSixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQ3pCLFVBQVUsRUFBRTtRQUNSLEdBQUcsRUFBRyxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVO0tBQzdCO0lBQ0QsUUFBUSxFQUFFO1FBQ04sR0FBRyxFQUFHLFVBQVU7UUFDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRO0tBQzNCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsR0FBRyxFQUFHLDBCQUEwQjtRQUNoQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFNBQVM7S0FDNUI7SUFDRCxHQUFHLEVBQUU7UUFDRCxHQUFHLEVBQUUsZ0JBQWdCO1FBQ3JCLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRztLQUN0QjtJQUNELFFBQVEsRUFBRTtRQUNOLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUTtLQUMzQjtJQUNELFVBQVUsRUFBRTtRQUNSLEdBQUcsRUFBRSxzS0FBc0s7UUFDM0ssS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVO0tBQzdCO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzVCLEdBQUcsRUFBRTtRQUNELEdBQUcsRUFBRyxnQkFBZ0I7UUFDdEIsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHO0tBQzFCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsR0FBRyxFQUFHLGdCQUFnQjtRQUN0QixLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUc7S0FDMUI7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsT0FBTztRQUNaLEtBQUssRUFBRSxZQUFZLENBQUMsSUFBSTtLQUMzQjtJQUNELFFBQVEsRUFBRTtRQUNOLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLEtBQUssRUFBRSxZQUFZLENBQUMsUUFBUTtLQUMvQjtJQUNELEtBQUssRUFBRTtRQUNILEdBQUcsRUFBRSxnQkFBZ0I7UUFDckIsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO0tBQzVCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsR0FBRyxFQUFFLGVBQWU7UUFDcEIsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHO0tBQzFCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixLQUFLLEVBQUUsWUFBWSxDQUFDLGdCQUFnQjtLQUN2QztJQUNELFlBQVksRUFBRTtRQUNWLEdBQUcsRUFBRSxlQUFlO1FBQ3BCLEtBQUssRUFBRSxZQUFZLENBQUMsWUFBWTtLQUNuQztJQUNELEdBQUcsRUFBRTtRQUNELEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHO0tBQzFCO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRztJQUMzQixPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsT0FBTztRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxVQUFVLEVBQUU7UUFDUixHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxJQUFJO0tBQ2Q7Q0FDSixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQ3hCLE1BQU0sRUFBRTtRQUNKLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsS0FBSyxFQUFFLGFBQWEsQ0FBQyxNQUFNO0tBQzlCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixLQUFLLEVBQUUsYUFBYSxDQUFDLE9BQU87S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDTixHQUFHLEVBQUUsNkNBQTZDO1FBQ2xELEtBQUssRUFBRSxhQUFhLENBQUMsTUFBTTtLQUM5QjtJQUNELE1BQU0sRUFBRTtRQUNKLEdBQUcsRUFBRSw0REFBNEQ7UUFDakUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxNQUFNO0tBQzlCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7S0FDN0I7SUFDRCxFQUFFLEVBQUU7UUFDQSxHQUFHLEVBQUUsa0JBQWtCO1FBQ3ZCLEtBQUssRUFBRSxhQUFhLENBQUMsRUFBRTtLQUMxQjtJQUNELElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxPQUFPO1FBQ1osS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJO0tBQzVCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osR0FBRyxFQUFFLFlBQVk7UUFDakIsS0FBSyxFQUFFLGFBQWEsQ0FBQyxNQUFNO0tBQzlCO0lBQ0QsRUFBRSxFQUFFO1FBQ0EsR0FBRyxFQUFFLElBQUk7UUFDVCxLQUFLLEVBQUUsYUFBYSxDQUFDLEVBQUU7S0FDMUI7Q0FDSixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHO0lBQ2xCLE9BQU8sRUFBRTtRQUNMLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPO0tBQzVCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsR0FBRyxFQUFFLHFCQUFxQjtRQUMxQixLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUc7S0FDeEI7SUFDRCxNQUFNLEVBQUU7UUFDSixHQUFHLEVBQUUsWUFBWTtRQUNqQixLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU07S0FDM0I7SUFDRCxPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxVQUFVLENBQUMsT0FBTztLQUM1QjtJQUNELEtBQUssRUFBRTtRQUNILEdBQUcsRUFBRyxRQUFRO1FBQ2QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO0tBQzFCO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFHLHFEQUFxRDtRQUMzRCxLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVU7S0FDL0I7SUFDRCxTQUFTLEVBQUU7UUFDUCxHQUFHLEVBQUcsTUFBTTtRQUNaLEtBQUssRUFBRSxVQUFVLENBQUMsU0FBUztLQUM5QjtJQUNELGFBQWEsRUFBRTtRQUNYLEdBQUcsRUFBRyxnQkFBZ0I7UUFDdEIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxhQUFhO0tBQ2xDO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRztJQUMxQixPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsU0FBUztRQUNkLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxNQUFNLEVBQUU7UUFDSixHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxNQUFNLEVBQUU7UUFDSixHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDVixHQUFHLEVBQUUsYUFBYTtRQUNsQixLQUFLLEVBQUUsSUFBSTtLQUNkO0lBQ0QsTUFBTSxFQUFFO1FBQ0osR0FBRyxFQUFFLFFBQVE7UUFDYixLQUFLLEVBQUUsSUFBSTtLQUNkO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHO0lBQ2xDLFlBQVksRUFBRTtRQUNWLEdBQUcsRUFBRSxPQUFPO1FBQ1osS0FBSyxFQUFFLFVBQVUsQ0FBQyxlQUFlO0tBQ3BDO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLCtCQUErQjtRQUNwQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGVBQWU7S0FDcEM7SUFDRCxVQUFVLEVBQUU7UUFDUixHQUFHLEVBQUUsMEJBQTBCO1FBQy9CLEtBQUssRUFBRSxVQUFVLENBQUMsZUFBZTtLQUNwQztJQUNELFVBQVUsRUFBRTtRQUNSLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxlQUFlO0tBQ3BDO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLFlBQVk7UUFDakIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxlQUFlO0tBQ3BDO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsR0FBRyxFQUFFLCtCQUErQjtRQUNwQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGVBQWU7S0FDcEM7SUFDRCxVQUFVLEVBQUU7UUFDUixHQUFHLEVBQUUsNkJBQTZCO1FBQ2xDLEtBQUssRUFBRSxVQUFVLENBQUMsVUFBVTtLQUMvQjtJQUNELG1CQUFtQixFQUFFO1FBQ2pCLEdBQUcsRUFBRSxnQkFBZ0I7UUFDckIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxlQUFlO0tBQ3BDO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsR0FBRyxFQUFFLDhCQUE4QjtRQUNuQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGFBQWE7S0FDbEM7SUFDRCxTQUFTLEVBQUU7UUFDUCxHQUFHLEVBQUUsNEJBQTRCO1FBQ2pDLEtBQUssRUFBRSxVQUFVLENBQUMsU0FBUztLQUM5QjtJQUNELFNBQVMsRUFBRTtRQUNQLEdBQUcsRUFBRSx3REFBd0Q7UUFDN0QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxTQUFTO0tBQzlCO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVU7S0FDL0I7SUFDRCxjQUFjLEVBQUU7UUFDWixHQUFHLEVBQUUsNENBQTRDO1FBQ2pELEtBQUssRUFBRSxVQUFVLENBQUMsZUFBZTtLQUNwQztDQUNKLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUN4QyxpQkFBaUIsRUFBRTtRQUNmLEdBQUcsRUFBRSx3QkFBd0I7UUFDN0IsS0FBSyxFQUFFLFVBQVUsQ0FBQyxlQUFlO0tBQ3BDO0lBQ0QsaUJBQWlCLEVBQUU7UUFDZixHQUFHLEVBQUUscUJBQXFCO1FBQzFCLEtBQUssRUFBRSxVQUFVLENBQUMsZUFBZTtLQUNwQztJQUNELGdCQUFnQixFQUFFO1FBQ2QsR0FBRyxFQUFFLG9CQUFvQjtRQUN6QixLQUFLLEVBQUUsVUFBVSxDQUFDLGVBQWU7S0FDcEM7Q0FDSixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDOUIsTUFBTSxFQUFFLEVBQUU7Q0FDYixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQ3hCLE1BQU0sRUFBRTtRQUNKLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0tBQ3pCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU87S0FDMUI7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsT0FBTztRQUNaLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSTtLQUN2QjtJQUNELE1BQU0sRUFBRTtRQUNKLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0tBQ3pCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU87S0FDMUI7SUFDRCxPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxRQUFRLENBQUMsT0FBTztLQUMxQjtJQUNELE9BQU8sRUFBRTtRQUNMLEdBQUcsRUFBRSxVQUFVO1FBQ2YsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPO0tBQzFCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osR0FBRyxFQUFFLFNBQVM7UUFDZCxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU07S0FDekI7SUFDRCxPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxRQUFRLENBQUMsT0FBTztLQUMxQjtJQUNELFFBQVEsRUFBRTtRQUNOLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUTtLQUMzQjtJQUNELE1BQU0sRUFBRTtRQUNKLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0tBQ3pCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU87S0FDMUI7SUFDRCxTQUFTLEVBQUU7UUFDUCxHQUFHLEVBQUUsWUFBWTtRQUNqQixLQUFLLEVBQUUsUUFBUSxDQUFDLFNBQVM7S0FDNUI7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsT0FBTztRQUNaLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSTtLQUN2QjtJQUNELE9BQU8sRUFBRTtRQUNMLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPO0tBQzFCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsR0FBRyxFQUFFLFlBQVk7UUFDakIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQUFTO0tBQzVCO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRztJQUNwQixXQUFXLEVBQUU7UUFDVCxHQUFHLEVBQUUsOENBQThDO1FBQ25ELEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztLQUMxQjtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWUgcmVnLWV4cHJlc3Npb25zLmNvbnN0YW50c1xyXG4gKiBAZGVzY3JpcHRpb24gQ29yZSByZWctZXhwcmVzc2lvbnMuY29uc3RhbnRzIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IExJTlVYX09TIH0gZnJvbSAnLi9saW51eC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBXSU5ET1dTX09TIH0gZnJvbSAnLi93aW5kb3dzLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IE1PQklMRSB9IGZyb20gJy4vbW9iaWxlLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRBQkxFVCB9IGZyb20gJy4vdGFibGV0LmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IE9TX1NZU1RFTVMgfSBmcm9tICcuL29zLXN5c3RlbXMuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU01BUlRfVFYgfSBmcm9tICcuL3NtYXJ0LXR2LmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEdBTUVfREVWSUNFUyB9IGZyb20gJy4vZ2FtZS1kZXZpY2VzLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEJPVFMgfSBmcm9tICcuL2dlbmVyaWMtYm90cy5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBCUk9XU0VSX05BTUVTIH0gZnJvbSAnLi9icm93c2VyLW5hbWVzLmNvbnN0YW50cyc7XHJcblxyXG4vKiBleHBvcnQgY29uc3QgR0xPQkFMX0lOUFVUUyA9IHtcclxuICAgIEJPT1RTVFJBUDogWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddLFxyXG4gICAgREVWSUNFUzogWydtb2JpbGUnLCAndGFibGV0JywgJ3NtYXJ0dHYnLCAnZGVza3RvcCddLFxyXG4gICAgU1RBTkRBUkQ6IFsnaXBob25lJywgJ2lwYWQnLCAnYW5kcm9pZCBtb2JpbGUnLCAnYW5kcm9pZCB0YWJsZXQnLCAnd2luZG93cyBwaG9uZSddLFxyXG4gICAgT1JJRU5UQVRJT046IFsncG9ydHJhaXQnLCAnbGFuZHNjYXBlJ10sXHJcbiAgICBCUk9XU0VSUzogWydjaHJvbWUnLCAnZmlyZWZveCcsICdpZScsICdzYWZhcmknLCAnb3BlcmEnXSxcclxuICAgIFBJWEVMX1JBVElPOiBbJzF4JywgJ3JldGluYScsICc0ayddLFxyXG4gICAgSUVfVkVSU0lPTlM6IFsnaWUgOScsICdpZSAxMCcsICdpZSAxMScsICdpZSArMTInXVxyXG59OyAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFR19XRUFSQUJMRVMgPSB7XHJcbiAgICBJV0FUQ0g6ICcnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkVHX01PQklMRVMgPSB7XHJcbiAgICBBTkRST0lEOiB7XHJcbiAgICAgICAgUkVHOiAvKGFuZHJvaWQpOz9bXFxzXFwvXSsoW1xcZC5dKyk/LyxcclxuICAgICAgICBWQUxVRTogTU9CSUxFLkFORFJPSURcclxuICAgIH0sXHJcbiAgICBJUEhPTkU6IHtcclxuICAgICAgICBSRUc6IC8oaXBob25lXFxzb3MpXFxzKFtcXGRfXSspLyxcclxuICAgICAgICBWQUxVRTogTU9CSUxFLklQSE9ORVxyXG4gICAgfSxcclxuICAgIFdJTkRPV1NfUEhPTkU6IHtcclxuICAgICAgICBSRUc6IC93aW5kb3dzIHBob25lIChbXFxkLl0rKS8sXHJcbiAgICAgICAgVkFMVUU6IE1PQklMRS5XSU5ET1dTX1BIT05FXHJcbiAgICB9LFxyXG4gICAgQkxBQ0tCRVJSWToge1xyXG4gICAgICAgIFJFRzogLyhibGFja0JlcnJ5KS4qdmVyc2lvblxcLyhbXFxkLl0rKS8sXHJcbiAgICAgICAgVkFMVUU6IE1PQklMRS5CTEFDS0JFUlJZXHJcbiAgICB9LFxyXG4gICAgQkIxMDoge1xyXG4gICAgICAgIFJFRzogLyhiYjEwKS4qdmVyc2lvblxcLyhbXFxkLl0rKS8sXHJcbiAgICAgICAgVkFMVUU6IE1PQklMRS5CTEFDS0JFUlJZXHJcbiAgICB9LFxyXG4gICAgV0VCX09TOiB7XHJcbiAgICAgICAgUkVHOiAvKHdlYm9zfGhwd29zKVtcXHNcXC9dKFtcXGQuXSspLyxcclxuICAgICAgICBWQUxVRTogTU9CSUxFLkdFTkVSSUNfTU9CSUxFXHJcbiAgICB9LFxyXG4gICAgSVBPRDoge1xyXG4gICAgICAgIFJFRzogLyhpcG9kKSguKm9zXFxzKFtcXGRfXSspKT8vLFxyXG4gICAgICAgIFZBTFVFOiBNT0JJTEUuSVBIT05FXHJcbiAgICB9LFxyXG4gICAgRklSRUZPWF9PUzoge1xyXG4gICAgICAgIFJFRzogL1xcKCg/Om1vYmlsZXx0YWJsZXQpOyBydjooW1xcZC5dKylcXCkuKmZpcmVmb3hcXC9bXFxkLl0rLyxcclxuICAgICAgICBWQUxVRTogTU9CSUxFLkdFTkVSSUNfTU9CSUxFXHJcbiAgICB9LFxyXG4gICAgTU9CSToge1xyXG4gICAgICAgIFJFRzogL1teLV1tb2JpL2ksXHJcbiAgICAgICAgVkFMVUU6IE1PQklMRS5HRU5FUklDX01PQklMRVxyXG4gICAgfSxcclxuICAgIEdFTkVSSUNfUkVHXzE6IHtcclxuICAgICAgICBSRUc6IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcGFkfGlyaXN8a2luZGxlfEFuZHJvaWR8U2lsa3xsZ2UgfG1hZW1vfG1pZHB8bW1wfG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2ksXHJcbiAgICAgICAgVkFMVUU6IE1PQklMRS5HRU5FUklDX01PQklMRVxyXG4gICAgfSxcclxuICAgIEdFTkVSSUNfUkVHXzI6IHtcclxuICAgICAgICBSRUc6IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLFxyXG4gICAgICAgIFZBTFVFOiBNT0JJTEUuR0VORVJJQ19NT0JJTEVcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdfVEFCTEVUUyA9IHtcclxuICAgIElQQUQ6IHtcclxuICAgICAgICBSRUc6IC8oaXBhZCkuKm9zXFxzKFtcXGRfXSspLyxcclxuICAgICAgICBWQUxVRTogVEFCTEVULklQQURcclxuICAgIH0sXHJcbiAgICBLSU5ETEU6IHtcclxuICAgICAgICBSRUc6IC9raW5kbGV8c2lsa3xrZmFwd3xrZmFyd2l8a2Zhc3dpfGtmZm93aXxrZmp3fGtmbWV3aXxrZm90fGtmc2F3fGtmc293aXxrZnRid3xrZnRod3xrZnR0fHdmZm93aS9pLFxyXG4gICAgICAgIFZBTFVFOiBUQUJMRVQuS0lORExFXHJcbiAgICB9LFxyXG4gICAgVEFCTEVUOiB7XHJcbiAgICAgICAgUkVHOiAvdGFibGV0L2ksXHJcbiAgICAgICAgVkFMVUU6IFRBQkxFVC5HRU5FUklDX1RBQkxFVFxyXG4gICAgfSxcclxuICAgIFBMQVlCT09LOiB7XHJcbiAgICAgICAgUkVHOiAvcmltXFxzdGFibGV0fHBsYXlib29rL2ksXHJcbiAgICAgICAgVkFMVUU6IFRBQkxFVC5HRU5FUklDX1RBQkxFVFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdfU01BUlRTX1RWID0ge1xyXG4gICAgQ0hST01FQ0FTVDoge1xyXG4gICAgICAgIFJFRzogIC9jcmtleS9pLFxyXG4gICAgICAgIFZBTFVFOiBTTUFSVF9UVi5DSFJPTUVDQVNUXHJcbiAgICB9LFxyXG4gICAgQVBQTEVfVFY6IHtcclxuICAgICAgICBSRUc6ICAvYXBwbGV0di9pLFxyXG4gICAgICAgIFZBTFVFOiBTTUFSVF9UVi5BUFBMRV9UVlxyXG4gICAgfSxcclxuICAgIEdPT0dMRV9UVjoge1xyXG4gICAgICAgIFJFRzogIC8obGFyZ2Ugc2NyZWVuKXxnb29nbGV0di9pLFxyXG4gICAgICAgIFZBTFVFOiBTTUFSVF9UVi5HT09HTEVfVFZcclxuICAgIH0sXHJcbiAgICBQUzQ6IHtcclxuICAgICAgICBSRUc6IC9wbGF5c3RhdGlvbiA0L2ksXHJcbiAgICAgICAgVkFMVUU6IFNNQVJUX1RWLlBTNFxyXG4gICAgfSxcclxuICAgIFhCT1hfT05FOiB7XHJcbiAgICAgICAgUkVHOiAveGJveCBvbmUvaSxcclxuICAgICAgICBWQUxVRTogU01BUlRfVFYuWEJPWF9PTkVcclxuICAgIH0sXHJcbiAgICBHRU5FUklDX1RWOiB7XHJcbiAgICAgICAgUkVHOiAvdHZ8c21hcnR0dnxnb29nbGV0dnxjcmtleXxTaGFycHxUSE9NU09OfFRIT018UGFuYXNvbmljfFBoaWxpcHN8TkVUVFZ8TWFwbGVfMjAxMXxhcHBsZXR2fEh1bWF4fElrZWF8TG9ld2V8TWVkaW9ufGhiYnR2fHBvdl90dnxBaXJ0aWVzfG5ldGNhc3QudHZ8T1dCfEdydW5kaWd8QXJjZWxpay9pLFxyXG4gICAgICAgIFZBTFVFOiBTTUFSVF9UVi5HRU5FUklDX1RWXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkVHX0dBTUVfREVWSUNFUyA9IHtcclxuICAgIFBTNDoge1xyXG4gICAgICAgIFJFRzogIC9wbGF5c3RhdGlvbiA0L2ksXHJcbiAgICAgICAgVkFMVUU6IEdBTUVfREVWSUNFUy5QUzRcclxuICAgIH0sXHJcbiAgICBQUzM6IHtcclxuICAgICAgICBSRUc6ICAvcGxheXN0YXRpb24gMy9pLFxyXG4gICAgICAgIFZBTFVFOiBHQU1FX0RFVklDRVMuUFMzXHJcbiAgICB9LFxyXG4gICAgWEJPWDoge1xyXG4gICAgICAgIFJFRzogL3hib3gvaSxcclxuICAgICAgICBWQUxVRTogR0FNRV9ERVZJQ0VTLlhCT1hcclxuICAgIH0sXHJcbiAgICBYQk9YX09ORToge1xyXG4gICAgICAgIFJFRzogL3hib3ggb25lL2ksXHJcbiAgICAgICAgVkFMVUU6IEdBTUVfREVWSUNFUy5YQk9YX09ORVxyXG4gICAgfSxcclxuICAgIFdJSV9VOiB7XHJcbiAgICAgICAgUkVHOiAvbmludGVuZG8gd2lpdS9pLFxyXG4gICAgICAgIFZBTFVFOiBHQU1FX0RFVklDRVMuV0lJX1VcclxuICAgIH0sXHJcbiAgICBXSUk6IHtcclxuICAgICAgICBSRUc6IC9uaW50ZW5kbyB3aWkvaSxcclxuICAgICAgICBWQUxVRTogR0FNRV9ERVZJQ0VTLldJSVxyXG4gICAgfSxcclxuICAgIFBTX1ZJVEE6IHtcclxuICAgICAgICBSRUc6IC9wbGF5c3RhdGlvbiB2aXRhL2ksXHJcbiAgICAgICAgVkFMVUU6IEdBTUVfREVWSUNFUy5QTEFZU1RBVElPTl9WSVRBXHJcbiAgICB9LFxyXG4gICAgTklOVEVORE9fM0RTOiB7XHJcbiAgICAgICAgUkVHOiAvbmludGVuZG8gM2RzL2ksXHJcbiAgICAgICAgVkFMVUU6IEdBTUVfREVWSUNFUy5OSU5URU5ET18zRFNcclxuICAgIH0sXHJcbiAgICBQU1A6IHtcclxuICAgICAgICBSRUc6IC9wc3AvaSxcclxuICAgICAgICBWQUxVRTogR0FNRV9ERVZJQ0VTLlBTUFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFR19JRV9WRVJTSU9OUyA9IHtcclxuICAgIE1TX01TSUU6IHtcclxuICAgICAgICBSRUc6IC9tc2llL2ksXHJcbiAgICAgICAgVkFMVUU6IG51bGxcclxuICAgIH0sXHJcbiAgICBNU19UUklERU5UOiB7XHJcbiAgICAgICAgUkVHOiAvdHJpZGVudC9pLFxyXG4gICAgICAgIFZBTFVFOiBudWxsXHJcbiAgICB9LFxyXG4gICAgTVNfRURHRToge1xyXG4gICAgICAgIFJFRzogL2VkZy9pLFxyXG4gICAgICAgIFZBTFVFOiBudWxsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkVHX0JST1dTRVJTID0ge1xyXG4gICAgQ0hST01FOiB7XHJcbiAgICAgICAgUkVHOiAvKGNocm9tZXxjcmlvcylcXC8oW1xcZC5dKykvLFxyXG4gICAgICAgIFZBTFVFOiBCUk9XU0VSX05BTUVTLkNIUk9NRVxyXG4gICAgfSxcclxuICAgIEZJUkVGT1g6IHtcclxuICAgICAgICBSRUc6IC9maXJlZm94fGljZXdlYXNlbHxmeGlvcy9pLFxyXG4gICAgICAgIFZBTFVFOiBCUk9XU0VSX05BTUVTLkZJUkVGT1hcclxuICAgIH0sXHJcbiAgICBXRUJfVklFVzoge1xyXG4gICAgICAgIFJFRzogLyhpcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQoPyEuKnNhZmFyaSkvLFxyXG4gICAgICAgIFZBTFVFOiBCUk9XU0VSX05BTUVTLlNBRkFSSVxyXG4gICAgfSxcclxuICAgIFNBRkFSSToge1xyXG4gICAgICAgIFJFRzogL3ZlcnNpb25cXC8oW1xcZC5dKykoW15zXShzYWZhcmkpfFtebV0qKG1vYmlsZSlbXlNdKihzYWZhcmkpKS8sXHJcbiAgICAgICAgVkFMVUU6IEJST1dTRVJfTkFNRVMuU0FGQVJJXHJcbiAgICB9LFxyXG4gICAgT1BFUkE6IHtcclxuICAgICAgICBSRUc6IC9vcGVyYXxvcHJ8b3Bpb3MvaSxcclxuICAgICAgICBWQUxVRTogQlJPV1NFUl9OQU1FUy5PUEVSQVxyXG4gICAgfSxcclxuICAgIElFOiB7XHJcbiAgICAgICAgUkVHOiAvbXNpZXx0cmlkZW50fGVkZy8sXHJcbiAgICAgICAgVkFMVUU6IEJST1dTRVJfTkFNRVMuSUVcclxuICAgIH0sXHJcbiAgICBTSUxLOiB7XHJcbiAgICAgICAgUkVHOiAvc2lsay9pLFxyXG4gICAgICAgIFZBTFVFOiBCUk9XU0VSX05BTUVTLlNJTEtcclxuICAgIH0sXHJcbiAgICBZQU5ERVg6IHtcclxuICAgICAgICBSRUc6IC95YWJyb3dzZXIvaSxcclxuICAgICAgICBWQUxVRTogQlJPV1NFUl9OQU1FUy5ZQU5ERVhcclxuICAgIH0sXHJcbiAgICBOQToge1xyXG4gICAgICAgIFJFRzogbnVsbCxcclxuICAgICAgICBWQUxVRTogQlJPV1NFUl9OQU1FUy5OQVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFR19PUyA9IHtcclxuICAgIFdJTkRPV1M6IHtcclxuICAgICAgICBSRUc6IC93aW5cXGR7Mn18d2luZG93cy8sXHJcbiAgICAgICAgVkFMVUU6IE9TX1NZU1RFTVMuV0lORE9XU1xyXG4gICAgfSxcclxuICAgIElPUzoge1xyXG4gICAgICAgIFJFRzogLyhpcG9kfGlwaG9uZXxpcGFkKS9pLFxyXG4gICAgICAgIFZBTFVFOiBPU19TWVNURU1TLklPU1xyXG4gICAgfSxcclxuICAgIE1BQ19PUzoge1xyXG4gICAgICAgIFJFRzogL21hY2ludG9zaC9pLFxyXG4gICAgICAgIFZBTFVFOiBPU19TWVNURU1TLk1BQ19PU1xyXG4gICAgfSxcclxuICAgIEFORFJPSUQ6IHtcclxuICAgICAgICBSRUc6IC9hbmRyb2lkL2ksXHJcbiAgICAgICAgVkFMVUU6IE9TX1NZU1RFTVMuQU5EUk9JRFxyXG4gICAgfSxcclxuICAgIExJTlVYOiB7XHJcbiAgICAgICAgUkVHOiAgL2xpbnV4L2ksXHJcbiAgICAgICAgVkFMVUU6IE9TX1NZU1RFTVMuTElOVVhcclxuICAgIH0sXHJcbiAgICBGSVJFRk9YX09TOiB7XHJcbiAgICAgICAgUkVHOiAgL1xcKCg/Om1vYmlsZXx0YWJsZXQpOyBydjooW1xcZC5dKylcXCkuKmZpcmVmb3hcXC9bXFxkLl0rLyxcclxuICAgICAgICBWQUxVRTogT1NfU1lTVEVNUy5GSVJFRk9YX09TXHJcbiAgICB9LFxyXG4gICAgQ0hST01FX09TOiB7XHJcbiAgICAgICAgUkVHOiAgL2Nyb3MvLFxyXG4gICAgICAgIFZBTFVFOiBPU19TWVNURU1TLkNIUk9NRV9PU1xyXG4gICAgfSxcclxuICAgIFdJTkRPV1NfUEhPTkU6IHtcclxuICAgICAgICBSRUc6ICAvd2luZG93cyBwaG9uZS9pLFxyXG4gICAgICAgIFZBTFVFOiBPU19TWVNURU1TLldJTkRPV1NfUEhPTkVcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdfU09SVF9OQU1FUyA9IHtcclxuICAgIE1PWklMTEE6IHtcclxuICAgICAgICBSRUc6IC9tb3ppbGxhLyxcclxuICAgICAgICBWQUxVRTogbnVsbFxyXG4gICAgfSxcclxuICAgIENIUk9NRToge1xyXG4gICAgICAgIFJFRzogL2Nocm9tZS8sXHJcbiAgICAgICAgVkFMVUU6IG51bGxcclxuICAgIH0sXHJcbiAgICBXRUJLSVQ6IHtcclxuICAgICAgICBSRUc6IC93ZWJraXQvLFxyXG4gICAgICAgIFZBTFVFOiBudWxsXHJcbiAgICB9LFxyXG4gICAgQVBQTEVfV0VCS0lUOiB7XHJcbiAgICAgICAgUkVHOiAvYXBwbGV3ZWJraXQvLFxyXG4gICAgICAgIFZBTFVFOiBudWxsXHJcbiAgICB9LFxyXG4gICAgU0FGQVJJOiB7XHJcbiAgICAgICAgUkVHOiAvc2FmYXJpLyxcclxuICAgICAgICBWQUxVRTogbnVsbFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFR19XSU5ET1dTX09TX1ZFUlNJT04gPSB7XHJcbiAgICBXSU5ET1dTXzNfMTE6IHtcclxuICAgICAgICBSRUc6IC93aW4xNi8sXHJcbiAgICAgICAgVkFMVUU6IFdJTkRPV1NfT1MuR0VORVJJQ19XSU5ET1dTXHJcbiAgICB9LFxyXG4gICAgV0lORE9XU185NToge1xyXG4gICAgICAgIFJFRzogLyh3aW5kb3dzIDk1fHdpbjk1fHdpbmRvd3NfOTUpLyxcclxuICAgICAgICBWQUxVRTogV0lORE9XU19PUy5HRU5FUklDX1dJTkRPV1NcclxuICAgIH0sXHJcbiAgICBXSU5ET1dTX01FOiB7XHJcbiAgICAgICAgUkVHOiAvKHdpbiA5eCA0LjkwfHdpbmRvd3MgTUUpLyxcclxuICAgICAgICBWQUxVRTogV0lORE9XU19PUy5HRU5FUklDX1dJTkRPV1NcclxuICAgIH0sXHJcbiAgICBXSU5ET1dTXzk4OiB7XHJcbiAgICAgICAgUkVHOiAvKHdpbmRvd3MgOTh8d2luOTgpLyxcclxuICAgICAgICBWQUxVRTogV0lORE9XU19PUy5HRU5FUklDX1dJTkRPV1NcclxuICAgIH0sXHJcbiAgICBXSU5ET1dTX0NFOiB7XHJcbiAgICAgICAgUkVHOiAvd2luZG93cyBjZS8sXHJcbiAgICAgICAgVkFMVUU6IFdJTkRPV1NfT1MuR0VORVJJQ19XSU5ET1dTXHJcbiAgICB9LFxyXG4gICAgV0lORE9XU18yMDAwOiB7XHJcbiAgICAgICAgUkVHOiAvKHdpbmRvd3MgbnQgNS4wfHdpbmRvd3MgMjAwMCkvLFxyXG4gICAgICAgIFZBTFVFOiBXSU5ET1dTX09TLkdFTkVSSUNfV0lORE9XU1xyXG4gICAgfSxcclxuICAgIFdJTkRPV1NfWFA6IHtcclxuICAgICAgICBSRUc6IC8od2luZG93cyBudCA1LjF8d2luZG93cyB4cCkvLFxyXG4gICAgICAgIFZBTFVFOiBXSU5ET1dTX09TLldJTkRPV1NfWFBcclxuICAgIH0sXHJcbiAgICBXSU5ET1dTX1NFUlZFUl8yMDAzOiB7XHJcbiAgICAgICAgUkVHOiAvd2luZG93cyBudCA1LjIvLFxyXG4gICAgICAgIFZBTFVFOiBXSU5ET1dTX09TLkdFTkVSSUNfV0lORE9XU1xyXG4gICAgfSxcclxuICAgIFdJTkRPV1NfVklTVEE6IHtcclxuICAgICAgICBSRUc6IC93aW5kb3dzIG50IDYuMHxXaW5kb3dzIFZpc3RhLyxcclxuICAgICAgICBWQUxVRTogV0lORE9XU19PUy5XSU5ET1dTX1ZJU1RBXHJcbiAgICB9LFxyXG4gICAgV0lORE9XU183OiB7XHJcbiAgICAgICAgUkVHOiAvKHdpbmRvd3MgN3x3aW5kb3dzIG50IDYuMSkvLFxyXG4gICAgICAgIFZBTFVFOiBXSU5ET1dTX09TLldJTkRPV1NfN1xyXG4gICAgfSxcclxuICAgIFdJTkRPV1NfODoge1xyXG4gICAgICAgIFJFRzogLyh3aW5kb3dzIDh8d2luZG93cyA4LjF8d2luZG93cyBudCA2LjIgfHdpbmRvd3MgbnQgNi4zKS8sXHJcbiAgICAgICAgVkFMVUU6IFdJTkRPV1NfT1MuV0lORE9XU184XHJcbiAgICB9LFxyXG4gICAgV0lORE9XU18xMDoge1xyXG4gICAgICAgIFJFRzogLyh3aW5kb3dzIG50IDEwLjApLyxcclxuICAgICAgICBWQUxVRTogV0lORE9XU19PUy5XSU5ET1dTXzEwXHJcbiAgICB9LFxyXG4gICAgV0lORE9XU19OVF80XzA6IHtcclxuICAgICAgICBSRUc6IC8od2luZG93cyBudCA0LjB8d2lubnQ0LjB8d2lubnR8d2luZG93cyBudCkvLFxyXG4gICAgICAgIFZBTFVFOiBXSU5ET1dTX09TLkdFTkVSSUNfV0lORE9XU1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdfV0lORE9XU19QSE9ORV9PU19WRVJTSU9OID0ge1xyXG4gICAgV0lORE9XU19QSE9ORV83XzU6IHtcclxuICAgICAgICBSRUc6IC8od2luZG93cyBwaG9uZSBvcyA3LjUpLyxcclxuICAgICAgICBWQUxVRTogV0lORE9XU19PUy5HRU5FUklDX1dJTkRPV1NcclxuICAgIH0sXHJcbiAgICBXSU5ET1dTX1BIT05FXzhfMToge1xyXG4gICAgICAgIFJFRzogLyh3aW5kb3dzIHBob25lIDguMSkvLFxyXG4gICAgICAgIFZBTFVFOiBXSU5ET1dTX09TLkdFTkVSSUNfV0lORE9XU1xyXG4gICAgfSxcclxuICAgIFdJTkRPV1NfUEhPTkVfMTA6IHtcclxuICAgICAgICBSRUc6IC8od2luZG93cyBwaG9uZSAxMCkvLFxyXG4gICAgICAgIFZBTFVFOiBXSU5ET1dTX09TLkdFTkVSSUNfV0lORE9XU1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFR19NQUNfT1NfVkVSU0lPTiA9IHtcclxuICAgIE1BQ19PUzogJydcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdfTElOVVhfT1MgPSB7XHJcbiAgICBERUJJQU46IHtcclxuICAgICAgICBSRUc6IC9EZWJpYW4vaSxcclxuICAgICAgICBWQUxVRTogTElOVVhfT1MuREVCSUFOXHJcbiAgICB9LFxyXG4gICAgS05PUFBJWDoge1xyXG4gICAgICAgIFJFRzogL0tub3BwaXgvaSxcclxuICAgICAgICBWQUxVRTogTElOVVhfT1MuS05PUFBJWFxyXG4gICAgfSxcclxuICAgIE1JTlQ6IHtcclxuICAgICAgICBSRUc6IC9NaW50L2ksXHJcbiAgICAgICAgVkFMVUU6IExJTlVYX09TLk1JTlRcclxuICAgIH0sXHJcbiAgICBVQlVOVFU6IHtcclxuICAgICAgICBSRUc6IC9VYnVudHUvaSxcclxuICAgICAgICBWQUxVRTogTElOVVhfT1MuVUJVTlRVXHJcbiAgICB9LFxyXG4gICAgS1VCVU5UVToge1xyXG4gICAgICAgIFJFRzogL0t1YnVudHUvaSxcclxuICAgICAgICBWQUxVRTogTElOVVhfT1MuS1VCVU5UVVxyXG4gICAgfSxcclxuICAgIFhVQlVOVFU6IHtcclxuICAgICAgICBSRUc6IC9YdWJ1bnR1L2ksXHJcbiAgICAgICAgVkFMVUU6IExJTlVYX09TLlhVQlVOVFVcclxuICAgIH0sXHJcbiAgICBMVUJVTlRVOiB7XHJcbiAgICAgICAgUkVHOiAvTHVidW50dS9pLFxyXG4gICAgICAgIFZBTFVFOiBMSU5VWF9PUy5MVUJVTlRVXHJcbiAgICB9LFxyXG4gICAgRkVET1JBOiB7XHJcbiAgICAgICAgUkVHOiAvRmVkb3JhL2ksXHJcbiAgICAgICAgVkFMVUU6IExJTlVYX09TLkZFRE9SQVxyXG4gICAgfSxcclxuICAgIFJFRF9IQVQ6IHtcclxuICAgICAgICBSRUc6IC9SZWQgSGF0L2ksXHJcbiAgICAgICAgVkFMVUU6IExJTlVYX09TLlJFRF9IQVRcclxuICAgIH0sXHJcbiAgICBNQU5EUklWQToge1xyXG4gICAgICAgIFJFRzogL01hbmRyaXZhL2ksXHJcbiAgICAgICAgVkFMVUU6IExJTlVYX09TLk1BTkRSSVZBXHJcbiAgICB9LFxyXG4gICAgR0VOVE9POiB7XHJcbiAgICAgICAgUkVHOiAvR2VudG9vL2ksXHJcbiAgICAgICAgVkFMVUU6IExJTlVYX09TLkdFTlRPT1xyXG4gICAgfSxcclxuICAgIFNBQkFZT046IHtcclxuICAgICAgICBSRUc6IC9TYWJheW9uL2ksXHJcbiAgICAgICAgVkFMVUU6IExJTlVYX09TLlNBQkFZT05cclxuICAgIH0sXHJcbiAgICBTTEFDS1dBUkU6IHtcclxuICAgICAgICBSRUc6IC9TbGFja3dhcmUvaSxcclxuICAgICAgICBWQUxVRTogTElOVVhfT1MuU0xBQ0tXQVJFXHJcbiAgICB9LFxyXG4gICAgU1VTRToge1xyXG4gICAgICAgIFJFRzogL1NVU0UvaSxcclxuICAgICAgICBWQUxVRTogTElOVVhfT1MuU1VTRVxyXG4gICAgfSxcclxuICAgIENFTlRfT1M6IHtcclxuICAgICAgICBSRUc6IC9DZW50T1MvaSxcclxuICAgICAgICBWQUxVRTogTElOVVhfT1MuQ0VOVF9PU1xyXG4gICAgfSxcclxuICAgIEJBQ0tUUkFDSzoge1xyXG4gICAgICAgIFJFRzogL0JhY2tUcmFjay9pLFxyXG4gICAgICAgIFZBTFVFOiBMSU5VWF9PUy5CQUNLVFJBQ0tcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdfQk9UUyA9IHtcclxuICAgIEdFTkVSSUNfQk9UOiB7XHJcbiAgICAgICAgUkVHOiAvYm90fGdvb2dsZWJvdHxjcmF3bGVyfHNwaWRlcnxyb2JvdHxjcmF3bGluZy9pLFxyXG4gICAgICAgIFZBTFVFOiBCT1RTLkdFTkVSSUNfQk9UXHJcbiAgICB9XHJcbn07XHJcbiJdfQ==