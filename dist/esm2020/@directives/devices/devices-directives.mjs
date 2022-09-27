/**
 * @name devices.directives
 * @description Devices directives in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input } from '@angular/core';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class IsSmartTvDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'smarttv';
        this._showWhenTrue = true;
    }
    set isSmartTv(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsSmartTvDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsSmartTvDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsSmartTvDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsSmartTvDirective, selector: "[isSmartTv]", inputs: { isSmartTv: "isSmartTv" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsSmartTvDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isSmartTv]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isSmartTv: [{
                type: Input
            }] } });
export class IsDesktopDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'desktop';
        this._showWhenTrue = true;
    }
    set isDesktop(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsDesktopDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsDesktopDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsDesktopDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsDesktopDirective, selector: "[isDesktop]", inputs: { isDesktop: "isDesktop" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsDesktopDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isDesktop]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isDesktop: [{
                type: Input
            }] } });
export class IsTabletDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'tablet';
        this._showWhenTrue = true;
    }
    set isTablet(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsTabletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsTabletDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsTabletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsTabletDirective, selector: "[isTablet]", inputs: { isTablet: "isTablet" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsTabletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isTablet]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isTablet: [{
                type: Input
            }] } });
export class IsMobileDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'mobile';
        this._showWhenTrue = true;
    }
    set isMobile(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsMobileDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsMobileDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsMobileDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsMobileDirective, selector: "[isMobile]", inputs: { isMobile: "isMobile" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsMobileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isMobile]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isMobile: [{
                type: Input
            }] } });
export class ShowItDeviceDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItDevice(grid_state) {
        this.setGrid(grid_state, 'device');
    }
}
ShowItDeviceDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItDeviceDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItDeviceDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItDeviceDirective, selector: "[showItDevice]", inputs: { showItDevice: "showItDevice" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItDeviceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItDevice]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { showItDevice: [{
                type: Input
            }] } });
export class HideItDeviceDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItDevice(grid_state) {
        this.setGrid(grid_state, 'device');
    }
}
HideItDeviceDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItDeviceDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItDeviceDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItDeviceDirective, selector: "[hideItDevice]", inputs: { hideItDevice: "hideItDevice" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItDeviceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItDevice]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { hideItDevice: [{
                type: Input
            }] } });
export class IsIphoneDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'iphone';
        this._showWhenTrue = true;
    }
    set isIphone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsIphoneDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIphoneDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIphoneDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIphoneDirective, selector: "[isIphone]", inputs: { isIphone: "isIphone" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIphoneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIphone]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isIphone: [{
                type: Input
            }] } });
export class IsIpadDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'iphone';
        this._showWhenTrue = true;
    }
    set isIphone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsIpadDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIpadDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsIpadDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsIpadDirective, selector: "[isIpad]", inputs: { isIphone: "isIphone" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsIpadDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isIpad]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isIphone: [{
                type: Input
            }] } });
export class IsAndroidMobileDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'android mobile';
        this._showWhenTrue = true;
    }
    set isAndroidMobile(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsAndroidMobileDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsAndroidMobileDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsAndroidMobileDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsAndroidMobileDirective, selector: "[isAndroidMobile]", inputs: { isAndroidMobile: "isAndroidMobile" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsAndroidMobileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isAndroidMobile]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isAndroidMobile: [{
                type: Input
            }] } });
export class IsAndroidTabletDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'android tablet';
        this._showWhenTrue = true;
    }
    set isAndroidTablet(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsAndroidTabletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsAndroidTabletDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsAndroidTabletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsAndroidTabletDirective, selector: "[isAndroidTablet]", inputs: { isAndroidTablet: "isAndroidTablet" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsAndroidTabletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isAndroidTablet]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isAndroidTablet: [{
                type: Input
            }] } });
export class IsWindowsPhoneDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'windows phone';
        this._showWhenTrue = true;
    }
    set isWindowsPhone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsWindowsPhoneDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsWindowsPhoneDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsWindowsPhoneDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsWindowsPhoneDirective, selector: "[isWindowsPhone]", inputs: { isWindowsPhone: "isWindowsPhone" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsWindowsPhoneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isWindowsPhone]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isWindowsPhone: [{
                type: Input
            }] } });
export class ShowItStandardDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = true;
    }
    set showItStandard(grid_state) {
        this.setGrid(grid_state, 'standard');
    }
}
ShowItStandardDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItStandardDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ShowItStandardDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ShowItStandardDirective, selector: "[showItStandard]", inputs: { showItStandard: "showItStandard" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ShowItStandardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showItStandard]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { showItStandard: [{
                type: Input
            }] } });
export class HideItStandardDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._showWhenTrue = false;
    }
    set hideItStandard(grid_state) {
        this.setGrid(grid_state, 'standard');
    }
}
HideItStandardDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItStandardDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
HideItStandardDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: HideItStandardDirective, selector: "[hideItStandard]", inputs: { hideItStandard: "hideItStandard" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: HideItStandardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hideItStandard]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { hideItStandard: [{
                type: Input
            }] } });
export class IsPortraitDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'portrait';
        this._showWhenTrue = false;
    }
    set isPortrait(grid_state) {
        this.setGrid(this._state, 'orientation');
    }
}
IsPortraitDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsPortraitDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsPortraitDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsPortraitDirective, selector: "[isPortrait]", inputs: { isPortrait: "isPortrait" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsPortraitDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isPortrait]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isPortrait: [{
                type: Input
            }] } });
export class IsLandscapeDirective extends RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        super(templateRef, viewContainer, _responsiveState, cd, platformService);
        this._state = 'landscape';
        this._showWhenTrue = false;
    }
    set isLandscape(grid_state) {
        this.setGrid(this._state, 'orientation');
    }
}
IsLandscapeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsLandscapeDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
IsLandscapeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IsLandscapeDirective, selector: "[isLandscape]", inputs: { isLandscape: "isLandscape" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IsLandscapeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isLandscape]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { isLandscape: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlcy1kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0BkaXJlY3RpdmVzL2RldmljZXMvZGV2aWNlcy1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9ELE1BQU0sZUFBZSxDQUFDO0FBR25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7OztBQU14RixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBb0I7SUFReEQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBWnJFLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFZL0IsQ0FBQztJQVZELElBQWEsU0FBUyxDQUFFLFVBQTJCO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUUsQ0FBQztJQUMxQyxDQUFDOzsrR0FQUSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs2TkFNZ0IsU0FBUztzQkFBckIsS0FBSzs7QUFnQlYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQW9CO0lBUXhELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVpyRSxXQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBWS9CLENBQUM7SUFWRCxJQUFhLFNBQVMsQ0FBRSxVQUE2QjtRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFFLENBQUM7SUFDMUMsQ0FBQzs7K0dBUFEsa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtpQkFDMUI7Nk5BTWdCLFNBQVM7c0JBQXJCLEtBQUs7O0FBZ0JWLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFvQjtJQVF2RCxZQUFhLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGdCQUFpQyxFQUNqQyxFQUFxQixFQUNyQixlQUFnQztRQUV6QyxLQUFLLENBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFFLENBQUM7UUFackUsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixrQkFBYSxHQUFHLElBQUksQ0FBQztJQVkvQixDQUFDO0lBVkQsSUFBYSxRQUFRLENBQUUsVUFBNkI7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBRSxDQUFDO0lBQzFDLENBQUM7OzhHQVBRLGlCQUFpQjtrR0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBSDdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7aUJBQ3pCOzZOQU1nQixRQUFRO3NCQUFwQixLQUFLOztBQWdCVixNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBb0I7SUFRdkQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBWnJFLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFZL0IsQ0FBQztJQVZELElBQWEsUUFBUSxDQUFFLFVBQTZCO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUUsQ0FBQztJQUMxQyxDQUFDOzs4R0FQUSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO2lCQUN6Qjs2TkFNZ0IsUUFBUTtzQkFBcEIsS0FBSzs7QUFpQlYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQW9CO0lBTzNELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVhyRSxrQkFBYSxHQUFHLElBQUksQ0FBQztJQVkvQixDQUFDO0lBVkQsSUFBYSxZQUFZLENBQUUsVUFBNkI7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLEVBQUUsUUFBUSxDQUFFLENBQUM7SUFDekMsQ0FBQzs7a0hBTlEscUJBQXFCO3NHQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFKakMsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3Qjs2TkFLZ0IsWUFBWTtzQkFBeEIsS0FBSzs7QUFnQlYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQW9CO0lBUTNELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVpyRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQWFoQyxDQUFDO0lBWEQsSUFBYSxZQUFZLENBQUUsVUFBNkI7UUFFcEQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLEVBQUUsUUFBUSxDQUFFLENBQUM7SUFDekMsQ0FBQzs7a0hBUFEscUJBQXFCO3NHQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3Qjs2TkFLZ0IsWUFBWTtzQkFBeEIsS0FBSzs7QUFrQlYsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGVBQW9CO0lBUXZELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVpyRSxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBWS9CLENBQUM7SUFWRCxJQUFhLFFBQVEsQ0FBRSxVQUEyQjtRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OEdBUFEsaUJBQWlCO2tHQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFKN0IsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsWUFBWTtpQkFDekI7Nk5BTWdCLFFBQVE7c0JBQXBCLEtBQUs7O0FBaUJWLE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQW9CO0lBUXJELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVpyRSxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBWS9CLENBQUM7SUFWRCxJQUFhLFFBQVEsQ0FBQyxVQUE2QjtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFFLENBQUM7SUFDNUMsQ0FBQzs7NEdBUFEsZUFBZTtnR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBSjNCLFNBQVM7bUJBQ1Y7b0JBQ0ksUUFBUSxFQUFFLFVBQVU7aUJBQ3ZCOzZOQU1nQixRQUFRO3NCQUFwQixLQUFLOztBQWlCVixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBb0I7SUFTOUQsWUFBYSxXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBaUMsRUFDakMsRUFBcUIsRUFDckIsZUFBZ0M7UUFFekMsS0FBSyxDQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFDO1FBYnJFLFdBQU0sR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQixrQkFBYSxHQUFHLElBQUksQ0FBQztJQWEvQixDQUFDO0lBWEQsSUFBYSxlQUFlLENBQUUsVUFBNkI7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O3FIQVBRLHdCQUF3Qjt5R0FBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQ1Y7b0JBQ0ksUUFBUSxFQUFFLG1CQUFtQjtpQkFDaEM7Nk5BTWdCLGVBQWU7c0JBQTNCLEtBQUs7O0FBa0JWLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFvQjtJQVE5RCxZQUFhLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGdCQUFpQyxFQUNqQyxFQUFxQixFQUNyQixlQUFnQztRQUV6QyxLQUFLLENBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFFLENBQUM7UUFackUsV0FBTSxHQUFHLGdCQUFnQixDQUFDO1FBQzFCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBWS9CLENBQUM7SUFWRCxJQUFhLGVBQWUsQ0FBRSxVQUE2QjtRQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFFLENBQUM7SUFDNUMsQ0FBQzs7cUhBUFEsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFKcEMsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzs2TkFNZ0IsZUFBZTtzQkFBM0IsS0FBSzs7QUFrQlYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQW9CO0lBUTdELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVpyRSxXQUFNLEdBQUcsZUFBZSxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBWS9CLENBQUM7SUFWRCxJQUFhLGNBQWMsQ0FBQyxVQUEyQjtRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFFLENBQUM7SUFDNUMsQ0FBQzs7b0hBUFEsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs2TkFNZ0IsY0FBYztzQkFBMUIsS0FBSzs7QUFrQlYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQW9CO0lBTzdELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVhyRSxrQkFBYSxHQUFHLElBQUksQ0FBQztJQVkvQixDQUFDO0lBVkQsSUFBYSxjQUFjLENBQUUsVUFBNkI7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLEVBQUUsVUFBVSxDQUFFLENBQUM7SUFDM0MsQ0FBQzs7b0hBTlEsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs2TkFLZ0IsY0FBYztzQkFBMUIsS0FBSzs7QUFpQlYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQW9CO0lBTzdELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVhyRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVloQyxDQUFDO0lBVkQsSUFBYSxjQUFjLENBQUUsVUFBNkI7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLEVBQUUsVUFBVSxDQUFFLENBQUM7SUFDM0MsQ0FBQzs7b0hBTlEsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs2TkFLZ0IsY0FBYztzQkFBMUIsS0FBSzs7QUFpQlYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQW9CO0lBUXpELFlBQWEsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWlDLEVBQ2pDLEVBQXFCLEVBQ3JCLGVBQWdDO1FBRXpDLEtBQUssQ0FBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBQztRQVpyRSxXQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBWWhDLENBQUM7SUFWRCxJQUFhLFVBQVUsQ0FBRSxVQUFrQjtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFFLENBQUM7SUFDL0MsQ0FBQzs7Z0hBUFEsbUJBQW1CO29HQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFDVjtvQkFDSSxRQUFRLEVBQUUsY0FBYztpQkFDM0I7Nk5BTWdCLFVBQVU7c0JBQXRCLEtBQUs7O0FBaUJWLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxlQUFvQjtJQVExRCxZQUFhLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGdCQUFpQyxFQUNqQyxFQUFxQixFQUNyQixlQUFnQztRQUV6QyxLQUFLLENBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFFLENBQUM7UUFackUsV0FBTSxHQUFHLFdBQVcsQ0FBQztRQUNyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVloQyxDQUFDO0lBVkQsSUFBYSxXQUFXLENBQUUsVUFBa0I7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBRSxDQUFDO0lBQy9DLENBQUM7O2lIQVBRLG9CQUFvQjtxR0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQ1Y7b0JBQ0ksUUFBUSxFQUFFLGVBQWU7aUJBQzVCOzZOQU1nQixXQUFXO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIGRldmljZXMuZGlyZWN0aXZlc1xyXG4gKiBAZGVzY3JpcHRpb24gRGV2aWNlcyBkaXJlY3RpdmVzIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuaW1wb3J0IHsgUkVTUE9OU0lWRV9CQVNFIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtYmFzZS9yZXNwb25zaXZlLWJhc2UnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcGxhdGZvcm0tc2VydmljZS9wbGF0Zm9ybS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaXNTbWFydFR2XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzU21hcnRUdkRpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ3NtYXJ0dHYnO1xyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBpc1NtYXJ0VHYoIGdyaWRfc3RhdGU6IHN0cmluZ1tdfHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnZGV2aWNlJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2lzRGVza3RvcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0Rlc2t0b3BEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdkZXNrdG9wJztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaXNEZXNrdG9wKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnZGV2aWNlJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2lzVGFibGV0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzVGFibGV0RGlyZWN0aXZlIGV4dGVuZHMgUkVTUE9OU0lWRV9CQVNFPGFueT4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBfc3RhdGUgPSAndGFibGV0JztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaXNUYWJsZXQoIGdyaWRfc3RhdGU6IHN0cmluZ1tdIHwgc3RyaW5nICkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCggdGhpcy5fc3RhdGUsICdkZXZpY2UnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaXNNb2JpbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNNb2JpbGVEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdtb2JpbGUnO1xyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBpc01vYmlsZSggZ3JpZF9zdGF0ZTogc3RyaW5nW10gfCBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCB0aGlzLl9zdGF0ZSwgJ2RldmljZScgKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZShcclxue1xyXG4gICAgc2VsZWN0b3I6ICdbc2hvd0l0RGV2aWNlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3dJdERldmljZURpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHNob3dJdERldmljZSggZ3JpZF9zdGF0ZTogc3RyaW5nW10gfCBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCBncmlkX3N0YXRlLCAnZGV2aWNlJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2hpZGVJdERldmljZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWRlSXREZXZpY2VEaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaGlkZUl0RGV2aWNlKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCBncmlkX3N0YXRlLCAnZGV2aWNlJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tpc0lwaG9uZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0lwaG9uZURpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ2lwaG9uZSc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGlzSXBob25lKCBncmlkX3N0YXRlOiBzdHJpbmdbXXxzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKHRoaXMuX3N0YXRlLCAnc3RhbmRhcmQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZShcclxue1xyXG4gICAgc2VsZWN0b3I6ICdbaXNJcGFkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzSXBhZERpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ2lwaG9uZSc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGlzSXBob25lKGdyaWRfc3RhdGU6IHN0cmluZ1tdIHwgc3RyaW5nICkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCggdGhpcy5fc3RhdGUsICdzdGFuZGFyZCcgKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZShcclxue1xyXG4gICAgc2VsZWN0b3I6ICdbaXNBbmRyb2lkTW9iaWxlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzQW5kcm9pZE1vYmlsZURpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ2FuZHJvaWQgbW9iaWxlJztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaXNBbmRyb2lkTW9iaWxlKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQodGhpcy5fc3RhdGUsICdzdGFuZGFyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZShcclxue1xyXG4gICAgc2VsZWN0b3I6ICdbaXNBbmRyb2lkVGFibGV0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzQW5kcm9pZFRhYmxldERpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ2FuZHJvaWQgdGFibGV0JztcclxuICAgIHByb3RlY3RlZCBfc2hvd1doZW5UcnVlID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaXNBbmRyb2lkVGFibGV0KCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnc3RhbmRhcmQnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tpc1dpbmRvd3NQaG9uZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc1dpbmRvd3NQaG9uZURpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ3dpbmRvd3MgcGhvbmUnO1xyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBpc1dpbmRvd3NQaG9uZShncmlkX3N0YXRlOiBzdHJpbmdbXXxzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIHRoaXMuX3N0YXRlLCAnc3RhbmRhcmQnICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciggdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoIHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBfcmVzcG9uc2l2ZVN0YXRlLCBjZCwgcGxhdGZvcm1TZXJ2aWNlICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tzaG93SXRTdGFuZGFyZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG93SXRTdGFuZGFyZERpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHNob3dJdFN0YW5kYXJkKCBncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnNldEdyaWQoIGdyaWRfc3RhdGUsICdzdGFuZGFyZCcgKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZShcclxue1xyXG4gICAgc2VsZWN0b3I6ICdbaGlkZUl0U3RhbmRhcmRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZUl0U3RhbmRhcmREaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaGlkZUl0U3RhbmRhcmQoIGdyaWRfc3RhdGU6IHN0cmluZ1tdIHwgc3RyaW5nICkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCggZ3JpZF9zdGF0ZSwgJ3N0YW5kYXJkJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tpc1BvcnRyYWl0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzUG9ydHJhaXREaXJlY3RpdmUgZXh0ZW5kcyBSRVNQT05TSVZFX0JBU0U8YW55PiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZSA9ICdwb3J0cmFpdCc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBpc1BvcnRyYWl0KCBncmlkX3N0YXRlOiBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkKCB0aGlzLl9zdGF0ZSwgJ29yaWVudGF0aW9uJyApO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKCB0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgX3Jlc3BvbnNpdmVTdGF0ZSwgY2QsIHBsYXRmb3JtU2VydmljZSApO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ1tpc0xhbmRzY2FwZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0xhbmRzY2FwZURpcmVjdGl2ZSBleHRlbmRzIFJFU1BPTlNJVkVfQkFTRTxhbnk+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlID0gJ2xhbmRzY2FwZSc7XHJcbiAgICBwcm90ZWN0ZWQgX3Nob3dXaGVuVHJ1ZSA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBpc0xhbmRzY2FwZSggZ3JpZF9zdGF0ZTogc3RyaW5nICkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZCggdGhpcy5fc3RhdGUsICdvcmllbnRhdGlvbicgKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICAgICAgICAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlciggdGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIF9yZXNwb25zaXZlU3RhdGUsIGNkLCBwbGF0Zm9ybVNlcnZpY2UgKTtcclxuICAgIH1cclxufVxyXG4iXX0=